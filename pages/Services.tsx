
import React from 'react';
import { 
  Code2, 
  Lightbulb, 
  Palette, 
  Bot, 
  Workflow, 
  Rocket, 
  Wrench, 
  ShieldCheck,
  ArrowRight,
  MonitorSmartphone,
  Cpu,
  RefreshCcw
} from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const Services: React.FC<Props> = ({ onNavigate }) => {
  const serviceCategories = [
    {
      id: 'strat',
      label: 'Estratégia & Design',
      services: [
        {
          title: "Consultoria Tecnológica",
          desc: "Diagnóstico de gargalos e viabilidade técnica para novos produtos digitais.",
          icon: <Lightbulb className="w-6 h-6" />,
          color: "text-amber-500",
          bg: "bg-amber-500/10"
        },
        {
          title: "Web Design & ID Visual",
          desc: "Interfaces premium (UI/UX) e construção de marcas que respiram tecnologia.",
          icon: <Palette className="w-6 h-6" />,
          color: "text-pink-500",
          bg: "bg-pink-500/10"
        }
      ]
    },
    {
      id: 'automation',
      label: 'Inteligência & Automação',
      services: [
        {
          title: "Chatbots IA (WhatsApp)",
          desc: "Agentes inteligentes que vendem e atendem 24/7 com linguagem natural.",
          icon: <Bot className="w-6 h-6" />,
          color: "text-blue-500",
          bg: "bg-blue-500/10"
        },
        {
          title: "RPA & Fluxos de Dados",
          desc: "Eliminação total de tarefas repetitivas integrando Planilhas, CRMs e ERPs.",
          icon: <Workflow className="w-6 h-6" />,
          color: "text-emerald-500",
          bg: "bg-emerald-500/10"
        }
      ]
    },
    {
      id: 'engineering',
      label: 'Engenharia de Software',
      services: [
        {
          title: "Criação de Sistemas",
          desc: "Desenvolvimento de SaaS, CRMs e plataformas complexas sob medida.",
          icon: <Code2 className="w-6 h-6" />,
          color: "text-purple-500",
          bg: "bg-purple-500/10"
        },
        {
          title: "Mobile Apps Natividade",
          desc: "Aplicativos iOS e Android de alta performance focados em experiência.",
          icon: <MonitorSmartphone className="w-6 h-6" />,
          color: "text-cyan-500",
          bg: "bg-cyan-500/10"
        }
      ]
    },
    {
      id: 'lifecycle',
      label: 'Implementação & Suporte',
      services: [
        {
          title: "Deploy & Implementação",
          desc: "Configuração de infraestrutura Cloud e onboarding assistido de sistemas.",
          icon: <Rocket className="w-6 h-6" />,
          color: "text-orange-500",
          bg: "bg-orange-500/10"
        },
        {
          title: "Manutenção & Evolução",
          desc: "Suporte 24/7, atualizações de segurança e escalonamento de recursos.",
          icon: <Wrench className="w-6 h-6" />,
          color: "text-slate-400",
          bg: "bg-slate-400/10"
        }
      ]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-32 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-6 py-2.5 rounded-full mb-10 font-bold text-[10px] uppercase tracking-[0.4em] border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engenharia de Soluções</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-[900] mb-12 text-white leading-[0.85] tracking-tighter">
            O que <span className="text-gradient">entregamos.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-4xl leading-relaxed font-medium">
            De uma ideia no papel à manutenção de sistemas globais. Nosso ecossistema de serviços cobre <span className="text-white">todo o ciclo de vida tecnológico</span> do seu negócio.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-32">
          {serviceCategories.map((cat, idx) => (
            <div key={cat.id} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center space-x-6 mb-12">
                <span className="text-slate-700 font-black text-4xl">0{idx + 1}</span>
                <div className="h-px flex-1 bg-white/5" />
                <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500">{cat.label}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.services.map((service, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group relative p-12 glass-premium rounded-[48px] border-white/5 hover:bg-white/[0.03] transition-all duration-700"
                  >
                    <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                      <div className={service.color}>{service.icon}</div>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
                      {service.desc}
                    </p>
                    <button 
                      onClick={() => onNavigate('contact')}
                      className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors"
                    >
                      <span>Solicitar Diagnóstico</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Maintenance Callout */}
        <div className="mt-48 relative reveal">
          <div className="absolute inset-0 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative glass-premium p-12 md:p-24 rounded-[