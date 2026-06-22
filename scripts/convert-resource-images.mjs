#!/usr/bin/env node
import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT=process.cwd();
const RESOURCE=path.join(ROOT,'resource');
const OUT=path.join(ROOT,'src/assets/images/packages');
const MAP=path.join(ROOT,'scripts/data/package-image-map.generated.json');
const REPORT=path.join(ROOT,'scripts/data/package-image-map.summary.md');
const IMG_EXT=new Set(['.jpg','.jpeg','.png','.webp','.heic','.heif','.tif','.tiff','.bmp','.dng']);
const HARD=300*1024, IDEAL=200*1024;
const args=new Set(process.argv.slice(2));
const mode=args.has('--write')?'write':args.has('--check')?'check':'scan';
const APPLY=args.has('--apply');
const LIMIT=Number(process.env.RESOURCE_IMAGE_LIMIT||0);
const aliases={
  'kanhaloka':'kanha-loka','pesona-bajo':'pesonabajo','ocean-pro-2':'ocean-pro','alfatran-1':'alfathran','alfathran-3':'alfathran-3',
  'nk-jaya-1':'nk-jaya-1','nk-jaya-2':'nk-jaya-2'
};
function slug(s){return String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
function key(s){return slug(s).replace(/-/g,'');}
function rel(p){return path.relative(ROOT,p).split(path.sep).join('/');}
async function walk(dir){let out=[]; for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name); if(e.isDirectory()) out.push(...await walk(p)); else out.push(p)} return out;}
function classify(parts){const lower=parts.map(p=>p.toLowerCase()); if(lower.some(p=>p.includes('facility')||p.includes('fasilit'))) {const idx=lower.findIndex(p=>p.includes('facility')||p.includes('fasilit')); return {group:'facility', name:slug(parts[idx+1]||'common')};} if(lower.some(p=>p.includes('boat')||p.includes('kapal'))) return {group:'boat', name:'gallery'}; const folder=parts.at(-2)||'cabin'; return {group:'cabins', name:slug(folder)};}
function outputFor(src, i){const r=path.relative(RESOURCE,src).split(path.sep); const boatRaw=r[0]; const boat=aliases[slug(boatRaw)]||slug(boatRaw); const cls=classify(r); const base=slug(path.basename(src,path.extname(src)))||`image-${i+1}`; const seq=String(i+1).padStart(3,'0'); const sub=cls.group==='cabins'?`cabins/${cls.name}`:`${cls.group}/${cls.name}`; return {boatRaw,boat,group:cls.group,bucket:cls.name,srcRel:rel(src),outRel:`packages/${boat}/${sub}/${seq}-${base}.webp`,outAbs:path.join(OUT,boat,sub,`${seq}-${base}.webp`)};}
function ffmpegOk(){return spawnSync('ffmpeg',['-version'],{stdio:'ignore'}).status===0;}
function convert(src,dst){fss.mkdirSync(path.dirname(dst),{recursive:true}); const attempts=[
  {q:82,w:1800},{q:78,w:1600},{q:74,w:1400},{q:70,w:1200},{q:66,w:1100},{q:62,w:1000},{q:58,w:900},{q:54,w:800}
];
 for(const a of attempts){const vf=`scale='min(${a.w},iw)':-2`; const res=spawnSync('ffmpeg',['-y','-hide_banner','-loglevel','error','-i',src,'-vf',vf,'-c:v','libwebp','-quality',String(a.q),'-compression_level','6',dst],{encoding:'utf8'}); if(res.status!==0) continue; const st=fss.statSync(dst); if(st.size<=HARD || a===attempts.at(-1)) return {ok:st.size<=HARD,size:st.size,q:a.q,w:a.w}; }
 return {ok:false,size:0};}
