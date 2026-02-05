
import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  ChevronRight, 
  Sparkles, 
  Phone, 
  Headphones, 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  Activity,
  Zap,
  BarChart3
} from 'lucide-react';

const WhatsAppBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Olá! Sou o assistente Develoi. Nossa equipe está pronta para ajudar você. Como podemos colaborar hoje?' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const options = [
    { 
      label: 'Sistemas Industriais', 
      value: 'Interesse em automação e conformidade NR.',
      icon: <Activity className="w-3 h-3" />,
      tag: 'Indústria'
    },
    { 
      label: 'Gestão de Saúde', 
      value: 'Busco soluções para clínicas e saúde.',
      icon: <UserCheck className="w-3 h-3" />,
      tag: 'Saúde'
    },
    { 
      label: 'Software Sob Medida', 
      value: 'Tenho uma ideia de sistema personalizado.',
      icon: <Zap className="w-3 h-3" />,
      tag: 'Inovação'
    }
  ];

  const handleOptionClick = (value: string) => {
    setMessages(prev => [...prev, { role: 'user', text: value }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Ótimo. Conectando você ao nosso time agora.' 
      }]);
      
      setTimeout(() => {
        const phone = "5511999999999";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(value)}`;
        window.open(url, '_blank');
      }, 1200);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[200]">
      {/* Dynamic Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white dark:border-slate-800 animate-pulse flex items-center justify-center text-[7px] text-white font-black z-20 shadow-lg">
          1
        </div>
      )}

      {/* Re-scaled Toggle Button (Discrete & Elegant) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-10 h-10 md:w-14 md:h-14 rounded-2xl md:rounded-[20px] shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center overflow-hidden border border-white/20 dark:border-white/10 ${
          isOpen ? 'bg-slate-950 rotate-90' : 'bg-indigo-600'
        }`}
      >
        {isOpen ? (
          <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 md:w-7 md:h-7 text-white fill-white/10" />
        )}
      </button>

      {/* Optimized Micro-Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-14 md:bottom-18 right-0 w-[260px] sm:w-[300px] md:w-[340px] bg-white dark:bg-slate-950 rounded-[28px] md:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 border border-slate-100 dark:border-white/5 flex flex-col">
          
          {/* Compact Header */}
          <div className="p-5 md:p-6 bg-slate-900 text-white shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center border border-white/10">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-black text-xs md:text-sm tracking-tight">Develoi Connect</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[7px] text-indigo-300 font-black uppercase tracking-widest">Equipe Ativa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Messages Area */}
          <div className="p-5 md:p-6 overflow-y-auto space-y-4 flex flex-col scroll-smooth bg-white dark:bg-slate-950/50 max-h-[350px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-500`}>
                <div className={`max-w-[90%] p-3.5 md:p-4 rounded-[18px] text-[11px] md:text-xs font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-slate-700 dark:text-slate-300 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {!isTyping && messages.length === 1 && (
              <div className="grid grid-cols-1 gap-2 pt-2">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt.value)}
                    className="group flex items-center justify-between p-3 bg-white dark:bg-slate-900 hover:bg-indigo-600 border border-slate-100 dark:border-white/5 rounded-xl transition-all duration-300 text-left shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 bg-indigo-600/5 group-hover:bg-white/20 rounded-lg flex items-center justify-center text-indigo-600 group-hover:text-white">
                            {opt.icon}
                        </div>
                        <span className="text-[10px] font-black text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors">{opt.label}</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-indigo-300 group-hover:text-white" />
                  </button>
                ))}
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Compact Footer */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-white/5 shrink-0 text-center">
             <button 
               onClick={() => handleOptionClick('Olá, gostaria de falar com a equipe técnica.')}
               className="w-full py-2.5 bg-white dark:bg-white/5 hover:bg-indigo-600 hover:text-white text-slate-500 dark:text-slate-400 rounded-lg font-black text-[8px] uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10"
             >
                Equipe Online <Send className="w-2 h-2" />
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppBot;
