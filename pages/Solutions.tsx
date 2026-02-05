
import React, { useState, useEffect } from 'react';
import { DEVELOI_PROJECTS } from '../constants';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Zap,
  Maximize2,
  Cpu,
  ShieldAlert,
  Terminal,
  Server,
  Code2,
  Activity,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../types';

interface SolutionsProps {
  onNavigate?: (page: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hook para garantir que as animações de "reveal" funcionem ao trocar de estado
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [selectedProject]);

  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSelectedProject(null);
  };

  const handleSelect = (project: Project) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProject(project);
  };

  if (selectedProject) {
    return (
      <div className="bg-slate-950 min-h-screen pt-24 pb-20 animate-in fade-in zoom-in duration-500 overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <button 
              onClick={handleReturn}
              className="group flex items-center space-x-4 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-2xl border border-white/5 transition-all w-fit backdrop-blur-xl"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Retomar ao Arsenal</span>
            </button>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SISTEMA ONLINE</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest">BUILD V8.4-STABLE</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-8">
              <div className="relative group rounded-[48px] overflow-hidden glass-premium border-white/10 shadow-2xl aspect-[16/10]">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="inline-flex items-center space-x-2 bg-blue-600 px-4 py-1.5 rounded-full mb-4">
                      <Zap className="w-3 h-3 text-white fill-white" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">{selectedProject.category}</span>
                   </div>
                   <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
                     {selectedProject.title}
                   </h1>
                   <p className="text-slate-400 font-medium text-base leading-relaxed">
                     {selectedProject.description}
                   </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="glass-premium p-4 md:p-6 rounded-[32px] border-white/5 text-center transition-all hover:bg-white/[0.05]">
                    <div className="text-xl md:text-2xl font-black text-white mb-1 tracking-tighter">{metric.value}</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-blue-500 mb-0.5">{metric.label}</div>
                    <div className="text-[7px] font-bold text-slate-600 uppercase tracking-widest truncate">{metric.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div className="glass-premium p-8 md:p-10 rounded-[48px] border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Terminal className="w-24 h-24 text-white" />
                </div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-6 flex items-center">
                  <Code2 className="w-4 h-4 mr-3" />
                  Engineering Blueprint
                </h2>
                <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                  {selectedProject.fullCase}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-[9px] font-bold text-slate-400 group-hover:text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-premium p-8 rounded-[40px] border-white/5">
                   <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Stack Tecnológica</h3>
                   <div className="flex flex-wrap gap-2">
                     {selectedProject.techStack.map(tech => (
                       <span key={tech} className="px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-[9px] font-black text-white uppercase tracking-widest">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                <div className="glass-premium p-8 rounded-[40px] border-white/5 flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-3">
                    <Server className="w-4 h-4 text-blue-500" />
                    <div className="min-w-0">
                      <p className="text-[9px] font-black text-white uppercase tracking-widest">Hospedagem</p>
                      <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest truncate">Cloud Privada Develoi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <div className="min-w-0">
                      <p className="text-[9px] font-black text-white uppercase tracking-widest">Criptografia</p>
                      <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest truncate">TLS 1.3 / AES-256</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-[1.4] min-w-0 py-6 bg-blue-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-blue-500 transition-all flex items-center justify-center space-x-3 shadow-2xl shadow-blue-600/20 active:scale-95"
                >
                  <span className="truncate">Ambiente Live</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
                <button 
                  onClick={() => onNavigate ? onNavigate('contact') : window.location.hash = 'contact'}
                  className="flex-1 min-w-0 py-6 bg-white text-slate-950 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="truncate">Customizar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none" />
      <section className="py-32 md:py-48 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-6 py-2.5 rounded-full mb-8 font-bold text-[10px] uppercase tracking-[0.4em] border border-blue-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Portfólio de Soluções</span>
            </div>
            <h1 className="text-6xl md:text-[140px] font-[900] mb-8 text-white leading-[0.8] tracking-tighter">
              Arsenal <br />
              <span className="text-gradient">Digital.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl font-medium leading-relaxed">
              Exploração técnica completa de sistemas mantidos pela <span className="text-white">Develoi Engineering</span>. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-48">
            {DEVELOI_PROJECTS.map((project, idx) => (
              <div 
                key={project.id} 
                className="group relative reveal cursor-pointer"
                style={{ transitionDelay: `${idx * 0.1}s` }}
                onClick={() => handleSelect(project)}
              >
                <div className="relative glass-premium rounded-[56px] p-2 border-white/5 overflow-hidden transition-all duration-700 hover:border-blue-500/40 hover:translate-y-[-10px] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)]">
                  <div className="aspect-square rounded-[48px] overflow-hidden relative mb-6">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
                    <div className="absolute top-8 left-8">
                       <div className="flex items-center space-x-2 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                          <Activity className="w-3 h-3 text-blue-500" />
                          <span className="text-[8px] font-black uppercase tracking-widest text-white">{project.category}</span>
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                       <h3 className="text-3xl font-black text-white tracking-tighter mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between">
                         <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">
                            <span>Ficha Técnica</span>
                            <Maximize2 className="w-4 h-4" />
                         </div>
                         <div className="flex -space-x-2">
                           {project.techStack.slice(0, 3).map((_, i) => (
                             <div key={i} className="w-6 h-6 rounded-full border border-slate-950 bg-blue-600/20 flex items-center justify-center text-[8px] text-blue-400 font-bold">
                               <Code2 className="w-3 h-3" />
                             </div>
                           ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative glass-premium p-16 md:p-32 rounded-[72px] border-white/10 text-center overflow-hidden reveal">
            <div className="absolute -inset-20 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
            <ShieldAlert className="w-12 h-12 text-blue-500 mx-auto mb-10 opacity-50" />
            <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter mb-12 leading-[0.85]">
              Sistemas que <br />geram <span className="text-blue-500 italic">lucro.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => onNavigate ? onNavigate('contact') : window.location.hash = 'contact'}
                className="w-full sm:w-auto px-16 py-7 bg-white text-slate-950 rounded-[28px] font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center space-x-4"
              >
                <span>Falar com um Engenheiro</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
