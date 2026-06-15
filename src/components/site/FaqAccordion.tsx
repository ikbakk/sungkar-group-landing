import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  variant: "divider" | "card";
}

export default function FaqAccordion({ items, variant }: Props) {
  if (variant === "divider") {
    return (
      <Accordion className="w-full border-0" multiple>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-border py-1 last:border-b-0"
          >
            <AccordionTrigger className="py-3 text-sm font-medium text-foreground hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-7 text-text-muted">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <Accordion className="w-full rounded-lg border border-border px-4" multiple>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-b border-border last:border-b-0"
        >
          <AccordionTrigger className="py-3 text-sm font-medium text-foreground hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-7 text-text-muted">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
