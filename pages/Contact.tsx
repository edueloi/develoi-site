
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-8 font-bold text-[10px] uppercase tracking-[0.2em] border border-blue-500/20">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Engenharia de Vendas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-white leading-[0.95]">Vamos Construir <br /><span className="text-gradient">o Futuro?</span></h1>
            <p className="text-lg text-slate-400 mb-16 leading-relaxed font-medium max-w-lg">
              Escolha seu canal ou preencha o formulário. Nossa equipe sênior retornará em até 2 horas.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Mail className="w-6 h-6 text-blue-500" />, label: "E-mail Corporativo", val: "contato@develoi.com" },
                { icon: <Phone className="w-6 h-6 text-green-500" />, label: "WhatsApp Direct", val: "(11) 99999-9999" },
                { icon: <MapPin className="w-6 h-6 text-slate-400" />, label: "Innovation Hub", val: "São Paulo, Brasil" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group">
                  <div className="p-5 bg-white/5 border border-white/5 rounded-2xl group-hover:bg-blue-600/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl md:text-2xl font-black text-white">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-premium p-8 md:p-12 rounded-[40px] md:rounded-[56px] border border-white/10 reveal" style={{transitionDelay: '0.2s'}}>
            <h3 className="text-2xl md:text-3xl font-black mb-10 text-white tracking-tight">Solicitar Orçamento</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all" placeholder="empresa@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Solução</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-slate-900">NR Pro Industrial</option>
                  <option className="bg-slate-900">Pilaflex Studio</option>
                  <option className="bg-slate-900">PsiManager Pro</option>
                  <option className="bg-slate-900">Custom Cloud</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mensagem</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition-all min-h-[140px] resize-none" placeholder="Qual o seu desafio hoje?" />
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-blue-500 transition-all active:scale-[0.98] shadow-2xl shadow-blue-600/20">
                <span>Enviar Proposta</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
