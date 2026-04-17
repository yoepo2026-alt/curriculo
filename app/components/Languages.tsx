export interface Language {
  name: string;
  level: 'baixa' | 'intermediaria' | 'avancada' | 'nativa';
}

export interface LanguagesProps {
  title?: string;
  languages: Language[];
}

export default function Languages({
  title = "Idiomas",
  languages
}: LanguagesProps) {
  const getLevelPercentage = (lvl: string): number => {
    switch (lvl) {
      case 'baixa':
        return 33;
      case 'intermediaria':
        return 66;
      case 'avancada':
        return 85;
      case 'nativa':
        return 100;
      default:
        return 0;
    }
  };

  const getLevelLabel = (lvl: string): string => {
    switch (lvl) {
      case 'baixa':
        return 'Básico';
      case 'intermediaria':
        return 'Intermediário';
      case 'avancada':
        return 'Avançado';
      case 'nativa':
        return 'Nativo';
      default:
        return '';
    }
  };

  const getLevelColor = (lvl: string): { badge: string; bar: string } => {
    switch (lvl) {
      case 'baixa':
        return { badge: 'bg-slate-400 text-slate-900', bar: 'bg-gradient-to-r from-slate-400 to-slate-500' };
      case 'intermediaria':
        return { badge: 'bg-blue-500 text-white', bar: 'bg-gradient-to-r from-blue-400 to-blue-600' };
      case 'avancada':
        return { badge: 'bg-blue-700 text-white', bar: 'bg-gradient-to-r from-blue-600 to-blue-800' };
      case 'nativa':
        return { badge: 'bg-emerald-600 text-white', bar: 'bg-gradient-to-r from-emerald-500 to-emerald-700' };
      default:
        return { badge: 'bg-slate-300 text-slate-900', bar: 'bg-slate-300' };
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => {
            const percentage = getLevelPercentage(language.level);
            const { badge: badgeColor, bar: barColor } = getLevelColor(language.level);
            const levelLabel = getLevelLabel(language.level);

            return (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {language.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeColor}`}>
                    {levelLabel}
                  </span>
                </div>

                {/* Barra de progresso */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${barColor} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
