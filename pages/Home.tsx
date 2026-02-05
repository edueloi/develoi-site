
import React from 'react';
import { 
  Heart, 
  Smartphone, 
  MessageCircle,
  Layout as LayoutIcon,
  Users,
  Check,
  Star,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Trophy
} from 'lucide-react';
import { COMPANY_STATS } from '../constants';

interface Props {
  onNavigate: (page: string) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20">
      {/* HERO SECTION - REESTRUTURADA */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="reveal inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-10 border border-indigo-100 dark:border-indigo-500/20">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Transformando o Simples em Extraordinário</span>
        </div>
        
        <h1 className="reveal text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] max-w-5xl">
          Tecnologia de ponta <br />
          <span className="text-gradient">para quem faz acontecer.</span>
        </h1>
        
        <p className="reveal text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          Ajudamos você a automatizar seu negócio com sites, apps e sistemas inteligentes. Design moderno, custo justo e suporte de verdade.
        </p>
        
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-modern w-full sm:w-auto"
          >
            Começar meu projeto
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('solutions')}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-black hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-center gap-3"
          >
            Conhecer nosso trabalho
          </button>
        </div>
      </section>

      {/* STATS BENTO GRID - MAIS DADOS */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="reveal modern-card p-10 md:col-span-2 bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-none flex flex-col justify-between overflow-hidden relative">
            <Zap className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12" />
            <div className="relative z-10">
              <Trophy className="w-10 h-10 mb-6 text-yellow-300" />
              <div className="text-6xl font-black mb-2">124+</div>
              <div className="text-xl font-bold opacity-90">Projetos entregues com perfeição</div>
              <p className="mt-4 text-sm opacity-70 max-w-xs font-medium">Sistemas industriais, clínicos e portais de alta performance que geram resultados reais todos os dias.</p>
            </div>
            <div className="mt-8 flex -space-x-3">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-900">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">
                +80
              </div>
            </div>
          </div>

          <div className="reveal modern-card p-10 flex flex-col justify-center text-center" style={{transitionDelay: '0.1s'}}>
            <div className="text-5xl font-black text-indigo-600 mb-2">98%</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Aprovação</div>
            <div className="flex justify-center gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-xs font-medium text-slate-500">Clientes que recomendam nosso suporte humano e técnico.</p>
          </div>

          <div className="reveal modern-card p-10 flex flex-col justify-center text-center" style={{transitionDelay: '0.2s'}}>
            <div className="text-5xl font-black text-emerald-500 mb-2">24/7</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Sempre Online</div>
            <div className="w-16 h-1 bg-emerald-100 dark:bg-emerald-500/20 mx-auto rounded-full mb-4"></div>
            <p className="text-xs font-medium text-slate-500">Monitoramento ativo para que seu sistema nunca pare de vender.</p>
          </div>
        </div>
      </section>

      {/* WHY US - MAIS INFO */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Por que escolher a Develoi?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Unimos a robustez da engenharia com a leveza do design moderno.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
              title: "Segurança Total",
              desc: "Seus dados protegidos com criptografia de última geração e conformidade total com a LGPD."
            },
            {
              icon: <Code2 className="w-8 h-8 text-indigo-500" />,
              title: "Código Limpo",
              desc: "Sistemas fáceis de manter e que crescem junto com o seu negócio, sem gambiarras."
            },
            {
              icon: <Heart className="w-8 h-8 text-pink-500" />,
              title: "Suporte Amigo",
              desc: "Aqui você não fala com robôs. Temos uma equipe de especialistas pronta para te ouvir."
            }
          ].map((item, i) => (
            <div key={i} className="reveal group p-2" style={{transitionDelay: `${i * 0.1}s`}}>
              <div className="modern-card p-12 h-full flex flex-col items-center text-center hover:border-indigo-500/50">
                <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: TECH STACK SHOWCASE */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-32 mb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 reveal">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                Construímos com o que há de <span className="text-indigo-600">melhor no mundo.</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                Não usamos ferramentas ultrapassadas. Utilizamos tecnologias que garantem que seu site seja rápido como um raio e seguro como um cofre.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['React & Next.js', 'Node.js', 'Google Cloud', 'AWS', 'Flutter', 'Python IA'].map(tech => (
                  <div key={tech} className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 reveal" style={{transitionDelay: '0.2s'}}>
              <div className="modern-card p-10 flex flex-col items-center justify-center aspect-square gap-4">
                <Smartphone className="w-12 h-12 text-indigo-500" />
                <span className="font-black text-center text-sm">Apps Mobile</span>
              </div>
              <div className="modern-card p-10 flex flex-col items-center justify-center aspect-square gap-4 translate-y-12">
                <LayoutIcon className="w-12 h-12 text-blue-500" />
                <span className="font-black text-center text-sm">Sistemas Web</span>
              </div>
              <div className="modern-card p-10 flex flex-col items-center justify-center aspect-square gap-4">
                <MessageCircle className="w-12 h-12 text-emerald-500" />
                <span className="font-black text-center text-sm">Bots Whats</span>
              </div>
              <div className="modern-card p-10 flex flex-col items-center justify-center aspect-square gap-4 translate-y-12">
                <ShieldCheck className="w-12 h-12 text-purple-500" />
                <span className="font-black text-center text-sm">Segurança</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - MAIS IMPACTANTE */}
      <section className="max-w-6xl mx-auto px-6 text-center reveal">
        <div className="modern-card p-16 md:p-24 bg-gradient-to-br from-slate-900 to-indigo-950 text-white border-none relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 blur-[120px] rounded-full"></div>
             <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 blur-[120px] rounded-full"></div>
          </div>
          
          <Heart className="w-16 h-16 mx-auto mb-10 text-pink-500 animate-pulse relative z-10" />
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none relative z-10">
            Vamos crescer <br />seu negócio juntos?
          </h2>
          <p className="text-xl opacity-80 mb-14 max-w-2xl mx-auto font-medium relative z-10">
            Você traz o sonho, nós trazemos a engenharia. Orçamentos transparentes e prazos que funcionam.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-indigo-900 px-12 py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:scale-110 hover:shadow-2xl hover:shadow-white/20 transition-all relative z-10"
          >
            Falar com um especialista agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
