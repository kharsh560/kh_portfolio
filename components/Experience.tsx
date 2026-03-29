import { Briefcase, Calendar, MapPin } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle bg */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(250 84% 67% / 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 space-y-3">
          <p className="section-label">
            <Briefcase size={12} />
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xl">
            My professional journey building real products at the intersection of full-stack, AI, and DevOps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px"
            style={{
              background: 'linear-gradient(to bottom, hsl(250 84% 67% / 0.6), hsl(175 70% 45% / 0.4), transparent)',
            }}
          />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="relative flex gap-8 group">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-border/80 bg-card group-hover:border-primary/40 transition-colors duration-300"
                    style={{
                      boxShadow: '0 0 0 4px hsl(var(--background))',
                    }}
                  >
                    <Briefcase size={16} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div
                    className="relative p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-black/10"
                  >
                    {/* Hover accent line */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, hsl(250 84% 67% / 0.6), transparent)',
                      }}
                    />

                    {/* Header */}
                    <div className="mb-5">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                          {exp.role}
                        </h3>
                        <span
                          className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'hsl(250 84% 67% / 0.12)',
                            color: 'hsl(250 84% 72%)',
                            border: '1px solid hsl(250 84% 67% / 0.2)',
                          }}
                        >
                          {idx === 0 ? 'Current' : 'Active'}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium text-foreground/80">
                          <MapPin size={13} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3.5">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span
                            className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                            style={{
                              background: 'linear-gradient(135deg, hsl(250 84% 67%), hsl(175 70% 45%))',
                            }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
