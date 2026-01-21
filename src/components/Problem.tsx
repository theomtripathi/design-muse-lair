import { AlertTriangle, TrendingUp, Podcast, ArrowDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    text: "Inbound dealflow and leads are increasingly commoditized",
  },
  {
    icon: AlertTriangle,
    text: "Relationships with founders, customers, and partners are shallow and transactional",
  },
  {
    icon: AlertTriangle,
    text: "Content is inconsistent and disconnected from strategy",
  },
];

const shifts = [
  {
    icon: TrendingUp,
    text: "A relationship engine",
    description: "Build genuine connections with the people who matter most to your business",
  },
  {
    icon: TrendingUp,
    text: "A distribution moat",
    description: "Own your audience and reach them directly, on your terms",
  },
  {
    icon: TrendingUp,
    text: "A compounding brand asset",
    description: "Every episode builds equity that appreciates over time",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* The Problem */}
        <div className="animate-fade-in mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
              <AlertTriangle className="h-4 w-4 text-primary" />
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              VC firms and tech leaders are competing for attention in a <span className="text-gradient">noisy market</span>.
            </h2>
          </div>
          
          <div className="space-y-4 mb-10">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="glass-card p-5 rounded-xl flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon className="h-5 w-5 text-destructive" />
                </div>
                <span className="text-lg text-muted-foreground pt-1.5">{problem.text}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 rounded-xl border-l-4 border-destructive bg-destructive/5">
            <p className="text-sm font-medium text-destructive mb-1">The cost of doing nothing:</p>
            <p className="text-muted-foreground">
              You rely on warm intros and cold outreach while stronger brands build direct trust at scale.
            </p>
          </div>
        </div>

        {/* Divider Arrow */}
        <div className="flex justify-center mb-20">
          <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* The Shift */}
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
              <Podcast className="h-4 w-4 text-primary" />
              The Shift
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The best firms don't chase opportunities. They build platforms people <span className="text-gradient">want to be part of</span>.
            </h2>
            <p className="text-xl text-muted-foreground">
              A well-run podcast becomes:
            </p>
          </div>

          <div className="space-y-4">
            {shifts.map((shift, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl flex items-start gap-5 hover:scale-[1.02] transition-all duration-300 glow-hover animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <shift.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <span className="text-xl font-semibold block mb-1">{shift.text}</span>
                  <span className="text-muted-foreground">{shift.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
