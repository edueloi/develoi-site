
import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Code2, 
  Workflow, 
  BrainCircuit, 
  Rocket, 
  Layers, 
  Globe, 
  Server,
  Cloud,
  Smartphone,
  ChevronRight
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO MANIFESTO */}
        <div className="text-center mb-40 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-6 py-2.5 rounded-full mb-10 font-bold text-[10px] uppercase tracking-[0.4em] border border-blue-500/20">
            <Rocket className="w-3.5 h-3.5" />
            <span>Engenharia Além do Código</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-[900] mb-12 tracking-tighter text-white leading-[0.85]">
            Nosso <span className="text-gradient">DNA.</span> <br />
            Sua <span className="text-white italic">Escala.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium">
            A Develoi nasceu da necessidade de entregar software que não apenas "funciona", mas que <span className="text-white">sustenta impérios digitais</span>. Somos um hub de engenheiros obcecados por performance, segurança e ROI.
          </p>
        </div>

        {/* CORE VALUES - GRID MODERNO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-48">
          {[
            {
              title: "Propósito",
              desc: "Eliminar a fricção tecnológica através de interfaces humanas e arquiteturas que não quebram sob pressão.",
              icon: <Target className="w-8 h-8 text-blue-500" />,
              accent: "group-hover:border-blue-500/50"
            },
            {
              title: "Visão 2030",
              desc: "Consolidar a maior rede de automação inteligente e sistemas especializados para nichos críticos do Brasil.",
              icon: <Eye className="w-8 h-8 text-cyan-500" />,
              accent: "group-hover:border-cyan-500/50"
            },
            {
              title: "Cultura Radical",
              desc: "Transparência total no código, prazos inegociáveis e compromisso com a privacidade de nível militar.",
              icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
              accent: "group-hover:border-purple-500/50"
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-12 glass-premium rounded-[56px] border border-white/5 reveal transition-all duration-700 hover:bg-white/[0.03]" style={{transitionDelay: `${idx * 0.1}s`}}>
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 text-white tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* WORKFLOW: THE DEVELOI WAY */}
        <div className="mb-48">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">Como construímos <br />o impossível.</h2>
            <p className="text-slate-500 font-medium text-xl">Uma metodologia rigorosa focada em previsibilidade e qualidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 reveal">
            {[
              { step: "01", label: "Discovery", icon: <Layers />, desc: "Análise profunda de gargalos operacionais e viabilidade técnica." },
              { step: "02", label: "Arquitetura", icon: <Cpu />, desc: "Desenho de sistemas escaláveis e segurança de dados nativa." },
              { step: "03", label: "Engineering", icon: <Code2 />, desc: "Desenvolvimento ágil com código limpo e testes automatizados." },
              { step: "04", label: "Growth", icon: <Zap />, desc: "Deployment em nuvem e suporte contínuo para evolução." }
            ].map((item, i) => (
              <div key={i} className="relative p-10 glass-premium rounded-[40px] border-white/5 overflow-hidden group">
                <div className="absolute top-4 right-8 text-7xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors leading-none">{item.step}</div>
                <div className="text-blue-500 mb-6">{item.icon}</div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{item.label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK / ECOSSISTEMA */}
        <div className="mb-48 relative">
           <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full" />
           <div className="relative glass-premium rounded-[64px] p-12 md:p-24 border-white/10 reveal">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                    Nossa Stack de <br /><span className="text-blue-500">Combate.</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-12 font-medium">
                    Dominamos as ferramentas que definem o futuro. Não seguimos tendências, utilizamos o que há de mais sólido e performático para o seu negócio.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: <Globe />, label: "React / Next.js", detail: "Interfaces Ultra-Rápidas" },
                      { icon: <Server />, label: "Node.js / Python", detail: "Backends de Alta Escala" },
                      { icon: <Cloud />, label: "AWS / Google Cloud", detail: "Infraestrutura Global" },
                      { icon: <Smartphone />, label: "Flutter / Native", detail: "Mobile de Performance" }
                    ].map((tech, i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className="text-blue-500 scale-75">{tech.icon}</div>
                        <div>
                          <div className="text-sm font-black text-white tracking-tight">{tech.label}</div>
                          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{tech.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-8">
                   {[
                     { v: '99.9%', l: 'Uptime Garantido', sub: 'Arquitetura Cloud' },
                     { v: '500k+', l: 'Linhas de Código', sub: 'Qualidade Sênior' },
                     { v: '24/7', l: 'Monitoramento', sub: 'Segurança Ativa' },
                     { v: '0', l: 'Vulnerabilidades', sub: 'Auditoria LGPD' }
                   ].map((stat, i) => (
                     <div key={i} className="bg-slate-950/80 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/5 text-center transition-transform hover:scale-105">
                        <div className="text-3xl md:text-5xl font-black mb-3 text-white tracking-tighter">{stat.v}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-1">{stat.l}</div>
                        <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">{stat.sub}</div>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>

        {/* FINAL CTA: MANIFESTO FOOTER */}
        <div className="text-center reveal">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">
            Menos Papo. <br /><span className="text-blue-500">Mais Engenharia.</span>
          </h2>
          <button 
            onClick={() => window.location.hash = 'contact'}
            className="px-20 py-8 bg-white text-slate-950 rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)]"
          >
            Falar com um Sócio Fundador
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
