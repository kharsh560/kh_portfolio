'use client';

import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import portfolioData from '@/data/portfolio.json';

export default function Blog() {
  const { blogs } = portfolioData;
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const currentBlog = blogs[currentBlogIndex];

  const handlePrevious = () => {
    setCurrentBlogIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1));
  };

  const handleNext = () => {
    setCurrentBlogIndex((prev) => (prev < blogs.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here, I document my journey as a software developer, encompassing the projects I have
            undertaken in full stack web development, my progress in Data Structures and
            Algorithms (DSA), and my experiences in the field of AI & ML.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Last Updated: {currentBlog.date}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentBlogIndex + 1} of {blogs.length}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-6">{currentBlog.title}</h3>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {currentBlog.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="gap-2"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>

            <div className="flex gap-2">
              {blogs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBlogIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentBlogIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to blog ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              className="gap-2"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
