export interface Skill {
  name: string;
  level: 'baixa' | 'intermediaria' | 'avancada';
}

export interface SkillsCompactProps {
  title?: string;
  skills: Skill[];
}

export default function SkillsCompact({
  title = "Habilidades",
  skills
}: SkillsCompactProps) {
  const getLevelPercentage = (lvl: string): number => {
    switch (lvl) {
      case 'baixa':
        return 33;
      case 'intermediaria':
        return 66;
      case 'avancada':
        return 100;
      default:
        return 0;
    }
  };

  const getLevelLabel = (lvl: string): string => {
    switch (lvl) {
      case 'baixa':
        return 'B';
      case 'intermediaria':
        return 'I';
      case 'avancada':
        return 'A';
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
      default:
        return { badge: 'bg-slate-300 text-slate-900', bar: 'bg-slate-300' };
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-700 to-slate-600">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-3">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {skills.map((skill, index) => {
            const percentage = getLevelPercentage(skill.level);
            const { badge: badgeColor, bar: barColor } = getLevelColor(skill.level);
            const levelLabel = getLevelLabel(skill.level);

            return (
              <div key={index} className="p-3 bg-slate-600 rounded-lg border border-slate-500 hover:shadow-md hover:bg-slate-500 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xs font-semibold text-white truncate flex-1">
                    {skill.name}
                  </h3>
                  <span className={`px-1.5 py-0.5 rounded text-xs font-bold flex-shrink-0 ml-1 ${badgeColor}`}>
                    {levelLabel}
                  </span>
                </div>

                {/* Barra de progresso */}
                <div className="w-full bg-slate-500 rounded-full h-1.5 overflow-hidden">
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
