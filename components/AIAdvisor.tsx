
import React, { useState } from 'react';
import { Sparkles, Send, Bot, Loader2 } from 'lucide-react';
import { getProjectRecommendation } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ recommendation: string; reason: string; nextStep: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const recommendation = await getProjectRecommendation(input);
      setResult(recommendation);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-20 bg-slate-900/40 rounded-[40px] border border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full text-blue-400 mb-6 border border-blue-500/10">
            <Sparkles className="w-4 h-4" />
            <span className="text-[9px] font-black uppercase tracking-widest">IA Advisor Develoi</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tighter">Qual sua necessidade?</h2>
          <p className="text-slate-500 text-sm font-medium">Nossa IA indicará a solução ideal do nosso arsenal para o seu desafio.</p>
        </div>

        <div className="bg-slate-950/50 rounded-3xl p-4 md:p-8 border border-white/5">
          <form onSubmit={handleSubmit} className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Preciso de um sistema para gerenciar uma clínica de pilates..."
              className="w-full bg-slate-900/50 border border-white/5 rounded-2xl p-6 pr-16 text-white text-sm placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 min-h-[120px] resize-none transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute bottom-4 right-4 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 md:p-10 bg-blue-600/10 rounded-3xl border border-blue-600/20 animate-in fade-in zoom-in duration-500">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-3 bg-blue-600 rounded-xl shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">{result.recommendation}</h4>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base font-medium">{result.reason}</p>
                  <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-lg border border-green-500/20 text-[10px] font-black uppercase tracking-widest inline-block">
                    {result.nextStep}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
