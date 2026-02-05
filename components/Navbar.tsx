
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
    { id: 'about', label: 'Sobre Nós' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <>
      <nav className={`fixed top-6 left-0 right-0 z-[100] transition-all duration-500 px-6`}>
        <div className={`max-w-7xl mx-auto px-8 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 rounded-[32px] border border-white/20 dark:border-slate-800' 
          : 'bg-transparent'
        }`}>
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">DEVELOI</span>
          </button>
          
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-bold transition-all relative py-2 ${
                  currentPage === item.id ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 rounded-full animate-in fade-in slide-in-from-bottom-1"></span>
                )}
              </button>
            ))}
            
            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8">
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                onClick={() => onNavigate('contact')}
                className="bg-indigo-600 text-white px-7 py-3 rounded-2xl font-black text-xs hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 transition-all flex items-center gap-2"
              >
                Meu Projeto
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsOpen(true)} className="p-2">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Aprimorado */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] bg-white dark:bg-slate-950 flex flex-col p-8 animate-in fade-in slide-in-from-top-10 duration-500">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black tracking-tighter">DEVELOI</span>
            <button onClick={() => setIsOpen(false)} className="p-4 bg-slate-100 dark:bg-slate-900 rounded-[24px]">
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                className={`text-5xl font-black text-left transition-colors ${
                  currentPage === item.id ? 'text-indigo-600' : 'hover:text-indigo-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }}
              className="bg-indigo-600 text-white py-8 rounded-[32px] text-2xl font-black mt-10 shadow-2xl shadow-indigo-500/30"
            >
              Começar agora
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
