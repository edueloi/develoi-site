
import React, { useState } from 'react';
import { DEVELOI_PROJECTS } from '../constants';
import { 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Lock, 
  Zap,
  LayoutDashboard,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';

const Solutions: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="bg-slate-950 min-h-screen pt-24 pb-20 animate-in fade-in duration-700">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <button 
            onClick={() => setSelectedProject(null)}
            className="flex items-center space-x-3 text-slate-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Voltar para o Arsenal</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Visual Column */}
            <div className="reveal active">
              <div className="relative group rounded-[48px] overflow-hidden glass-premium border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="bg-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                    {selectedProject.category}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                    {selectedProject.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="reveal active" style={{ transitionDelay: '0.2s' }}>
              <div className="space-y-12">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6">Visão Geral</h2>
                  <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Arquitetura & Recursos</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-4 p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span className="text-sm font-bold text-slate-300 leading-tight group-hover:text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6">
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-10 py-8 bg-white text-slate-950 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center space-x-3"
                  >
                    <span>Abrir Solução Live</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => window.location.hash = 'contact'}
                    className="flex-1 px-10 py-8 glass-premium text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center space-x-3"
                  >
                    <span>Implementar em minha empresa</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 pt-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Cinematic */}
          <div className="mb-32 text-center reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-6 py-2.5 rounded-full mb-10 font-bold text-[10px] uppercase tracking-[0.3em] border border-blue-500/20">
              <Zap className="w-3.5 h-3.5 fill-blue-500" />
              <span>Nosso Arsenal Tecnológico</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-[900] mb-10 text-white leading-[0.85] tracking-[-0.05em]">
              Sistemas que <br />
              <span className="text-gradient">dominam o mercado.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore soluções prontas para escalar ou solicite uma engenharia sob medida para o seu gargalo operacional.
            </p>
          </div>

          {/* New Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-40">
            {DEVELOI_PROJECTS.map((project, idx) => (
              <div 
                key={project.id} 
                className="group relative reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="glass-premium rounded-[56px] overflow-hidden border-white/5 transition-all duration-700 hover:border-blue-500/30">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                    
                    <div className="absolute top-10 left-10">
                       <span className="bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-5 py-2 rounded-full border border-white/10">
                          {project.category}
                       </span>
                    </div>

                    <div className="absolute bottom-12 left-12 right-12 z-20">
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-8 leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="px-8 py-5 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-3 hover:scale-105 transition-all shadow-xl"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>Ver Detalhes Técnicos</span>
                        </button>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-white/20 transition-all border border-white/10"
                        >
                          <span>Acessar</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="relative rounded-[64px] glass-premium p-12 md:p-32 text-center border-white/10 overflow-hidden reveal">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-black mb-10 text-white tracking-tighter leading-none">
              Nenhuma solução <br />se encaixa?
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-medium">
              Nós criamos o seu próprio ecossistema digital do zero. Arquitetura sênior para demandas ultra-complexas.
            </p>
            <button 
              onClick={() => window.location.hash = 'contact'}
              className="px-16 py-8 bg-blue-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-500 hover:scale-105 transition-all flex items-center space-x-4 mx-auto group shadow-2xl shadow-blue-600/20"
            >
              <span>Consultar Engenharia Sob Medida</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
