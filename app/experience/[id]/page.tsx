import Link from 'next/link';
import Projects from '@/app/components/Projects';
import type { Project } from '@/app/components/Projects';

// Dados das experiências com seus projetos
const experiencesData: Record<string, any> = {
  'fullstack-developer': {
    position: "Desenvolvedor Full Stack",
    company: "Tech Solutions",
    period: "2022 - Presente",
    description: "Desenvolvimento de aplicações web modernas utilizando React, Next.js e Node.js. Responsável pela arquitetura de sistemas e otimização de performance.",
    achievements: [
      "Implementação de 5+ aplicações em produção",
      "Redução de tempo de carregamento em 40%",
      "Mentoria de 3 desenvolvedores júniores"
    ],
    projects: [
      {
        id: "1",
        title: "Dashboard Analítico",
        description: "Sistema completo de dashboards para análise de dados em tempo real com visualizações interativas e relatórios customizáveis.",
        technologies: ["React", "Next.js", "Chart.js", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        link: "https://example-dashboard.com",
        github: "https://github.com/example/dashboard",
        highlights: [
          "Integração com 3+ APIs externas",
          "Performance otimizada com 2s de carregamento",
          "Autenticação OAuth 2.0"
        ]
      },
      {
        id: "2",
        title: "Plataforma E-commerce",
        description: "Desenvolvimento de plataforma de e-commerce escalável com sistema de pagamento integrado e gerenciamento de inventário.",
        technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1460925895917-aae19106c12a?w=500&h=300&fit=crop",
        link: "https://example-ecommerce.com",
        github: "https://github.com/example/ecommerce",
        highlights: [
          "Suporte a múltiplas moedas",
          "Carrinho persistente com sincronização em tempo real",
          "Painel admin com relatórios avançados"
        ]
      },
      {
        id: "3",
        title: "App Gerenciador de Tarefas",
        description: "Aplicação mobile-first para gerenciar projetos e tarefas com colaboração em tempo real entre equipes.",
        technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        link: "https://example-tasks.com",
        github: "https://github.com/example/tasks",
        highlights: [
          "Notificações push em tempo real",
          "Sincronização offline com IndexedDB",
          "Suporte a comentários e anexos"
        ]
      },
      {
        id: "4",
        title: "CMS Headless",
        description: "Sistema de gerenciamento de conteúdo headless com API REST completa e interface intuitiva para criadores de conteúdo.",
        technologies: ["Next.js", "Contentful", "Vercel", "GraphQL"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        link: "https://example-cms.com",
        github: "https://github.com/example/cms",
        highlights: [
          "Suporte a múltiplos idiomas",
          "Versionamento automático de conteúdo",
          "Deploy automático em Vercel"
        ]
      }
    ]
  },
  'automation-engineer': {
    position: "Engenheiro de Automação",
    company: "Industrial Systems",
    period: "2020 - 2022",
    description: "Projetos e implementação de sistemas automatizados em ambientes industriais. Integração de soluções digitais com sistemas de automação.",
    achievements: [
      "Implementação de 8 projetos de automação",
      "Economia de 30% em custos operacionais",
      "Certificação em Schneider Electric"
    ],
    projects: [
      {
        id: "5",
        title: "Sistema de Controle SCADA",
        description: "Implementação de sistema SCADA para monitoramento e controle de processos industriais com interface web responsiva.",
        technologies: ["Node-RED", "Python", "InfluxDB", "Grafana", "Modbus"],
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
        link: "#",
        highlights: [
          "Monitoramento de 50+ sensores em tempo real",
          "Alertas automáticos com notificações por email",
          "Histórico de dados com retenção de 5 anos"
        ]
      },
      {
        id: "6",
        title: "Automação de Linha de Produção",
        description: "Desenvolvimento e implementação de automação completa em linha de produção hoteleira com redução de 60% de tempo.",
        technologies: ["Schneider Electric", "PLC", "HMI", "Ethernet/IP"],
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
        link: "#",
        highlights: [
          "Redução de tempo de ciclo em 60%",
          "Aumento de produtividade em 45%",
          "Zero acidentes de trabalho pós-implementação"
        ]
      },
      {
        id: "7",
        title: "Sistema de Gestão Energética",
        description: "Implementação de sistema para monitoramento e otimização de consumo energético em complexo industrial.",
        technologies: ["PowerLogic", "PowerTag", "DataBridge", "Schneider Electric"],
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
        link: "#",
        highlights: [
          "Redução de 25% no consumo energético",
          "Identificação de falhas potenciais 2 semanas antes",
          "ROI em 18 meses"
        ]
      }
    ]
  },
  'csharp-developer': {
    position: "Desenvolvedor C# / .NET",
    company: "Software Enterprise",
    period: "2018 - 2020",
    description: "Desenvolvimento de aplicações desktop e web com C# e .NET Framework. Trabalho com SQL Server e integração de APIs.",
    achievements: [
      "Desenvolvimento de sistema de gestão empresarial",
      "Otimização de queries com melhora de 50% em performance",
      "Implementação de testes unitários e CI/CD"
    ],
    projects: [
      {
        id: "8",
        title: "ERP Empresarial",
        description: "Desenvolvimento de sistema ERP completo para gerenciamento de recursos empresariais com módulos de vendas, compras e estoque.",
        technologies: ["C#", ".NET Framework", "SQL Server", "WinForms", "Entity Framework"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        link: "#",
        highlights: [
          "5 módulos principais integrados",
          "Suporte a 500+ usuários simultâneos",
          "Relatórios em tempo real com 50+ variações"
        ]
      },
      {
        id: "9",
        title: "API REST em .NET",
        description: "Desenvolvimento de API REST robusta para integração com sistemas legados e aplicações mobile.",
        technologies: ["C#", ".NET Core", "ASP.NET", "SQL Server", "Docker"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        link: "#",
        highlights: [
          "Suporte a 10000+ requisições/minuto",
          "Autenticação JWT implementada",
          "Deploy containerizado com Docker"
        ]
      },
      {
        id: "10",
        title: "Aplicação Desktop para Logística",
        description: "Sistema desktop para gerenciamento de rotas de entrega com otimização de trajetos e rastreamento em tempo real.",
        technologies: ["C#", "WinForms", "SQL Server", "Google Maps API"],
        image: "https://images.unsplash.com/photo-1526628652108-aa545e6c3697?w=500&h=300&fit=crop",
        link: "#",
        highlights: [
          "Otimização de rotas em 35%",
          "Rastreamento GPS em tempo real",
          "Economia anual de 200k em combustível"
        ]
      }
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
      <div className="w-full py-6 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800">
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
