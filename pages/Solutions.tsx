
import React, { useState } from 'react';
import { DEVELOI_PROJECTS } from '../constants';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle,
  Layout,
  Smartphone,
  ChevronRight,
  Heart
} from 'lucide-react';
import { Project } from '../types';

interface SolutionsProps {
  onNavigate: (page: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto animate-in fade-in duration-500">
        <button 
          onClick={() => setSelectedProject(null)}
          className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-all mb-8 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a lista
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src={selectedProject.imageUrl} 
              alt={selectedProject.title} 
              className="w-full aspect-video object-cover rounded-3xl mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
            <p className="text-lg opacity-70 mb-8">{selectedProject.description}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <div className="font-bold text-lg">{m.value}</div>
                  <div className="text-[10px] opacity-50 uppercase font-bold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500" />
                O que entregamos:
              </h3>
              <ul className="space-y-3">
                {selectedProject.features.map((f, i) => (
                  <li key={i} className="text-sm opacity-70 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a 
                href={selectedProject.link} 
                target="_blank" 
                className="btn-primary flex-1 text-center flex items-center justify-center gap-2"
              >
                Ver online <ExternalLink className="w-4 h-4" />
              </a>
              <button 
                onClick={() => onNavigate('contact')}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              >
                Quero algo assim
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 reveal">
        <h1 className="text-5xl font-black mb-6">Nossos Projetos</h1>
        <p className="text-xl opacity-60 max-w-2xl mx-auto">
          Veja como estamos ajudando pessoas e empresas a transformarem seu trabalho com tecnologia simples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {DEVELOI_PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="glass-card overflow-hidden group cursor-pointer reveal"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-8">
              <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm opacity-60 mb-6 line-clamp-2">{project.description}</p>
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-500">
                Ver detalhes <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center reveal">
        <Heart className="w-8 h-8 text-pink-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Seu projeto pode ser o próximo!</h2>
        <button onClick={() => onNavigate('contact')} className="btn-primary">
          Vamos começar?
        </button>
      </div>
    </div>
  );
};

export default Solutions;
