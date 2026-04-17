'use client';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  cta?: string;
}

export default function Header({
  title,
  subtitle = "Desenvolvedor Full Stack | Especialista em Automação",
  cta = "Conheça meu trabalho"
}: HeaderProps) {
  const scrollToContent = () => {
    const element = document.getElementById("content-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white max-h-[250px] flex items-center justify-center px-1 py-1">
      <div className="mx-auto text-center">
        {/* Elemento decorativo */}
 {/*        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl opacity-30 absolute"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 relative"></div>
        </div>
 */}
        {/* Subtítulo */}
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-light">
          {subtitle}
        </p>

        {/* Descrição resumida */}
        <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Transformando ideias em soluções digitais inovadoras com mais de 30 anos de experiência em tecnologia, automação e desenvolvimento de sistemas.
        </p>

        {/* CTA Button */}
 {/*        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContent}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {cta}
          </button>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 border-2 border-blue-400 text-blue-300 hover:text-white hover:border-white font-bold rounded-lg transition-all duration-300"
          >
            Ver mais
          </button>
        </div>
 */}
        {/* Scroll indicator */}
 {/*        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
 */}      </div>
    </header>
  );
}
