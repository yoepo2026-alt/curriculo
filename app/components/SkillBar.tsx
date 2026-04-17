export interface SkillBarProps {
  name: string;
  level: 'baixa' | 'intermediaria' | 'avancada';
}

export default function SkillBar({ name, level }: SkillBarProps) {
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
        return 'Básica';
      case 'intermediaria':
        return 'Intermediária';
      case 'avancada':
        return 'Avançada';
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

  const percentage = getLevelPercentage(level);
  const { badge: badgeColor, bar: barColor } = getLevelColor(level);
  const levelLabel = getLevelLabel(level);

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {name}
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
}
