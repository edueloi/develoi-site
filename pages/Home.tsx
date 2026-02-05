
import React from 'react';
import { 
  ArrowRight, 
  Zap, 
  Bot, 
  TableProperties, 
  LayoutDashboard, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  ShieldCheck,
  MousePointerClick,
  Layers,
  BarChart2,
  CheckCircle,
  Activity
} from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative">
      {/* SECTION: HERO - IMPACTO TOTAL */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Glow Spheres Background */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-500/5 px-6 py-2.5 rounded-full mb-10 border border-blue-500/20 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400/80">Engenharia de Performance</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[110px] lg:text-[140px] font-[900] mb-8 leading-[0.85] tracking-[-0.05em] text-white">
              Sua empresa no <br />
              <span className="text-gradient">Automático.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
              Não somos apenas uma software house. Somos arquitetos de lucro. Construímos <span className="text-white">Agentes de IA</span> e <span className="text-white">Automação de Dados</span> que eliminam o trabalho braçal e escalam seus resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-16 py-8 bg-blue-600 text-white rounded-[24px] font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-blue-500 hover:scale-[1.03] active:scale-95 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.5)] flex items-center justify-center space-x-4 group"
              >
                <span>Iniciar Consultoria</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('solutions')}
                className="w-full sm:w-auto px-16 py-8 glass-premium text-white rounded-[24px] font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-white/10 border-white/20"
              >
                Soluções Prontas
              </button>
            </div>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* SECTION: TRIADE DE VENDAS */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Card: Chatbots IA */}
            <div className="glass-premium p-12 rounded-[56px] border-white/5 reveal group hover:translate-y-[-10px] transition-all duration-500 flex flex-col">
              <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mb-10 border border-blue-500/20 group-hover:bg-blue-600/40 transition-all">
                <Bot className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">Vendedores <br />Digitais 24/7</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">
                Chatbots inteligentes que não apenas respondem, mas **vendem**. Qualificação de leads no WhatsApp e agendamento automático de reuniões.
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center space-x-3 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>Integração WhatsApp API</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>Fechamento sem humanos</span>
                </div>
              </div>
            </div>

            {/* Card: Automação de Planilhas */}
            <div className="glass-premium p-12 rounded-[56px] border-white/5 reveal group hover:translate-y-[-10px] transition-all duration-500 flex flex-col" style={{ transitionDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-emerald-600/20 rounded-3xl flex items-center justify-center mb-10 border border-emerald-500/20 group-hover:bg-emerald-600/40 transition-all">
                <TableProperties className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">Morte ao <br />Trabalho Manual</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">
                Conectamos suas planilhas de Excel e Google ao faturamento e estoque. O que levava horas agora é feito em milissegundos.
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center space-x-3 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>Relatórios Automáticos</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sincronização Cloud</span>
                </div>
              </div>
            </div>

            {/* Card: Dashboards */}
            <div className="glass-premium p-12 rounded-[56px] border-white/5 reveal group hover:translate-y-[-10px] transition-all duration-500 flex flex-col" style={{ transitionDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-purple-600/20 rounded-3xl flex items-center justify-center mb-10 border border-purple-500/20 group-hover:bg-purple-600/40 transition-all">
                <BarChart2 className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">Decisões com <br />Clareza Total</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">
                Sistemas de gestão (ERPs/CRMs) customizados. Tenha o controle de cada centavo da sua operação em dashboards de alto nível.
              </p>
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center space-x-3 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>Visão de Lucro Real</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  <span>Gestão de Inventário IA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: ROI & RESULTADOS */}
      <section className="py-40 relative bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1 reveal">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-[1.1]">
                Onde a engenharia <br />encontra o <span className="text-blue-500 italic">lucro.</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, t: 'Retorno sobre Investimento', d: 'Nossos clientes recuperam o investimento em automação em menos de 90 dias úteis.' },
                  { icon: <Activity className="w-6 h-6" />, t: 'Escalabilidade Infinita', d: 'Sua empresa cresce 5x em volume de dados sem precisar contratar novos funcionários operacionais.' },
                  { icon: <ShieldCheck className="w-6 h-6" />, t: 'Blindagem de Dados', d: 'Segurança nível bancário em todos os fluxos de automação e chatbots.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-white/5 rounded-[20px] flex items-center justify-center border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{item.t}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-blue-600/15 blur-[120px] rounded-full" />
              <div className="relative glass-premium p-8 rounded-[64px] border-white/10 overflow-hidden group">
                <div className="bg-slate-950 rounded-[40px] overflow-hidden border border-white/5 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                    alt="Technology Hub" 
                    className="w-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-12 right-12 bg-blue-600 px-8 py-6 rounded-[32px] shadow-2xl animate-float">
                  <div className="text-5xl font-[900] text-white tracking-tighter">92%</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mt-1">Redução de No-Show</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA FINAL */}
      <section className="py-48 px-6">
        <div className="max-w-6xl mx-auto relative group reveal">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[72px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative glass-premium rounded-[64px] p-16 md:p-32 text-center border-white/10 overflow-hidden">
            <h2 className="text-5xl md:text-[90px] font-[900] mb-12 text-white tracking-tighter leading-[0.9]">
              Pronto para ser <br />Líder do Mercado?
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium">
              Não perca mais tempo com planilhas lentas. Deixe nossa IA e automações cuidarem do operacional para você focar no crescimento.
            </p>
            
            <button 
              onClick={() => onNavigate('contact')}
              className="px-20 py-8 bg-white text-slate-950 rounded-[32px] font-black text-sm uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center space-x-4 mx-auto group"
            >
              <MousePointerClick className="w-6 h-6 group-hover:scale-125 transition-transform" />
              <span>Agendar Diagnóstico Grátis</span>
            </button>
            
            <div className="mt-16 flex items-center justify-center space-x-8 opacity-40">
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">Últimas vagas para Q2</span>
               <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-30px) rotate(2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
