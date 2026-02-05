
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Zap, Sun, Moon, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'solutions', label: 'Projetos' },
    { id: 'about', label: 'DNA' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 pt-6`}>
        <div className={`max-w-7xl mx-auto px-10 py-5 flex items-center justify-between transition-all duration-1000 ${
          scrolled 
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-2xl rounded-[40px] border border-white/20 dark:border-white/5 py-4' 
          : 'bg-transparent'
        }`}>
          <button onClick={() => onNavigate('home')} className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-indigo-600 rounded-[18px] flex items-center justify-center shadow-xl shadow-indigo-600/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-black tracking-[-0.05em]">DEVELOI</span>
          </button>
          
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all relative py-2 ${
                  currentPage === item.id ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-indigo-600 rounded-full"></span>
                )}
              </button>
            ))}
            
            <div className="flex items-center gap-6 border-l border-slate-200 dark:border-white/10 pl-10">
              <button 
                onClick={toggleTheme}
                className="p-3.5 rounded-2xl bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                onClick={() => onNavigate('contact')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600/30 transition-all flex items-center gap-3"
              >
                Let's Build
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="p-4 bg-slate-100/50 dark:bg-white/5 rounded-2xl">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] bg-white dark:bg-slate-950 flex flex-col p-10 animate-in fade-in zoom-in duration-500">
          <div className="flex justify-between items-center mb-24">
            <span className="text-3xl font-black tracking-tighter">DEVELOI</span>
            <button onClick={() => setIsOpen(false)} className="p-5 bg-slate-100 dark:bg-white/5 rounded-3xl">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                className={`text-6xl font-black text-left transition-colors tracking-tighter ${
                  currentPage === item.id ? 'text-indigo-600' : 'hover:text-indigo-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }}
              className="bg-indigo-600 text-white py-10 rounded-[40px] text-3xl font-black mt-16 shadow-2xl shadow-indigo-600/30"
            >
              Iniciar Projeto
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
