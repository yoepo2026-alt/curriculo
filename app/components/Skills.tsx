import SkillBar from './SkillBar';

export interface Skill {
  name: string;
  level: 'baixa' | 'intermediaria' | 'avancada';
}

export interface SkillsProps {
  title?: string;
  skills: Skill[];
}

export default function Skills({ 
  title = 'Habilidades',
  skills 
}: SkillsProps) {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillBar 
              key={index}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
