
import React from 'react';
import Navbar from './Navbar';
import WhatsAppBot from './WhatsAppBot';
import { Globe, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen text-slate-200 flex flex-col selection:bg-blue-500/30 selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      
      <main className="flex-grow">
        {children}
      </main>

      {/* WhatsApp Interactive Bot */}
      <WhatsAppBot />

      <footer className="py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <span className="text-4xl font-black text-white mb-8 block tracking-tighter">DEVELOI<span className="text-blue-500">.</span></span>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
                Engenharia de software de alta performance para empresas que buscam liderança tecnológica e eficiência inquestionável.
              </p>
              <div className="flex space-x-6 text-slate-500">
                 <Globe className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
                 <Mail className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
                 <MapPin className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-8">Sistemas</h4>
                <ul className="space-y-4 text-slate-400 text-sm font-medium">
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-400">NR Pro Industrial</button></li>
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-400">Pilaflex Health</button></li>
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-400">PsiManager Pro</button></li>
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-400">Custom Cloud</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-8">Links</h4>
                <ul className="space-y-4 text-slate-400 text-sm font-medium">
                  <li><button onClick={() => onNavigate('about')} className="hover:text-blue-400">Manifesto</button></li>
                  <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-400">Atendimento</button></li>
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-400">Portfólio</button></li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-black text-white uppercase tracking-widest text-xs mb-8">Nossa Base</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Innovation Hub, SP<br />
                  Data Center, Joinville<br />
                  <span className="text-blue-500 block mt-2">Remote-First Force</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">&copy; {new Date().getFullYear()} Develoi Engineering. All rights reserved.</p>
            <div className="flex space-x-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
