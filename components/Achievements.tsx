import Link from 'next/link';
import { Trophy, ExternalLink, Star } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'hsl(var(--background-secondary))' }}
    >
      {/* Bg orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(175 70% 45% / 0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 space-y-3">
          <p className="section-label">
            <Trophy size={12} />
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Milestones and recognitions that reflect hard work, teamwork, and the drive to push boundaries.
          </p>
        </div>

        <div className="grid gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.id}
              className="group relative flex items-start gap-5 p-6 sm:p-7 rounded-2xl border border-border/60 bg-card hover:border-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10"
            >
              {/* Gradient accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(45 93% 58% / 0.5), transparent)',
                }}
              />

              {/* Trophy icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'hsl(45 93% 58% / 0.1)',
                  borderColor: 'hsl(45 93% 58% / 0.25)',
                }}
              >
                <Trophy size={22} className="text-amber-400" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                    {achievement.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <Link
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:gap-2.5"
                    style={{ color: 'hsl(250 84% 72%)' }}
                  >
                    View on LinkedIn
                    <ExternalLink size={12} />
                  </Link>
                )}
              </div>

              {/* Number badge */}
              <div
                className="absolute top-5 right-5 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'hsl(45 93% 58% / 0.2)',
                  color: 'hsl(45 93% 58%)',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
