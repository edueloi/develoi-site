
import React, { useState } from 'react';
import { DEVELOI_PROJECTS } from '../constants';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle,
  ChevronRight,
  Heart,
  MessageCircle,
  TrendingUp,
  Target,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../types';

interface SolutionsProps {
  onNavigate: (page: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <button 
          onClick={() => setSelectedProject(null)}
          className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all mb-12 font-black text-[10px] uppercase tracking-widest text-slate-400 dark:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para todos os casos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="relative rounded-[56px] overflow-hidden mb-12 shadow-2xl">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full aspect-video object-cover"
              />
            </div>
            
            <div className="space-y-12">
                <section>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">{selectedProject.title}</h1>
                    <div className="flex gap-4 mb-10 flex-wrap">
                        {selectedProject.tags.map(tag => (
                            <span key={tag} className="px-5 py-2 bg-indigo-600/5 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-600/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="modern-card p-10 md:p-16 bg-slate-50 dark:bg-white/5 border-none">
                    <h3 className="text-2xl font-black mb-6 text-indigo-600 flex items-center gap-3">
                        <Target className="w-6 h-6" /> O Desafio do Cliente
                    </h3>
                    <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic">
                        "{selectedProject.description}"
                    </p>
                </section>

                <section>
                    <h3 className="text-3xl font-black mb-8 text-slate-900 dark:text-white">A Solução Develoi</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                        {selectedProject.fullCase}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProject.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-white/5">
                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span className="font-bold text-slate-700 dark:text-slate-300">{f}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-32">
                <div className="modern-card p-10 bg-indigo-600 text-white border-none shadow-2xl shadow-indigo-600/20 mb-8">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6" /> Impacto Realizado
                    </h3>
                    <div className="space-y-10">
                        {selectedProject.metrics.map((m, i) => (
                            <div key={i} className="border-b border-white/10 pb-6 last:border-0">
                                <div className="text-5xl font-black mb-1">{m.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{m.label}</div>
                                <div className="text-sm font-medium opacity-80">{m.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="modern-card p-10 bg-white dark:bg-slate-900">
                    <h4 className="font-black text-slate-900 dark:text-white mb-6">Precisa de algo similar?</h4>
                    <p className="text-slate-500 mb-8 text-sm font-medium">Cada empresa é única. Podemos adaptar esse case para o seu cenário específico.</p>
                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={() => onNavigate('contact')}
                            className="bg-indigo-600 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-3"
                        >
                            Solicitar Orçamento <ChevronRight className="w-4 h-4" />
                        </button>
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="py-5 border border-slate-200 dark:border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                        >
                            Ver outros sucessos
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-32 reveal">
        <div className="inline-flex items-center gap-2 bg-indigo-600/5 text-indigo-600 px-6 py-2.5 rounded-full mb-10 font-bold text-[10px] uppercase tracking-[0.3em] border border-indigo-600/20">
          <span>Portfólio de Resultados</span>
        </div>
        <h1 className="text-6xl md:text-[100px] font-black mb-8 tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
            Histórias de <br /><span className="text-gradient">Sucesso Real.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto">
          Não entregamos apenas software. Entregamos ferramentas que mudaram o rumo de negócios reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-32">
        {DEVELOI_PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer reveal"
          >
            <div className="relative overflow-hidden rounded-[64px] mb-10 aspect-video shadow-xl">
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-12">
                 <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/20 text-white font-black text-xs uppercase tracking-widest">
                    Ver Case Completo
                 </div>
              </div>
            </div>
            <div className="px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-600">
                    <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{project.category}</span>
              </div>
              <h3 className="text-4xl font-black mb-6 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors leading-tight">{project.title}</h3>
              <p className="text-lg text-slate-500 font-medium mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center gap-12 border-t border-slate-100 dark:border-white/5 pt-8">
                 {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                        <div className="text-2xl font-black text-slate-900 dark:text-white">{m.value}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</div>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="modern-card p-16 md:p-32 bg-slate-900 text-white text-center reveal overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="relative z-10">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-10 animate-pulse" />
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">Sua empresa é o <br />próximo sucesso.</h2>
            <p className="text-xl md:text-3xl opacity-60 mb-16 max-w-2xl mx-auto font-medium">Vamos entender seu desafio e desenhar a solução ideal juntos.</p>
            <button 
                onClick={() => onNavigate('contact')} 
                className="bg-indigo-600 text-white px-20 py-8 rounded-[32px] font-black text-sm uppercase tracking-[0.4em] hover:scale-110 transition-all flex items-center gap-4 mx-auto"
            >
                Agendar Diagnóstico <MessageCircle className="w-6 h-6" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
