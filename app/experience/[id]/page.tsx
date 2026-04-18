import Link from 'next/link';
import Projects from '@/app/components/Projects';
import type { Project } from '@/app/components/Projects';

// Dados das experiências com seus projetos
const experiencesData: Record<string, any> = {
  'fullstack-developer': {
     position: "Desenvolvedor Full Stack",
      company: "Compacto Caribe S.A.",
      period: "05/2017 - 02/2026",
      description: "Projeto e desenvolvimento de software para a automação da maioria dos processos da empresa dedicada a fabricação de caixas de cartão corrugado, utilizando C#, .Net, JavaScript,TypeScript, React, CSS, HTML e SQL Server.",
      achievements: [
        "Creacão de sistema de controle de produção, resultando em aumento de eficiência e redução de erros manuais",
        "Automatização de processos administrativos, economizando tempo e recursos  da equipe administrativa, comercial, econômica e de logística ",
        "Instalaçao de sistema de CCT para monitoramento de segurança, integrando com sistemas de automação para resposta rápida a incidentes",
        "Desenvolvimento de dashboard de indicadores de produção e eficiência, permitindo melhor tomada de decisões estratégicas" ,
        "Instalacão de sistema Asterisk para gestão de chamadas e integração com sistemas de automação para otimizar atendimento ao cliente"        
      ],
    projects: [
      {
        id: "1",
        title: "Blog Empresarial",
        description: "Desenvolvimento de um blog empresarial com WordPress, permitindo publicação de artigos, integração com redes sociais e otimização SEO.",
        technologies: ["WordPress", "PHP", "CMS"],
        image: "../../images/projetos/blog.jpg",
/*        link: "https://example-dashboard.com",
        github: "https://github.com/example/dashboard",
 */        highlights: [
            "Sistema de publicação de artigos com editor visual",
            "Integração com redes sociais para compartilhamento automático",
            "Otimização SEO com plugins e práticas recomendadas"
        ]
      },
      {
        id: "2",
        title: "Automatização de Processos de Controle da Produção",
        description: "Desenvolvimento de sistema de controle de produção para a empresa, resultando em aumento de eficiência e redução de erros manuais.",
        technologies: ["C#", ".NET", "MVC5", "Dev Express", "SQL Server", "Visual Studio", "Git", "HTML", "CSS", "JavaScript"],
        image: "../../images/projetos/controleproducao.jpg",
        //link: "https://example-ecommerce.com",
        //github: "https://github.com/example/ecommerce",
        highlights: [
          "Sistema de controle de produção com interface intuitiva",
          "Automatização de processos administrativos relacionados à produção",
          "Dashboard de indicadores de produção e eficiência"
        ]
      },
      {
        id: "3",
        title: "Gestão de Chamadas com Asterisk",
        description: "Desenvolvimento e implementação de sistema de gestão de chamadas utilizando Asterisk, integrando com sistemas de automação para otimizar atendimento ao cliente.",
        technologies: ["Asterisk", "VoIP", "SIP", "Integracão de sistemas de automação"],
        image: "../../images/projetos/asterisk.jpg",
        //link: "https://example-tasks.com",
        //github: "https://github.com/example/tasks",
        highlights: [
          "Sistema de gestão de chamadas com Asterisk",
          "Integração com sistemas de automação para resposta rápida a incidentes",
          "Melhoria do atendimento ao cliente e otimização de recursos"
        ]
      },
      {
        id: "4",
        title: "Gestão do processo de contratação de clientes e fornecedores",
        description: "Desenvolvimento de sistema de gestão do processo de contratação de clientes e fornecedores, resultando em otimização do processo e melhor controle das informações.",
        technologies: ["C#", ".NET", "MVC5", "Dev Express", "SQL Server", "Visual Studio", "Git", "HTML", "CSS", "JavaScript"],
        image: "../../images/projetos/contratacao.jpg",
        //link: "https://example-cms.com",
        //github: "https://github.com/example/cms",
        highlights: [
          "Suporte a múltiplos idiomas",
          "Versionamento automático de conteúdo",
          "Deploy automático em Vercel"
        ]
      }
    ]
  },
  'automation-engineer': {
      position: "Especialista em Automação",
      company: "Companhia de automação integral CEDAI, Cuba",
      period: "2001 - 2016",
      description: "Projetos e implementação de sistemas automatizados em ambientes industriais e residenciais. Integração de soluções digitais com sistemas de automação.",
      achievements: [
        "Implementação de +28 projetos de automação",
        "Economia  em custos operacionais e melhoria de eficiência",
        "Certificação em Schneider Electric"
      ]
,
    projects: [
      {
        id: "5",
        title: "Automação da Companhia Cárnica BRAVO SA.",
        description: "Implementação de sistema SCADA para monitoramento e controle da sistema de refrigeração, resultando em redução de 20% no consumo energético e aumento da eficiência operacional.",
        technologies: ["CLP Momentum", "Scada", "Modbus"],
        image: "../../images/bravo.jpg",
       // link: "#",
        highlights: [
          "Montagem da instrumentação",
          "Montagem dos CLPs( TSX Momentum ) e conexão de cada Painel de controle.",
          "Ajuste e comissionamento"
        ]
      },
      {
        id: "6",
        title: "Automação do Hoteles do Complexo Turístico Varadero, Cuba",
        description: "Desenvolvimento e implementação de automação em sistemas de HVAC, iluminação e segurança, resultando em economia de 30% nos custos operacionais e melhoria da experiência dos hóspedes.",
        technologies: ["Schneider Electric", "CLP Momentum", "HMI", "Ethernet/IP", "Modbus", "BACnet", "CLP Nano", "CLP Zelio", "CLP Twido", "CLP M340", "CLP TAC Xenta", "CLP TSX Premium", "CLP TSX Momentum", "CLP TSX Nano", "CLP TSX Zelio", "CLP TSX Twido", "CLP TSX M340", "CLP TSX TAC Xenta"],
        image: "../../images/varadero.jpg",
        //link: "#",
        highlights: [
         "Automação de sistemas de HVAC, iluminação e segurança",
         "Montagem da instrumentação",
          "Montagem dos CLPse conexão de cada Painel de controle.",
          "Ajuste e comissionamento"
        ]
      },
      {
        id: "7",
        title: "Automação do Condomínios Residenciais em Havana, Cuba",
        description: "Automação de sistemas de iluminação, segurança e monitoramento de energia em condomínios residenciais, resultando em economia de 25% no consumo energético e melhoria da segurança dos moradores.",
        technologies: ["PowerLogic", "CLP TAC Xenta", "CLP TWIDO", "Schneider Electric"],
        image: "../../images/condominios.jpg",
       // link: "#",
        highlights: [
          "Redução de 25% no consumo energético",
          "Sistema de monitoramento de energia com PowerLogic",
          "Sistema de segurança integrado com CLP TAC Xenta e CLP TWIDO",
            "Montagem da instrumentação",
            "Montagem dos CLPs( CLP TAC Xenta e CLP TWIDO ) e conexão de cada Painel de controle.",
        ]
      }
    ]
  },
  'csharp-developer': {
      position: "Desenvolvedor Software",
      company: "Companhia Açucareira Amancio Rodríguez, Cuba",
      period: "1994 - 2000",
      description: "Desenvolvimento de aplicações desktop  com MSAccess na área de controle de estoque e produção, utilizando VBA e FoxPro.",
      achievements: [
        "Automatização de processos manuais, resultando em aumento de eficiência",
        "Gestão de banco de dados e otimização de consultas para melhorar o desempenho  do sistema",
        "Integração de soluções digitais com sistemas de automação para otimizar operações"
      ]
,
    projects: [
      {
        id: "8",
        title: "Sistemas de Gestão Empresarial pra Companhia Açucareira Amancio Rodríguez",
        description: "Desenvolvimento de sistema de gestão empresarial para controle de estoque, produção, economia e vendas, resultando em aumento de eficiência",
        technologies: ["Visual Basic", "MSAccess", "SQL", "Foxpro"],
        image: "../../images/centralamancio.jpg",
        //link: "#",
        highlights: [
          "Cálculo automático de modelos financeiros",
          "Faturamento e controle do combustivel da companhia.",
          "Controle financeiro diário da companhia e suas dependências"
        ]
      },
      {
        id: "9",
        title: "Automação de Processos de Fabricação de Rum e Alcool",
        description: "Desenvolvimento de sistema de controle de processos para a fabricação de rum e álcool, resultando em aumento da qualidade do produto e redução de desperdícios.",
        technologies: ["MSAccess", "SQL", "FoxPro", "Visual Basic", "Office Automation"],
        image: "../../images/sevilla.jpg",
        //link: "#",
        highlights: [
          "Formulação automática de Rum.",
          "Faturamento e controle de Almacén na Companhia de Rum",
          "Controle automático de idades na soleira",
            "Controle automático de processos de fabricação de álcool"
        ]
      },
    ]
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(experiencesData).map((id) => ({
    id,
  }));
}

export default async function ExperiencePage({ params }: PageProps) {
  const { id } = await params;
  const experience = experiencesData[id];

  if (!experience) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experiência não encontrada
          </h1>
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold"
          >
            Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 font-sans">
      {/* Header com voltar */}
      <div className="w-full py-6 px-4 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-900 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </Link>

          <div className="mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-2">
              {experience.position}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4"></div>
            <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {experience.company}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {experience.period}
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            {experience.description}
          </p>

          {/* Achievements */}
          {experience.achievements && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Principais Realizações
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.achievements.map((achievement: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg"
                  >
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">
                      ✓ {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 w-full">
        <Projects
          title="Projetos Realizados"
          projects={experience.projects as Project[]}
        />
      </main>
    </div>
  );
}
