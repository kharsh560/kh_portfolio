import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Layers } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Bg decoration */}
      <div
        className="absolute top-20 right-0 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(175 70% 45% / 0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 space-y-3">
          <p className="section-label">
            <Layers size={12} />
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            My Hosted Work
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A curated selection of projects showcasing skills across the full stack — from elegant UIs to robust backends.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-primary/30 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, hsl(220 20% 6% / 0.6) 0%, transparent 60%)',
                  }}
                />
                {/* Project number */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold backdrop-blur-sm opacity-80"
                  style={{
                    background: 'hsl(220 20% 6% / 0.7)',
                    color: 'hsl(215 15% 65%)',
                    border: '1px solid hsl(220 16% 25% / 0.6)',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3.5">
                <h3 className="text-base font-bold text-foreground group-hover:text-gradient transition-all duration-300 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-md font-medium"
                      style={{
                        background: 'hsl(250 84% 67% / 0.1)',
                        color: 'hsl(250 84% 72%)',
                        border: '1px solid hsl(250 84% 67% / 0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span
                      className="px-2 py-0.5 text-xs rounded-md font-medium"
                      style={{
                        background: 'hsl(var(--muted))',
                        color: 'hsl(var(--muted-foreground))',
                        border: '1px solid hsl(var(--border))',
                      }}
                    >
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2.5 pt-1">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, hsl(250 84% 67%), hsl(250 70% 58%))',
                        color: '#fff',
                        boxShadow: '0 4px 12px hsl(250 84% 67% / 0.25)',
                      }}
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold border border-border hover:border-border/80 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <GithubIcon />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
