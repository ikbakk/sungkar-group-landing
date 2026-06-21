const FILE_PATH_RE = /\.[a-z0-9]+$/i;

function collapseWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function normalizeMetaDescription(
  description: string,
  maxLength = 160,
) {
  const normalized = collapseWhitespace(description);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const slice = normalized.slice(0, maxLength + 1);
  const sentenceBoundary = Math.max(
    slice.lastIndexOf(". "),
    slice.lastIndexOf("! "),
    slice.lastIndexOf("? "),
    slice.lastIndexOf("。"),
    slice.lastIndexOf("！"),
    slice.lastIndexOf("？"),
  );

  if (sentenceBoundary >= Math.floor(maxLength * 0.6)) {
    return slice.slice(0, sentenceBoundary + 1).trim();
  }

  const wordBoundary = slice.lastIndexOf(" ");
  const cutoff = wordBoundary >= Math.floor(maxLength * 0.6)
    ? wordBoundary
    : maxLength;

  return `${slice.slice(0, cutoff).trim()}…`;
}

export function appendTrailingSlash(pathname: string) {
  if (!pathname || pathname === "/" || pathname.endsWith("/")) {
    return pathname || "/";
  }

  if (FILE_PATH_RE.test(pathname)) {
    return pathname;
  }

  return `${pathname}/`;
}
