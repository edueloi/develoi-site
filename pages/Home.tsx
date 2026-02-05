
import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Lock, 
  ShieldAlert, 
  Activity, 
  MessageCircle, 
  ShieldCheck, 
  Zap,
  MousePointer2,
  Trophy,
  Target,
  Search,
  Users,
  Lightbulb
} from 'lucide-react';
import { COMPANY_STATS, DEVELOI_PROJECTS } from '../constants';

interface Props {
  onNavigate: (page: string) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-0">
      {/* HERO SECTION - FOCO EM RESULTADO */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-48 flex flex-col items-center text-center relative overflow-hidden">
        <div className="reveal inline-flex items-center gap-2 bg-indigo-600/5 text-indigo-600 dark:text-indigo-400 px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] mb-12 border border-indigo-600/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Inteligência que gera lucro</span>
        </div>
        
        <h1 className="reveal text-5xl md:text-[120px] font-black mb-12 tracking-[-0.05em] leading-[0.85] max-w-6xl text-slate-900 dark:text-white">
          Sistemas que fazem <br />
          <span className="text-gradient">sua empresa crescer.</span>
        </h1>
        
        <p className="reveal text-xl md:text-3xl text-slate-500 dark:text-slate-400 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
          Traduzimos tecnologia complexa em soluções simples para o seu dia a dia. <br className="hidden md:block" />
          Consultoria estratégica para quem busca eficiência, segurança e automação real.
        </p>
        
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-premium w-full sm:w-auto text-lg shadow-2xl shadow-indigo-600/30"
          >
            Falar com um consultor
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('solutions')}
            className="w-full sm:w-auto px-12 py-5 rounded-3xl border-2 border-slate-200 dark:border-slate-800 font-black hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-center gap-3 text-lg text-slate-900 dark:text-white"
          >
            Ver casos de sucesso
          </button>
        </div>
      </section>

      {/* CONSULTANCY FLOW - NOVO BLOCO */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="text-center mb-20 reveal">
            <h2 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Nosso Processo</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Como ajudamos você</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    title: "Diagnóstico Livre",
                    desc: "Entendemos seus gargalos e onde você perde tempo ou dinheiro hoje.",
                    icon: <Search className="w-8 h-8" />,
                    color: "bg-blue-500"
                },
                {
                    title: "Estratégia sob Medida",
                    desc: "Desenhamos a solução mais simples e eficiente para o seu cenário.",
                    icon: <Lightbulb className="w-8 h-8" />,
                    color: "bg-indigo-600"
                },
                {
                    title: "Suporte Vitalício",
                    desc: "Não te deixamos na mão. Acompanhamos o crescimento do seu sistema.",
                    icon: <Users className="w-8 h-8" />,
                    color: "bg-emerald-500"
                }
            ].map((step, i) => (
                <div key={i} className="reveal modern-card p-12 hover:border-indigo-600/30">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                        {step.icon}
                    </div>
                    <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* BENTO GRID 2.0 - FOCO EM BENEFÍCIO REAL */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Business Benefits */}
          <div className="reveal md:col-span-8 modern-card p-12 md:p-20 bg-slate-900 text-white border-none flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full group-hover:bg-indigo-500/30 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                  <Trophy className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-black">Tecnologia que Resolve</h3>
                  <p className="opacity-50 font-medium text-xs uppercase tracking-widest">Sua empresa funcionando 24h por dia sem erros</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                    { label: 'Projetos Entregues', value: '140+', sub: 'Clientes Felizes' },
                    { label: 'Economia de Tempo', value: '60%', sub: 'Em processos' },
                    { label: 'Uptime', value: '99.9%', sub: 'Sempre online' },
                    { label: 'Nota de Suporte', value: '10/10', sub: 'Atendimento humanizado' }
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-4xl md:text-5xl font-black mb-2">{s.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{s.label}</div>
                    <div className="text-[9px] font-bold opacity-30">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-4 relative z-10">
              {['Gestão Automática', 'Segurança Jurídica', 'Dados Protegidos', 'Suporte VIP', 'Crescimento'].map(t => (
                <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </div>

          {/* Security Bento - Business Language */}
          <div className="reveal md:col-span-4 modern-card p-12 flex flex-col items-center text-center justify-center bg-indigo-600 text-white border-none shadow-2xl shadow-indigo-600/20">
            <div className="relative mb-8">
                <ShieldCheck className="w-16 h-16 text-indigo-200" />
            </div>
            <h3 className="text-4xl font-black mb-4 tracking-tighter">Paz de Espírito</h3>
            <p className="opacity-80 font-medium leading-relaxed">
              Cuidamos de toda a segurança e leis de dados (LGPD) para que você não tenha preocupações jurídicas.
            </p>
            <div className="mt-8 px-6 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
              Proteção Nível Bancário
            </div>
          </div>
        </div>
      </section>

      {/* CASES SECTION - CLEAR TITLES */}
      <section className="bg-slate-50 dark:bg-slate-900/90 py-32 mb-48 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl reveal">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                Soluções que <span className="text-indigo-600">Funcionam.</span>
              </h2>
              <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Veja como transformamos o dia a dia de empresas reais através da nossa consultoria.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('solutions')}
              className="reveal flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] group text-slate-900 dark:text-white"
            >
              Ver todos os sistemas
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {DEVELOI_PROJECTS.slice(0, 2).map((p) => (
              <div key={p.id} className="reveal group cursor-pointer" onClick={() => onNavigate('solutions')}>
                <div className="relative overflow-hidden rounded-[56px] mb-8 aspect-video">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                    <div className="flex gap-4">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-[10px] font-black text-white uppercase">Solução Completa</span>
                    </div>
                  </div>
                </div>
                <div className="px-6">
                  <h3 className="text-3xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                  <div className="flex gap-12">
                    {p.metrics.slice(0, 2).map((m, mi) => (
                      <div key={mi}>
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{m.value}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFINED CTA - CONSULTANCY FOCUS */}
      <section className="max-w-7xl mx-auto px-6 mb-24 reveal">
        <div className="modern-card p-16 md:p-32 bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-none relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[150px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-[80px] font-black mb-12 tracking-tighter leading-none">
              Pronto para o próximo passo?
            </h2>
            <p className="text-xl md:text-3xl opacity-80 mb-16 max-w-3xl mx-auto font-medium">
              Agende um diagnóstico gratuito. Vamos entender seu negócio e propor a solução ideal para você.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-indigo-900 px-16 py-8 rounded-[32px] font-black text-sm uppercase tracking-[0.3em] hover:scale-110 hover:shadow-2xl transition-all flex items-center gap-3"
              >
                Falar com consultor agora
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
