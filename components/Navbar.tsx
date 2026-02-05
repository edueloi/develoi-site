
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Info, MessageSquare, Zap, ChevronRight, Layers } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'services', label: 'Serviços', icon: Layers },
    { id: 'solutions', label: 'Soluções', icon: Briefcase },
    { id: 'about', label: 'DNA', icon: Info },
    { id: 'contact', label: 'Contato', icon: MessageSquare },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-3 md:py-4' : 'py-6 md:py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`flex items-center justify-between h-14 md:h-18 px-5 md:px-8 rounded-full transition-all duration-500 ${
            scrolled ? 'glass-premium border-white/5 shadow-2xl' : 'bg-transparent'
          }`}>
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 md:space-x-3 group">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-105">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
              </div>
              <span className="text-lg md:text-xl font-black tracking-tighter text-white">DEVELOI</span>
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-all relative group ${
                    currentPage === item.id ? 'text-blue-400' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all rounded-full ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-black text-[9px] uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white shadow-lg active:scale-95"
              >
                Novo Projeto
              </button>
            </div>

            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden w-10 h-10 glass-premium rounded-full flex items-center justify-center text-white border-white/10"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[110] bg-slate-950/80 backdrop-blur-2xl md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col h-full p-6 animate-in slide-in-from-right-full duration-500 ease-out">
            <div className="flex justify-between items-center mb-10">
              <span className="text-lg font-black tracking-tighter text-white">DEVELOI</span>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 glass-premium rounded-full flex items-center justify-center text-white border-white/10">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all border border-transparent ${
                    currentPage === item.id ? 'bg-white/5 border-white/5' : ''
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      currentPage === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 text-slate-500'
                    }`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${
                      currentPage === item.id ? 'text-white' : 'text-slate-500'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  {currentPage === item.id && <ChevronRight className="w-4 h-4 text-blue-500" />}
                </button>
              ))}
            </div>

            <div className="mt-auto pb-6">
              <button 
                onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <span>Contato</span>
                <Zap className="w-4 h-4 fill-slate-950" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