async function packages(){const dir=path.join(ROOT,'scripts/data/packages'); const list=[]; for(const d of await fs.readdir(dir,{withFileTypes:true})){if(!d.isDirectory()) continue; const p=path.join(dir,d.name,'main.json'); const j=JSON.parse(await fs.readFile(p,'utf8')); if(j.boatName) list.push({slug:d.name,path:p,data:j,boatName:j.boatName,boatSlug:slug(j.boatName),cabins:j.cabins||[]});} return list;}
function matchBoats(pkgs, boats){const byKey=new Map(); for(const b of boats){const k=key(aliases[slug(b)]||b); if(!byKey.has(k)) byKey.set(k,[]); byKey.get(k).push(b);} const errors=[]; const missing=[]; const map={}; for(const p of pkgs){let hits=byKey.get(key(p.boatName))||byKey.get(key(p.boatSlug))||[]; if(hits.length===0) missing.push(`${p.slug} (${p.boatName})`); else if(hits.length>1) errors.push(`${p.slug} (${p.boatName}) matched ${hits.length}: ${hits.join(', ')}`); else map[p.slug]=aliases[slug(hits[0])]||slug(hits[0]);} return {map,errors,missing};}
function pick(arr,n){return arr.slice(0,n).map(x=>x.outRel)}
function sim(a,b){const stop=new Set(['cabin','room','deck','lower','main','upper','view','bed','queen','single','double','triple','pax','private','add']); const aa=slug(a), bb=slug(b); if(aa===bb) return 1; if(aa.includes(bb)||bb.includes(aa)) return .9; const aw=new Set(aa.split('-').filter(w=>w&&!stop.has(w)&&!/^\d+$/.test(w))); const bw=bb.split('-').filter(w=>w&&!stop.has(w)&&!/^\d+$/.test(w)); let m=0; for(const w of bw) if(aw.has(w)) m++; return m/Math.max(1,Math.min(aw.size,bw.length));}
async function main(){const files=await walk(RESOURCE); const ignored={}, images=[]; for(const f of files){const ext=path.extname(f).toLowerCase(); if(IMG_EXT.has(ext)) images.push(f); else ignored[ext||'(none)']=(ignored[ext||'(none)']||0)+1;} const selected=LIMIT?images.slice(0,LIMIT):images; const assets=selected.map(outputFor); const boats=[...new Set(assets.map(a=>a.boatRaw))]; const pkgs=await packages(); const m=matchBoats(pkgs,boats); if(m.errors.length && mode!=='scan'){throw new Error('Boat mapping errors:\n'+m.errors.join('\n'));}
 if(mode==='write'){if(!ffmpegOk()) throw new Error('ffmpeg not found'); let done=0,fail=[]; for(const a of assets){let r; if(fss.existsSync(a.outAbs) && fss.statSync(a.outAbs).size<=HARD){r={ok:true,size:fss.statSync(a.outAbs).size,skipped:true};} else {r=convert(path.join(ROOT,a.srcRel),a.outAbs);} a.convert=r; if(!r.ok) fail.push(a.srcRel); if(++done%50===0) console.log(`converted ${done}/${assets.length}`);} if(fail.length) console.warn(`Failed/oversize: ${fail.length}`);}
 const existing=assets.filter(a=>fss.existsSync(path.join(ROOT,'src/assets/images',a.outRel))).map(a=>({...a,size:fss.statSync(path.join(ROOT,'src/assets/images',a.outRel)).size}));
 const byBoat={}; for(const a of assets){(byBoat[a.boat]??=[]).push(a)}
 const packageMappings={}; for(const p of pkgs){const b=m.map[p.slug]; if(!b) continue; const arr=byBoat[b]||[]; const boatImgs=arr.filter(a=>a.group==='boat'); const fac=arr.filter(a=>a.group==='facility'); const cabins=arr.filter(a=>a.group==='cabins'); const cabinBuckets=[...new Set(cabins.map(a=>a.bucket))]; const cabinMap={}; const cabinErrors=[]; for(const c of p.cabins){let scored=cabinBuckets.map(x=>({x,s:sim(c.name,x)})).filter(x=>x.s>=.45).sort((a,b)=>b.s-a.s); if(scored.length>1 && scored[0].s===scored[1].s) cabinErrors.push(`${c.name}: ${scored.map(s=>s.x).join(', ')}`); const bucket=scored[0]?.x; cabinMap[c.name]=bucket?pick(cabins.filter(a=>a.bucket===bucket),4):[]; if(!bucket) cabinErrors.push(`${c.name}: no folder match`); }
   packageMappings[p.slug]={boatName:p.boatName,boat:b,images:pick([...boatImgs,...fac,...arr.filter(a=>a.group==='cabins')],5),cabins:cabinMap,cabinErrors}; }
 const summary={mode,totalFiles:files.length,imageFiles:images.length,selectedImages:selected.length,ignored,boatErrors:m.errors,missingBoats:m.missing,assets:assets.map(a=>({source:a.srcRel,output:a.outRel,group:a.group,bucket:a.bucket,size:a.size??a.convert?.size})),packages:packageMappings};
 await fs.writeFile(MAP,JSON.stringify(summary,null,2));
 const sizes=existing.map(x=>x.size); const over=sizes.filter(s=>s>HARD).length;
 await fs.writeFile(REPORT,`# Package image map summary\n\nMode: ${mode}\nImages: ${images.length}\nIgnored: ${JSON.stringify(ignored)}\nExisting converted: ${existing.length}\n<100KB: ${sizes.filter(s=>s<100*1024).length}\n<200KB: ${sizes.filter(s=>s<IDEAL).length}\n<=300KB: ${sizes.filter(s=>s<=HARD).length}\n>300KB: ${over}\n\nBoat errors:\n${m.errors.map(e=>'- '+e).join('\n')||'- none'}\n\nMissing resource boats (skipped, existing JSON left unchanged):\n${m.missing.map(e=>'- '+e).join('\n')||'- none'}\n`);
 if(APPLY){for(const [slugName,pm] of Object.entries(packageMappings)){const pkg=pkgs.find(p=>p.slug===slugName); if(!pkg) continue; if(pm.images.length) pkg.data.images=pm.images; for(const c of pkg.data.cabins||[]){const imgs=pm.cabins[c.name]||[]; if(imgs.length && !(pm.cabinErrors||[]).some(e=>e.startsWith(`${c.name}:`))) c.images=imgs;} await fs.writeFile(pkg.path,JSON.stringify(pkg.data,null,2)+'\n'); }}
 if(mode==='check' && (over || m.errors.length)) process.exit(1); console.log(`Wrote ${rel(MAP)} and ${rel(REPORT)}`);
}
main().catch(e=>{console.error(e.message); process.exit(1)});
