'use client';

import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function Blog() {
  const { blogs } = portfolioData;
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const currentBlog = blogs[currentBlogIndex];

  const handlePrevious = () =>
    setCurrentBlogIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1));

  const handleNext = () =>
    setCurrentBlogIndex((prev) => (prev < blogs.length - 1 ? prev + 1 : 0));

  return (
    <section
      id="blog"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'hsl(var(--background-secondary))' }}
    >
      {/* Bg orb */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(250 84% 67% / 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-14 space-y-3">
          <p className="section-label">
            <BookOpen size={12} />
            Writing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            I document my journey as a software developer — encompassing full-stack projects, DSA progress, and AI/ML explorations.
          </p>
        </div>

        {/* Blog card */}
        <div
          className="relative rounded-2xl border border-border/60 bg-card overflow-hidden"
          style={{ boxShadow: '0 20px 60px hsl(220 20% 4% / 0.4)' }}
        >
          {/* Top gradient bar */}
          <div
            className="h-1 w-full"
            style={{
              background: 'linear-gradient(90deg, hsl(250 84% 67%), hsl(175 70% 45%))',
            }}
          />

          <div className="p-7 sm:p-9">
            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'hsl(250 84% 67% / 0.1)',
                    border: '1px solid hsl(250 84% 67% / 0.2)',
                  }}
                >
                  <Calendar size={13} className="text-primary" />
                </div>
                <span className="text-xs font-medium">{currentBlog.date}</span>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground font-mono">
                  <span className="text-foreground font-semibold">{currentBlogIndex + 1}</span>
                  <span className="mx-1">/</span>
                  {blogs.length}
                </span>
                <div className="flex gap-1">
                  {blogs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentBlogIndex(idx)}
                      aria-label={`Go to blog ${idx + 1}`}
                      className="relative rounded-full transition-all duration-300"
                      style={{
                        width: idx === currentBlogIndex ? '20px' : '6px',
                        height: '6px',
                        background:
                          idx === currentBlogIndex
                            ? 'linear-gradient(90deg, hsl(250 84% 67%), hsl(175 70% 45%))'
                            : 'hsl(var(--muted-foreground) / 0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 leading-tight">
              {currentBlog.title}
            </h3>

            {/* Content */}
            <div className="space-y-4 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
              {currentBlog.content.split('\n').map((paragraph, idx) =>
                paragraph.trim() ? (
                  <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ) : null
              )}
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-border/50" />

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/70 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 hover:-translate-x-0.5"
              >
                <ChevronLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-0.5"
                />
                Previous
              </button>

              <button
                onClick={handleNext}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/70 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 hover:translate-x-0.5"
              >
                Next
                <ChevronRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
