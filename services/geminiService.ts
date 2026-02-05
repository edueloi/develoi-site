
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getProjectRecommendation(userNeed: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `O usuário descreveu a seguinte necessidade tecnológica: "${userNeed}". 
    Com base no portfólio da Develoi:
    - PsiManager: Gestão de clínicas psicológicas, LGPD, IA Aurora.
    - Pilaflex: Gestão industrial NR10.
    - Develoi Salao: Agendamento para beleza e estética.
    - Sistemas Personalizados: Desenvolvimento sob medida.
    - Consultoria: Estratégia digital.

    Recomende a melhor solução da Develoi em tom profissional e amigável. Responda em JSON formatado.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendation: { type: Type.STRING, description: 'A solução recomendada' },
          reason: { type: Type.STRING, description: 'Por que esta solução é a ideal' },
          nextStep: { type: Type.STRING, description: 'O que o cliente deve fazer a seguir' }
        },
        required: ['recommendation', 'reason', 'nextStep']
      }
    }
  });

  // Fix: Extract text using the .text property and trim() before parsing
  const jsonStr = (response.text || '').trim();
  return JSON.parse(jsonStr || '{}');
}
