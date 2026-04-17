import About from './components/About';
import PersonalData from './components/PersonalData';
import SkillsCompact from './components/SkillsCompact';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import type { Skill } from './components/SkillsCompact';
import type { ExperienceItem } from './components/Experience';
import type { Certification } from './components/Certifications';
import type { Language } from './components/Languages';

export default function Home() {
  // Dados de exemplo - você pode trocar pela sua foto e informações reais
  const aboutData = {
    name: "Yoenis Alain Pavón Ortega",
    description: "Profissional com mais de 30 anos de experiência em tecnologia, automação e desenvolvimento de sistemas, com atuação direta desde o nível operacional até a coordenação de processos produtivos.Durante 16 anos, trabalhou na área de automação, com foco em projetos, montagem e instalação de sistemas automatizados, principalmente em ambientes hoteleiros, utilizando tecnologias da Schneider Electric.Possui sólida especialização em desenvolvimento de software com C#, .NET, SQL Server e tecnologias web, integrando soluções digitais com sistemas industriais e de automação.",
    photoUrl: "../../images/foto.png", // Troque pela URL da sua foto
  };

  const personalData = {
    email: "yoepo2016@gmail.com",
    phone: "+55 (95) 98409-1138",
    location: "Caxias do Sul, RS - Brasil",
    linkedin: "https://www.linkedin.com/in/yoenis-alain-pavon-ortega",
    github: "https://github.com/Yapo1972",
    portfolio: "https://seu-portfolio.com"
  };

  const skillsData: Skill[] = [
    { name: ".NET / ASP.NET", level: "avancada" },
    { name: "JavaScript", level: "avancada" },
    { name: "SQL", level: "avancada" },
    { name: "Desenvolvimento de APIs REST/ASP.NET Web API", level: "avancada" },
    { name: "Programação Orientada a Objetos (OOP)", level: "avancada" },
    { name: "SQL Server/Modelagem relacional/Otimização de consultas", level: "avancada" },
    { name: "HTML/CSS", level: "avancada" },
    { name: "C#", level: "avancada" },
    { name: "React", level: "avancada" },
    { name: "Next.js", level: "intermediaria" },
    { name: "Power BI Desktop/Server", level: "intermediaria" },
    { name: "Implementação e configuração de Asterisk", level: "intermediaria" },
    { name: "TypeScript", level: "intermediaria" },
    { name: "Tailwind CSS", level: "intermediaria" },
    { name: "Node.js", level: "intermediaria" },
    { name: "Pacote Office", level: "avancada" },
    { name: "Git", level: "intermediaria" },
    { name: "Automação predial (BMS)", level: "avancada" },
    { name: "Programação de CLPs", level: "avancada" },
    { name: "Integração de sistemas HVAC", level: "avancada" },
    { name: "Protocolos Modbus RTU/TCP e BACnet", level: "avancada" },
    { name: "Montagem de painéis elétricos e automação", level: "avancada" },
    { name: "Instalação de sistemas automatizados", level: "avancada" },
    { name: "Sistemas supervisórios (SCADA)", level: "avancada" },
    { name: "Automação de iluminação", level: "avancada" },
    { name: "Eficiência energética em edifícios", level: "avancada" },
  ];

  const experienceData: ExperienceItem[] = [
    {
      id: "fullstack-developer",
      position: "Desenvolvedor Full Stack",
      company: "Tech Solutions",
      period: "2022 - Presente",
      description: "Desenvolvimento de aplicações web modernas utilizando React, Next.js e Node.js. Responsável pela arquitetura de sistemas e otimização de performance.",
      achievements: [
        "Implementação de 5+ aplicações em produção",
        "Redução de tempo de carregamento em 40%",
        "Mentoria de 3 desenvolvedores júniores"
      ]
    },
    {
      id: "automation-engineer",
      position: "Engenheiro de Automação",
      company: "Industrial Systems",
      period: "2020 - 2022",
      description: "Projetos e implementação de sistemas automatizados em ambientes industriais. Integração de soluções digitais com sistemas de automação.",
      achievements: [
        "Implementação de 8 projetos de automação",
        "Economia de 30% em custos operacionais",
        "Certificação em Schneider Electric"
      ]
    },
    {
      id: "csharp-developer",
      position: "Desenvolvedor C# / .NET",
      company: "Software Enterprise",
      period: "2018 - 2020",
      description: "Desenvolvimento de aplicações desktop e web com C# e .NET Framework. Trabalho com SQL Server e integração de APIs.",
      achievements: [
        "Desenvolvimento de sistema de gestão empresarial",
        "Otimização de queries com melhora de 50% em performance",
        "Implementação de testes unitários e CI/CD"
      ]
    }
  ];

  const certificationsData: Certification[] = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://aws.amazon.com/certification",
      pdfUrl: "https://example.com/certificates/aws-architect.pdf"
    },
    {
      name: "React Advanced Patterns",
      issuer: "Udemy",
      date: "2022",
      credentialUrl: "https://udemy.com",
      pdfUrl: "https://example.com/certificates/react-patterns.pdf"
    },
    {
      name: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialUrl: "https://scrumalliance.org",
      pdfUrl: "https://example.com/certificates/scrum-master.pdf"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2020",
      credentialUrl: "https://coursera.org",
      pdfUrl: "https://example.com/certificates/fullstack.pdf"
    },
    {
      name: "Certificação Schneider Electric",
      issuer: "Schneider Electric",
      date: "2019",
      pdfUrl: "https://example.com/certificates/schneider.pdf"
    },
    {
      name: "SQL Server Database Administrator",
      issuer: "Microsoft",
      date: "2018",
      pdfUrl: "https://example.com/certificates/sql-server.pdf"
    }
  ];

  const languagesData: Language[] = [
    { name: "Português", level: "intermediaria" },
    { name: "Espanhol", level: "nativa" },
    { name: "Inglês", level: "intermediaria" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 font-sans">
      <main className="flex-1 w-full">
        <About 
          name={aboutData.name}
          description={aboutData.description}
          photoUrl={aboutData.photoUrl}
        />
        <PersonalData
          email={personalData.email}
          phone={personalData.phone}
          location={personalData.location}
          linkedin={personalData.linkedin}
          github={personalData.github}
          portfolio={personalData.portfolio}
        />
        <SkillsCompact 
          title="Minhas Habilidades"
          skills={skillsData}
        />
        <Experience 
          title="Experiência Profissional"
          experiences={experienceData}
        />
        <Certifications 
          title="Certificações"
          certifications={certificationsData}
        />
         <Languages 
          title="Idiomas"
          languages={languagesData}
        />
     </main>
    </div>
  );
}
