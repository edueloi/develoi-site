
import React from 'react';
import { 
  Lightbulb, 
  Palette, 
  Bot, 
  Workflow, 
  Rocket, 
  Wrench, 
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Users2,
  PhoneCall
} from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const Services: React.FC<Props> = ({ onNavigate }) => {
  const businessSolutions = [
    {
      title: "Consultoria e Estratégia",
      benefit: "Sua ideia no caminho certo",
      desc: "Analisamos seu negócio para entender onde você perde tempo e dinheiro hoje. Desenhamos o plano para sua transformação digital sem desperdícios.",
      icon: <Lightbulb className="w-7 h-7" />,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      points: ["Diagnóstico de problemas", "Plano de crescimento", "Escolha da melhor tecnologia"]
    },
    {
      title: "Sistemas Sob Medida",
      benefit: "Um software que se adapta a você",
      desc: "Chega de usar sistemas genéricos que não te atendem. Criamos ferramentas que funcionam exatamente do jeito que sua empresa precisa.",
      icon: <Workflow className="w-7 h-7" />,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      points: ["Gestão de clientes e vendas", "Controle financeiro simples", "Acesso pelo celular ou computador"]
    },
    {
      title: "Automação e Inteligência",
      benefit: "Sua empresa trabalhando sozinha",
      desc: "Robôs que atendem clientes no WhatsApp e fazem tarefas repetitivas para que sua equipe foque no que realmente traz lucro.",
      icon: <Bot className="w-7 h-7" />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      points: ["Atendimento 24h no WhatsApp", "Lembretes automáticos", "Sincronização de dados"]
    },
    {
      title: "Suporte e Evolução",
      benefit: "Você nunca fica na mão",
      desc: "Tecnologia não é só entregar e sumir. Estamos ao seu lado todos os dias para garantir que tudo funcione e evolua com seu negócio.",
      icon: <Wrench className="w-7 h-7" />,
      color: "text-slate-400",
      bg: "bg-slate-400/10",
      points: ["Suporte técnico rápido", "Melhorias mensais", "Segurança garantida"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Value Proposition */}
        <div className="mb-32 reveal">
          <div className="inline-flex items-center space-x-2 bg-indigo-600/5 text-indigo-400 px-6 py-2.5 rounded-full mb-10 font-bold text-[10px] uppercase tracking-[0.4em] border border-indigo-600/20">
            <span>Consultoria Estratégica</span>
          </div>
          <h1 className="text-6xl md:text-[100px] font-black mb-12 text-white leading-[0.85] tracking-tighter">
            Soluções para o seu <br /><span className="text-gradient">crescimento real.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-4xl leading-relaxed font-medium">
            Não vendemos apenas código. Vendemos <span className="text-white">tempo, tranquilidade e eficiência</span> para empresários que querem profissionalizar sua operação.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-48">
          {businessSolutions.map((solution, idx) => (
            <div 
              key={idx}
              className="reveal group modern-card p-12 bg-white/5 border-white/5 hover:bg-white/[0.08] transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className={`w-20 h-20 shrink-0 ${solution.bg} rounded-3xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform`}>
                  <div className={solution.color}>{solution.icon}</div>
                </div>
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-2">{solution.benefit}</span>
                    <h3 className="text-3xl font-black text-white tracking-tight">{solution.title}</h3>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {solution.desc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {solution.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white hover:text-indigo-400 transition-colors"
                  >
                    Quero saber mais <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section - Why Us? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-48">
            {[
                { title: "Sem Tecniquês", desc: "Falamos a sua língua. Explicamos tudo de forma simples e direta para você decidir com clareza.", icon: <Users2 className="w-8 h-8 text-blue-500" /> },
                { title: "Prazo é Sagrado", desc: "Sabemos que sua empresa não pode esperar. Entregamos o que prometemos na data combinada.", icon: <Clock className="w-8 h-8 text-indigo-500" /> },
                { title: "Foco em ROI", desc: "Cada centavo investido deve trazer retorno em tempo ou dinheiro. Esse é o nosso norte.", icon: <TrendingUp className="w-8 h-8 text-emerald-500" /> }
            ].map((item, i) => (
                <div key={i} className="reveal text-center p-10">
                    <div className="flex justify-center mb-6">{item.icon}</div>
                    <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="reveal relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-600/10 blur-[150px] rounded-full" />
          <div className="relative modern-card p-16 md:p-24 border-white/10 bg-gradient-to-br from-indigo-900/20 to-slate-950 text-center">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              Não sabe por onde <br />começar?
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-medium">
              Agende uma conversa de 15 minutos sem compromisso. Vamos entender sua dor e te dar uma direção clara.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-16 py-8 bg-indigo-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.4em] hover:scale-110 transition-all flex items-center justify-center gap-4 mx-auto"
            >
              Falar com um especialista <PhoneCall className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
