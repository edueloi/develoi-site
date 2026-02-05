
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, ChevronRight, Sparkles } from 'lucide-react';

const WhatsAppBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Olá! Sou o assistente Develoi. Como posso ajudar?' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const options = [
    { label: 'Sistemas Industriais', value: 'Quero otimizar minha planta industrial.' },
    { label: 'Clínicas & Saúde', value: 'Preciso de um sistema para minha clínica.' },
    { label: 'Projeto Customizado', value: 'Tenho uma ideia de software inovadora.' }
  ];

  const handleOptionClick = (value: string) => {
    setMessages(prev => [...prev, { role: 'user', text: value }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Excelente! Vou te conectar com um especialista agora.' 
      }]);
      
      setTimeout(() => {
        const phone = "5511999999999";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(value)}`;
        window.open(url, '_blank');
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[120]">
      {/* Bot Button - Scaled down for mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-green-500'
        }`}
      >
        {isOpen ? <X className="w-5 h-5 text-white" /> : <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />}
      </button>

      {/* Chat UI - Optimized width for mobile */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[280px] sm:w-[320px] md:w-[400px] glass-premium rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-500 border-white/5">
          <div className="p-4 md:p-6 bg-white/5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] md:text-sm">Develoi Assist</h4>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Ativo</span>
                </div>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-blue-500 opacity-40" />
          </div>

          <div className="p-4 md:p-6 h-[300px] md:h-[350px] overflow-y-auto space-y-4 flex flex-col scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in zoom-in duration-300`}>
                <div className={`max-w-[85%] p-3.5 rounded-[16px] text-xs font-medium ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-[16px] rounded-bl-none flex space-x-1">
                  <div className="w-1 h-1 bg-slate-600 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            
            {!isTyping && messages.length === 1 && (
              <div className="grid grid-cols-1 gap-1.5 pt-2">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt.value)}
                    className="flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-[10px] font-bold text-slate-400 transition-all text-left"
                  >
                    <span>{opt.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  </button>
                ))}
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-slate-900/50 text-center">
             <p className="text-[7px] md:text-[8px] text-slate-600 font-bold uppercase tracking-widest">Engineering AI Support</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Fix: Added missing default export
export default WhatsAppBot;
