
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Clock,
  ExternalLink,
  Shield
} from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-6 py-2.5 rounded-full mb-8 font-bold text-[10px] uppercase tracking-[0.4em] border border-blue-500/20">
            <Zap className="w-3.5 h-3.5 fill-blue-500" />
            <span>Engenharia de Vendas & Parcerias</span>
          </div>
          <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.85] tracking-tighter mb-8">
            Vamos construir <br /><span className="text-gradient">o próximo unicórnio?</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            Seja um sistema industrial complexo ou um MVP disruptivo, nossa engenharia está pronta para o desafio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT CARDS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {[
              { 
                icon: <Mail className="w-6 h-6" />, 
                label: "E-mail Executivo", 
                val: "contato@develoi.com", 
                color: "blue",
                desc: "Para propostas e editais comerciais."
              },
              { 
                icon: <MessageSquare className="w-6 h-6" />, 
                label: "WhatsApp Business", 
                val: "+55 11 99999-9999", 
                color: "green",
                desc: "Atendimento imediato via time sênior."
              },
              { 
                icon: <Globe className="w-6 h-6" />, 
                label: "Presença Global", 
                val: "Remote-First Force", 
                color: "cyan",
                desc: "Hubs em São Paulo e Joinville."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group p-8 glass-premium rounded-[40px] border-white/5 hover:bg-white/[0.03] transition-all duration-500 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-${item.color}-600/10 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${item.color}-500`}>{item.icon}</div>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{item.label}</h4>
                <p className="text-2xl font-black text-white mb-2 tracking-tight">{item.val}</p>
                <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
              </div>
            ))}

            {/* Response Time Indicator */}
            <div className="p-8 bg-blue-600/5 rounded-[40px] border border-blue-500/10 flex items-center justify-between reveal">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">Equipe de Plantão</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Resposta média: 15 min</p>
                </div>
              </div>
              <Clock className="w-5 h-5 text-blue-500 opacity-40" />
            </div>
          </div>

          {/* RIGHT: INTERACTIVE FORM (7 cols) */}
          <div className="lg:col-span-7 relative reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-[60px] pointer-events-none" />
            
            <div className="relative glass-premium p-8 md:p-16 rounded-[56px] border-white/10 shadow-2xl overflow-hidden">
              {submitted ? (
                <div className="py-20 text-center animate-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Missão Recebida!</h3>
                  <p className="text-slate-400 text-lg mb-10 max-w-sm mx-auto font-medium">
                    Sua solicitação foi processada. Um de nossos engenheiros entrará em contato em breve.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 hover:text-white transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-black text-white tracking-tighter">Briefing do Projeto</h3>
                    <Shield className="w-5 h-5 text-slate-700" />
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Identificação</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:bg-white/[0.08] focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700" 
                          placeholder="Seu nome ou empresa" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Canal de Retorno</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:bg-white/[0.08] focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700" 
                          placeholder="Email corporativo" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Tipo de Solução</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['SaaS', 'RPA/IA', 'Industrial', 'Consultoria'].map((opt) => (
                          <label key={opt} className="relative cursor-pointer group">
                            <input type="radio" name="service" value={opt} className="peer sr-only" />
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center text-[9px] font-black uppercase tracking-widest text-slate-500 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-500 group-hover:bg-white/10 transition-all">
                              {opt}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">O Desafio</label>
                      <textarea 
                        required
                        className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-white focus:bg-white/[0.08] focus:border-blue-500/50 outline-none transition-all min-h-[160px] resize-none placeholder:text-slate-700" 
                        placeholder="Descreva seu gargalo operacional ou visão de produto..." 
                      />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full py-8 bg-blue-600 text-white rounded-[32px] font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center space-x-4 hover:bg-blue-500 transition-all active:scale-[0.98] shadow-2xl shadow-blue-600/30 group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processando...</span>
                        </>
                      ) : (
                        <>
                          <span>Iniciar Jornada Tecnológica</span>
                          <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[8px] font-bold text-slate-600 uppercase tracking-[0.3em]">
                      Dados protegidos por criptografia de ponta a ponta
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-blue-600\/10 { background-color: rgba(37, 99, 235, 0.1); }
        .bg-green-600\/10 { background-color: rgba(22, 163, 74, 0.1); }
        .bg-cyan-600\/10 { background-color: rgba(8, 145, 178, 0.1); }
        .text-blue-500 { color: #3b82f6; }
        .text-green-500 { color: #22c55e; }
        .text-cyan-500 { color: #06b6d4; }
      `}</style>
    </div>
  );
};

export default Contact;
