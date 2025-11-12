import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the unlimited model work?",
    answer: "Once subscribed, you can submit unlimited video requests. We'll work on them one at a time (or two for Pro plan) until you're 100% satisfied. No limits on revisions or total videos per month.",
  },
  {
    question: "What's the average turnaround time?",
    answer: "Most videos are delivered within 48 hours of the initial brief. Complex projects may take 3-5 days. Enterprise clients get priority 24-hour turnaround on most requests.",
  },
  {
    question: "Can I pause my subscription?",
    answer: "Absolutely! Billing cycles are based on a 31-day period. You can pause whenever you need and resume anytime. Unused days roll over when you return.",
  },
  {
    question: "What types of videos do you create?",
    answer: "We specialize in product launches, ad creatives, demos, social content, event coverage, testimonials, and more. If it's a video, we can create it.",
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes, unlimited revisions! We'll iterate until you're completely happy with the final video. Your satisfaction is our priority.",
  },
  {
    question: "What if I need something custom?",
    answer: "Our Enterprise plan is fully customizable. We can tailor workflows, delivery times, and team structure to match your exact needs. Book a call to discuss.",
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
