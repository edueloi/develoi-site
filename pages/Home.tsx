
import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Lock, 
  ShieldAlert, 
  Code2, 
  Activity, 
  MessageCircle, 
  Server, 
  CloudLightning, 
  ShieldCheck, 
  Zap,
  Globe,
  Cpu
} from 'lucide-react';
import { COMPANY_STATS, TECHNICAL_CAPABILITIES, DEVELOI_PROJECTS } from '../constants';

interface Props {
  onNavigate: (page: string) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-0">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-40 flex flex-col items-center text-center relative overflow-hidden">
        <div className="reveal inline-flex items-center gap-2 bg-indigo-600/5 text-indigo-600 dark:text-indigo-400 px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] mb-12 border border-indigo-600/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Next Generation of Software</span>
        </div>
        
        <h1 className="reveal text-5xl md:text-[110px] font-black mb-10 tracking-[-0.05em] leading-[0.9] max-w-6xl text-slate-900 dark:text-white">
          Construindo o <br />
          <span className="text-gradient">Futuro Digital.</span>
        </h1>
        
        <p className="reveal text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
          Engenharia de elite para empresas que buscam liderança. 
          Interfaces de luxo e automações que escalam seu negócio.
        </p>
        
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-premium w-full sm:w-auto text-base shadow-2xl shadow-indigo-600/30"
          >
            Iniciar meu projeto
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('solutions')}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-black hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center justify-center gap-3 text-base"
          >
            Portfólio 2025
          </button>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="reveal md:col-span-8 modern-card p-10 md:p-16 bg-slate-900 text-white border-none flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                  <Rocket className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">Escalabilidade Radical</h3>
                  <p className="opacity-50 text-xs font-medium uppercase tracking-widest">Cloud-Native Architecture</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {COMPANY_STATS.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-black mb-1">{s.value}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-0.5">{s.label}</div>
                    <div className="text-[8px] font-bold opacity-30">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-3 relative z-10">
              {['Auto-Scaling', 'CI/CD', 'Microservices', 'Kubernetes'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </div>

          <div className="reveal md:col-span-4 modern-card p-10 flex flex-col items-center text-center justify-center bg-indigo-600 text-white border-none">
            <div className="relative mb-6">
                <Lock className="w-12 h-12 text-indigo-200" />
                <ShieldAlert className="absolute -top-1 -right-1 w-6 h-6 text-white animate-pulse" />
            </div>
            <h3 className="text-3xl font-black mb-3">Security First</h3>
            <p className="opacity-80 text-sm font-medium leading-relaxed">
              Criptografia AES-256 e conformidade total com LGPD.
            </p>
          </div>
        </div>
      </section>

      {/* CASES SECTION - FIXED CONTRAST */}
      <section className="bg-slate-50 dark:bg-slate-900/90 py-32 mb-32 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl reveal">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
                Cases de <span className="text-indigo-600">Alta Performance.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Construímos os sistemas que rodam o core de empresas vitoriosas.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('solutions')}
              className="reveal flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group text-slate-900 dark:text-white"
            >
              Ver todos os projetos
              <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DEVELOI_PROJECTS.slice(0, 2).map((p) => (
              <div key={p.id} className="reveal group cursor-pointer" onClick={() => onNavigate('solutions')}>
                <div className="relative overflow-hidden rounded-[40px] mb-6 aspect-video">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-3">
                      {p.techStack.slice(0, 2).map(t => (
                        <span key={t} className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-[8px] font-black text-white uppercase">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-1">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-5xl mx-auto px-6 mb-24 reveal">
        <div className="modern-card p-12 md:p-20 bg-indigo-600 text-white border-none relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              Vamos construir o futuro?
            </h2>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-indigo-900 px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-all"
            >
              Falar com nossa equipe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
