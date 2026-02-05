
import React from 'react';
import Navbar from './Navbar';
import WhatsAppBot from './WhatsAppBot';
import { Globe, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

// Added default export and completed the footer section
const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      
      <main className="flex-grow">
        {children}
      </main>

      {/* WhatsApp Interactive Bot */}
      <WhatsAppBot />

      <footer className="py-24 border-t border-slate-500/10 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--footer-bg)' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <span className="text-4xl font-black mb-8 block tracking-tighter">DEVELOI<span className="text-blue-500">.</span></span>
              <p className="opacity-60 text-lg leading-relaxed mb-10 max-w-sm font-medium">
                Engenharia de software de alta performance para empresas que buscam liderança tecnológica e eficiência inquestionável.
              </p>
              <div className="flex space-x-6 opacity-40">
                 <Globe className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
                 <Mail className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
                 <MapPin className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Sistemas</h4>
                <ul className="space-y-4 opacity-70 text-sm font-bold">
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-500 transition-colors">NR Pro Industrial</button></li>
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-500 transition-colors">Pilaflex Health</button></li>
                  <li><button onClick={() => onNavigate('solutions')} className="hover:text-blue-500 transition-colors">Develoi Salão</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Empresa</h4>
                <ul className="space-y-4 opacity-70 text-sm font-bold">
                  <li><button onClick={() => onNavigate('about')} className="hover:text-blue-500 transition-colors">Quem Somos</button></li>
                  <li><button onClick={() => onNavigate('services')} className="hover:text-blue-500 transition-colors">Serviços</button></li>
                  <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-500 transition-colors">Contato</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 opacity-40">Recursos</h4>
                <ul className="space-y-4 opacity-70 text-sm font-bold">
                  <li><button className="hover:text-blue-500 transition-colors">Documentação</button></li>
                  <li><button className="hover:text-blue-500 transition-colors">Suporte</button></li>
                  <li><button className="hover:text-blue-500 transition-colors">Blog</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-500/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">© 2025 DEVELOI Engineering. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
