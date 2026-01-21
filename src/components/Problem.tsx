import { AlertTriangle, TrendingUp, Podcast } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    text: "Inbound dealflow is increasingly commoditized",
  },
  {
    icon: AlertTriangle,
    text: "Founder relationships are shallow and transactional",
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
  },
  {
    icon: TrendingUp,
    text: "A distribution moat",
  },
  {
    icon: TrendingUp,
    text: "A compounding brand asset",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* The Problem */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
              <AlertTriangle className="h-4 w-4 text-primary" />
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Venture firms and tech leaders are competing for attention in a <span className="text-gradient">noisy market</span>.
            </h2>
            
            <ul className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-muted-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <problem.icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span>{problem.text}</span>
                </li>
              ))}
            </ul>

            <div className="glass-card p-6 rounded-xl border-l-4 border-primary">
              <p className="text-sm font-medium text-primary mb-1">The cost of doing nothing:</p>
              <p className="text-muted-foreground">
                You rely on warm intros while stronger brands build direct founder trust at scale.
              </p>
            </div>
          </div>

          {/* The Shift */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
              <Podcast className="h-4 w-4 text-primary" />
              The Shift
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The best funds do not chase founders. They build platforms founders <span className="text-gradient">want to be part of</span>.
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              A well run podcast becomes:
            </p>

            <div className="space-y-4">
              {shifts.map((shift, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl flex items-center gap-4 hover:scale-105 transition-all duration-300 glow-hover"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <shift.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{shift.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
