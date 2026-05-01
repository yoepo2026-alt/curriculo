import Header from './components/Header';
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
    description: "Profissional com mais de 30 anos de experiência em tecnologia, automação e desenvolvimento de sistemas, com atuação direta desde o nível operacional até a coordenação de processos produtivos. Durante 16 anos, trabalhou na área de automação, com foco em projetos, montagem e instalação de sistemas automatizados, principalmente em ambientes hoteleiros, utilizando tecnologias da Schneider Electric. Possui sólida especialização em desenvolvimento de software com C#, .NET, SQL Server e tecnologias web, integrando soluções digitais com sistemas industriais e de automação.",
    photoUrl: "../../images/foto.png", // Troque pela URL da sua foto
  };

  const personalData = {
    email: "yoepo2016@gmail.com",
    phone: "+55 (95) 98409-1138",
    location: "Caxias do Sul, RS - Brasil",
    linkedin: "https://www.linkedin.com/in/yoenis-alain-pavon-ortega",
    github: "https://github.com/Yapo1972",
    //portfolio: "https://seu-portfolio.com"
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
      company: "Compacto Caribe S.A.",
      period: "05/2017 - 02/2026",
      description: "Projeto e desenvolvimento de software para a automação da maioria dos processos da empresa dedicada a fabricação de caixas de cartão corrugado, utilizando C#, .Net, JavaScript,TypeScript, React, CSS, HTML e SQL Server.",
      achievements: [
        "Creacão de sistema de controle de produção, resultando em aumento de eficiência e redução de erros manuais",
        "Automatização de processos administrativos, economizando tempo e recursos  da equipe administrativa, comercial, econômica e de logística ",
        "Instalaçao de sistema de CCT para monitoramento de segurança, integrando com sistemas de automação para resposta rápida a incidentes",
        "Desenvolvimento de dashboard de indicadores de produção e eficiência, permitindo melhor tomada de decisões estratégicas" ,
        "Instalacão de sistema Asterisk para gestão de chamadas e integração com sistemas de automação para otimizar atendimento ao cliente"        
      ]
    },
    {
      id: "automation-engineer",
      position: "Especialista em Automação",
      company: "Companhia de automação integral CEDAI, Cuba",
      period: "2001 - 2016",
      description: "Projetos e implementação de sistemas automatizados em ambientes industriais e residenciais. Integração de soluções digitais com sistemas de automação.",
      achievements: [
        "Implementação de +28 projetos de automação",
        "Economia  em custos operacionais e melhoria de eficiência",
        "Certificação em Schneider Electric"
      ]
    },
    {
      id: "csharp-developer",
      position: "Desenvolvedor Software",
      company: "Companhia Açucareira Amancio Rodríguez, Cuba",
      period: "1994 - 2000",
      description: "Desenvolvimento de aplicações desktop  com MSAccess na área de controle de estoque e produção, utilizando VBA e FoxPro.",
      achievements: [
        "Automatização de processos manuais, resultando em aumento de eficiência",
        "Gestão de banco de dados e otimização de consultas para melhorar o desempenho  do sistema",
        "Integração de soluções digitais com sistemas de automação para otimizar operações"
      ]
    }
  ];

  const certificationsData: Certification[] = [
    {
      name: "Treinamento do  tecnología TAC Schneider",
      issuer: "Centro de formação de Schneider, Barcelona, Espanha ",
      date: "2005",
/*       credentialUrl: "https://aws.amazon.com/certification",
      pdfUrl: "https://example.com/certificates/aws-architect.pdf"
 */    },
    {
      name: "Treinamento do  tecnología Wireless TAC Schneider",
      issuer: "Centro de formação de Schneider, Santiago de Chile, Chile",
      date: "2006",
  /*     credentialUrl: "https://udemy.com",
      pdfUrl: "https://example.com/certificates/react-patterns.pdf"
 */    },
    {
      name: "SmartStruxure Solution Workstation and System Design",
      issuer: "Centro de formação de Schneider, Barcelona, Espanha",
      date: "2016",
      pdfUrl: "../../certificados/cert03.pdf"
/*      credentialUrl: "https://scrumalliance.org",
      pdfUrl: "https://example.com/certificates/scrum-master.pdf"
 */    },
    {
      name: "Certificação no uso da TAC Vista 5.9 e Sistemas LonWorks",
      issuer: "Centro de formação de Schneider, Barcelona, Espanha",
      date: "2016",
       pdfUrl: "../../certificados/cert01.pdf"
/*     credentialUrl: "https://coursera.org",
  */    },
    {
      name: "SmartStruxure Solution Lonworks and Modbus Engineering",
      issuer: "Centro de formação de Schneider, Barcelona, Espanha",
      date: "2016",
       pdfUrl: "../../certificados/cert02.pdf"
/*     credentialUrl: "https://coursera.org",
  */    },
    {
      name: "Certificação On2Power Schneider Electric",
      issuer: "Schneider Electric, Brasil",
      date: "2022",
  //    pdfUrl: "https://example.com/certificates/schneider.pdf"
    },
    {
      name: "Certificação Camada Física",
      issuer: "Academia de Conhecimento Intelbras, Brasil",
      date: "2026",
      pdfUrl: "../../certificados/camada.pdf"
    },
    {
      name: "Certificação alarmes e sensores",
      issuer: "Academia de Conhecimento Intelbras, Brasil",
      date: "2026",
      pdfUrl: "../../certificados/sensores.pdf"
    },

    {
      name: "Certificação Implemente o videomonitoreamento no alarme de intrusão",
      issuer: "Academia de Conhecimento Intelbras, Brasil",
      date: "2026",
      pdfUrl: "../../certificados/video.pdf"
    },    
    {
      name: "Certificação Instale centrais para automatizador de portões de garagem",
      issuer: "Academia de Conhecimento Intelbras, Brasil",
      date: "2026",
      pdfUrl: "../../certificados/portones.pdf"
    },    
    {
      name: "Certificação Integre MiboSmart e Amazon Alexa",
      issuer: "Academia de Conhecimento Intelbras, Brasil",
      date: "2026",
      pdfUrl: "../../certificados/alexa.pdf"
    },    
    {
      name: "Certificação Entenda os fundamentos de redes para CFTV IP",
      issuer: "Academia de Conhecimento Intelbras, Brasil",
      date: "2026",
      pdfUrl: "../../certificados/redescftv.pdf"
    },    
  ];

  const languagesData: Language[] = [
    { name: "Português", level: "intermediaria" },
    { name: "Espanhol", level: "nativa" },
    { name: "Inglês", level: "intermediaria" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-800 font-sans">
      <main className="flex-1 w-full">
        <Header 
          title={aboutData.name}
          subtitle="Desenvolvedor Full Stack | Especialista em Automação & Sistemas"
          cta="Explorar Portfólio"
        />
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
         // portfolio={personalData.portfolio}
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
