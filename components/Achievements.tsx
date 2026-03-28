import Link from 'next/link';
import { Trophy, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import portfolioData from '@/data/portfolio.json';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>

        <div className="space-y-8">
          {achievements.map((achievement, idx) => (
            <div key={achievement.id}>
              <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-500">
                  <Trophy size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <Link
                      href={achievement.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View on LinkedIn
                      <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
              </div>
              {idx < achievements.length - 1 && <Separator className="my-8" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
