export interface AboutProps {
  name: string;
  description: string;
  photoUrl: string;
  photoAlt?: string;
}

export default function About({ name, description, photoUrl, photoAlt = "Foto de perfil" }: AboutProps) {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl blur-xl opacity-30"></div>
              <img
                src={photoUrl}
                alt={photoAlt}
                className="w-56 h-56 md:w-64 md:h-64 rounded-xl object-cover shadow-2xl relative border-4 border-white dark:border-slate-800"
              />
            </div>
          </div>

          {/* Descrição */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {name}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mb-6 rounded-full"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
