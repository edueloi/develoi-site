
import React from 'react';
import { Project, Service } from './types';
import { 
  Code, 
  Lightbulb, 
  ShieldCheck, 
  Activity, 
  Zap,
  CheckCircle2,
  Lock,
  BarChart3
} from 'lucide-react';

export const DEVELOI_PROJECTS: Project[] = [
  {
    id: 'nr-pro',
    title: 'Develoi NR Pro (1/10/12)',
    description: 'Gestão de conformidade normativa industrial. Elimine o risco de multas e garanta 100% de segurança jurídica.',
    category: 'Indústria',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
    link: 'https://develoi.com/',
    features: [
      'Inventário de Riscos Digital (PGR/GRO)',
      'Assinatura digital padrão ICP-Brasil',
      'Dashboards de Auditoria em tempo real',
      'Controle de EPIs por Biometria'
    ],
    tags: ['Segurança', 'Engenharia', 'Audit Ready']
  },
  {
    id: 'pilaflex',
    title: 'Pilaflex Studio',
    description: 'Acelerador de lucros para estúdios de Pilates. O único com bio-feedback e evolução física comparativa.',
    category: 'Saúde',
    imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1000',
    link: 'https://pilaflex.develoi.com/',
    features: [
      'Prescrição de exercícios via App do Aluno',
      'Análise de Retenção e Churn Rate',
      'Pagamentos Recorrentes Integrados',
      'Fotos Comparativas de Evolução'
    ],
    tags: ['Pilates', 'Recorrência', 'HealthTech']
  },
  {
    id: 'psimanager',
    title: 'PsiManager Pro',
    description: 'Ecossistema completo para clínicas de psicologia. Segurança total e Assistente de Prontuário com IA.',
    category: 'Saúde',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000',
    link: 'https://psi.develoi.com/',
    features: [
      'Prontuário Criptografado (Nível Bancário)',
      'Telemedicina com sala própria segura',
      'Integração com Agenda do Google',
      'Dashboards de fluxo de caixa'
    ],
    tags: ['Psicologia', 'Privacidade', 'IA']
  },
  {
    id: 'agenda-estetica',
    title: 'Develoi Agenda',
    description: 'Gestão 360º para salões e clínicas de estética. Reduza o "No-show" em até 92% com confirmação automática.',
    category: 'Beleza',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000',
    link: 'https://salao.develoi.com/login',
    features: [
      'Auto-agendamento via Link Direto',
      'Gestão de estoque automatizada',
      'Comissionamento dinâmico',
      'Fidelidade com Cashback'
    ],
    tags: ['Beleza', 'Vendas', 'Customer Experience']
  }
];

export const DEVELOI_SERVICES: Service[] = [
  {
    title: 'Desenvolvimento Sob Medida',
    description: 'Sistemas que se moldam ao seu negócio, não o contrário. Escalabilidade garantida.',
    icon: <Code className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Consultoria Estratégica',
    description: 'Diagnóstico tecnológico para redução de custos e otimização de infraestrutura.',
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />
  },
  {
    title: 'Segurança & LGPD',
    description: 'Blindagem de dados sensíveis e adequação total às normas brasileiras.',
    icon: <Lock className="w-8 h-8 text-emerald-600" />
  }
];
