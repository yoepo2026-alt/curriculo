import Link from 'next/link';

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface ExperienceProps {
  title?: string;
  experiences: ExperienceItem[];
}

export default function Experience({
  title = "Experiência Profissional",
  experiences
}: ExperienceProps) {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-700 to-slate-600">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Linha vertical */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}

              <div className="flex gap-6">
                {/* Ponto na timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Conteúdo da experiência */}
                <div className="pb-8 flex-1">
                  <div className="bg-slate-600 p-6 rounded-lg border border-slate-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-blue-300 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-300 mt-2">
                        {exp.period}
                      </p>
                    </div>

                    {/* Descrição */}
                    <p className="text-slate-200 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-500">
                        <p className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                          Destaques
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Button para ver projetos */}
                    <div className="mt-6 pt-4 border-t border-slate-500">
                      <Link
                        href={`/experience/${exp.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Ver Projetos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
