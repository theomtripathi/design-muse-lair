import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does pricing work?",
    answer: "We operate on a monthly retainer model. Pricing depends on which parts of the podcast lifecycle we manage for you.",
  },
  {
    question: "Do I need all four stages?",
    answer: "No. Some teams start with pre production and production. Others plug us in only for post production and distribution.",
  },
  {
    question: "Is this only for venture capital firms?",
    answer: "No. We work with venture firms and technology companies that want to build authority and attract the right relationships.",
  },
  {
    question: "How long does it take to launch?",
    answer: "Most podcasts go live within 30 days of kickoff.",
  },
  {
    question: "Do you help with guests?",
    answer: "Yes. Guest strategy and management is a core part of our pre production offering.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            Questions & Answers
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with Clipsi.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 rounded-xl border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
