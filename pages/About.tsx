
import React from 'react';
import { 
  Heart, 
  Handshake, 
  ShieldCheck, 
  Eye,
  ArrowDown,
  Sparkles, 
  MessageCircle,
  Clock,
  Users,
  Star,
  Zap,
  Coffee
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-40 pb-24 overflow-hidden relative transition-colors duration-1000">
      
      {/* DINAMIC AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 dark:bg-blue-600/10 blur-[150px] rounded-full animate-bounce" style={{ animationDuration: '15s' }} />
        <div className="absolute top-[40%] right-[20%] w-[15%] h-[15%] bg-purple-500/5 dark:bg-purple-600/10 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO MANIFESTO */}
        <div className="text-center mb-48 reveal">
          <div className="inline-flex items-center space-x-2 bg-indigo-600/5 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 px-6 py-2.5 rounded-full mb-10 font-black text-[10px] uppercase tracking-[0.4em] border border-indigo-600/10 dark:border-indigo-400/20 backdrop-blur-md">
            <Star className="w-3 h-3 fill-current" />
            <span>Nossa Essência</span>
          </div>
          
          <h1 className="text-6xl md:text-[130px] font-black mb-12 tracking-tighter text-slate-900 dark:text-white leading-[0.8] transition-colors">
            Tecnologia com <br />
            <span className="text-gradient italic">alma humana.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
            Não viemos para ditar regras, viemos para aprender com você. Na Develoi, a <span className="text-slate-900 dark:text-white">humildade</span> é nossa maior ferramenta técnica. Construímos parcerias, não apenas softwares.
          </p>
          
          <div className="mt-20 animate-bounce flex justify-center">
            <div className="w-10 h-16 border-2 border-slate-200 dark:border-slate-800 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-indigo-600 rounded-full animate-scroll-inner"></div>
            </div>
          </div>
        </div>

        {/* VALORES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-48">
          
          {/* Valor Principal - Humildade */}
          <div className="md:col-span-8 group p-12 md:p-20 bg-slate-50 dark:bg-white/5 rounded-[64px] border border-slate-100 dark:border-white/5 reveal relative overflow-hidden transition-all duration-700 hover:shadow-2xl dark:hover:shadow-indigo-500/10">
            <div className="absolute top-0 right-0 p-12 opacity-5 dark:opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Handshake className="w-64 h-64 text-slate-900 dark:text-white" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-10 shadow-lg border border-slate-100 dark:border-white/10 group-hover:rotate-12 transition-transform">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-4xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">Ouvir é nossa prioridade</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed max-w-xl font-medium">
                Entendemos que ninguém conhece seu negócio melhor que você. Nosso papel é ser o braço tecnológico que transforma sua experiência em eficiência digital.
              </p>
            </div>
          </div>

          {/* Valor Secundário - Simplicidade */}
          <div className="md:col-span-4 p-12 bg-indigo-600 text-white rounded-[64px] border-none reveal shadow-2xl shadow-indigo-600/20 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md mb-12">
              <Zap className="w-8 h-8 text-white fill-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4 tracking-tight">Menos é mais</h3>
              <p className="text-indigo-100 font-medium leading-relaxed opacity-80">
                Complexidade gera erro. Nós buscamos a solução mais simples e robusta para que você não precise de manual para usar o que criamos.
              </p>
            </div>
          </div>

          {/* Outros Valores - Colunas Menores */}
          {[
            {
              title: "Ética Transparente",
              desc: "Se algo não for bom para você, seremos honestos em te dizer, mesmo que isso signifique não vender.",
              icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
              col: "md:col-span-6"
            },
            {
              title: "Presença Real",
              desc: "Suporte humanizado. No outro lado da tela, sempre haverá alguém que se importa com seu problema.",
              icon: <Coffee className="w-6 h-6 text-amber-500" />,
              col: "md:col-span-6"
            }
          ].map((item, idx) => (
            <div key={idx} className={`${item.col} p-12 bg-white dark:bg-slate-900/50 rounded-[56px] border border-slate-100 dark:border-white/5 reveal group hover:border-indigo-500/30 transition-all duration-500`}>
              <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* METODOLOGIA HUMANA */}
        <div className="mb-48 py-24 md:py-32 bg-slate-50 dark:bg-slate-900/30 rounded-[80px] px-8 md:px-24 border border-slate-100 dark:border-white/5 reveal relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-10 leading-none">
                Aprendemos o seu <br /><span className="text-indigo-600">cotidiano.</span>
              </h2>
              <div className="space-y-10">
                {[
                  { icon: <MessageCircle />, label: "Diálogo Aberto", detail: "Sem termos técnicos complicados. Falamos de negócios e soluções." },
                  { icon: <Clock />, label: "Tempo de Qualidade", detail: "Dedicamos horas para entender seus gargalos operacionais." },
                  { icon: <Users />, label: "Time Especialista", detail: "Nossos consultores são focados em resolver, não apenas codar." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{item.label}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-indigo-600/20 blur-2xl rounded-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-square bg-slate-900 rounded-[80px] p-16 flex flex-col justify-center items-center text-center overflow-hidden border border-white/10 shadow-2xl">
                <Sparkles className="w-20 h-20 text-indigo-400 mb-10 animate-pulse" />
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">O seu sucesso é <br />nosso único KPI.</h3>
                <p className="text-slate-400 font-medium">Se a tecnologia não trouxer <br />sorrisos e lucro, nós falhamos.</p>
                
                {/* Decorative floating dots */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
                <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-20 w-1 h-1 bg-blue-500 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION HUMILDE */}
        <div className="text-center reveal relative py-20">
          <h2 className="text-5xl md:text-[100px] font-black text-slate-900 dark:text-white tracking-tighter mb-12 leading-none">
            Vamos conversar <br />como <span className="text-gradient">parceiros?</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 max-w-2xl mx-auto font-medium">
            Não importa o tamanho da sua dúvida, estamos aqui para ouvir e apoiar. O café (ou a conversa digital) é por nossa conta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.hash = 'contact'}
              className="bg-indigo-600 text-white px-20 py-8 rounded-[32px] font-black text-[10px] uppercase tracking-[0.4em] hover:scale-110 hover:shadow-2xl hover:shadow-indigo-600/30 transition-all flex items-center gap-4 group"
            >
              Começar jornada <Handshake className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scroll-inner {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-scroll-inner {
          animation: scroll-inner 2s infinite;
        }
        .text-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default About;
