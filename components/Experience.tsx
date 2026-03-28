import { Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import portfolioData from '@/data/portfolio.json';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={exp.id}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
                      <span className="font-medium">at {exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {idx < experience.length - 1 && <Separator className="mt-12" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
