
import React from 'react';
import { Project, Service } from './types';
import { 
  Code, 
  BarChart3, 
  Lock
} from 'lucide-react';

export const DEVELOI_PROJECTS: Project[] = [
  {
    id: 'nr-pro',
    title: 'Develoi NR1 Pro',
    description: 'Gestão de conformidade focada em Saúde Ocupacional e Psicologia do Trabalho (NR1). Digitalize o PGR e gerencie riscos psicossociais.',
    category: 'Indústria',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    link: 'https://develoi.com/',
    features: [
      'Avaliação de Riscos Psicossociais (NR1)',
      'Gestão de Treinamentos EAD Integrada',
      'Assinatura Digital ICP-Brasil',
      'Dashboards de Saúde Ocupacional'
    ],
    tags: ['NR1', 'Compliance', 'Saúde Mental'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    metrics: [
      { label: 'Conformidade', value: '100%', sub: 'Audit Ready' },
      { label: 'Processamento', value: '<150ms', sub: 'Latência Real' },
      { label: 'Cloud Uptime', value: '99.9%', sub: 'AWS Managed' }
    ],
    fullCase: 'O NR1 Pro é a solução definitiva para empresas que precisam gerenciar o inventário de riscos e a saúde mental dos colaboradores, unindo psicologia organizacional com conformidade técnica rigorosa.'
  },
  {
    id: 'psimanager',
    title: 'PsiManager Pro',
    description: 'Ecossistema completo para clínicas de psicologia. Prontuário eletrônico com IA e segurança nível bancário.',
    category: 'Saúde',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
    link: 'https://psi.develoi.com/',
    features: [
      'Prontuário Criptografado (AES-256)',
      'Assistente IA para Anamnese',
      'Faturamento TISS/TUSS Automático',
      'Teleconsulta HD Privada'
    ],
    tags: ['Psicologia', 'Privacidade', 'IA'],
    techStack: ['Next.js', 'Python', 'OpenAI API', 'MongoDB'],
    metrics: [
      { label: 'Segurança', value: 'AES-256', sub: 'End-to-End' },
      { label: 'Economia', value: '15h/mês', sub: 'Admin' },
      { label: 'Retenção', value: '88%', sub: 'Pacientes' }
    ],
    fullCase: 'O PsiManager revolucionou clínicas de psicologia ao automatizar a burocracia do faturamento e oferecer uma IA que auxilia terapeutas na organização de insights clínicos.'
  },
  {
    id: 'salao-develoi',
    title: 'Develoi Salão',
    description: 'Gestão de alta performance para salões e clínicas de estética. Agendamento inteligente e controle financeiro total.',
    category: 'Beleza',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    link: 'https://salao.develoi.com/',
    features: [
      'Agendamento Online via WhatsApp',
      'Comissionamento Automático de Profissionais',
      'Controle de Estoque e Insumos',
      'Marketing de Fidelização Integrado'
    ],
    tags: ['Estética', 'Agendamento', 'ERP'],
    techStack: ['Flutter', 'Firebase', 'Stripe', 'Node.js'],
    metrics: [
      { label: 'Crescimento', value: '+35%', sub: 'No Faturamento' },
      { label: 'No-Show', value: '-60%', sub: 'Lembretes IA' },
      { label: 'Setup', value: '48h', sub: 'Migração Rápida' }
    ],
    fullCase: 'Desenvolvido para grandes redes de estética, o Develoi Salão centraliza a gestão de múltiplas unidades em uma única interface intuitiva e potente.'
  },
  {
    id: 'pilaflex',
    title: 'Pilaflex Studio',
    description: 'A inteligência por trás dos maiores estúdios de Pilates. Gestão de alunos e avaliação física digital.',
    category: 'Saúde',
    imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1200',
    link: 'https://pilaflex.develoi.com/',
    features: [
      'Avaliação Postural por Visão Computacional',
      'Pagamento Recorrente (Credit Card)',
      'Controle de Acessos via QR Code',
      'App do Aluno com Treinos em Vídeo'
    ],
    tags: ['Pilates', 'Recorrência', 'HealthTech'],
    techStack: ['React Native', 'Firebase', 'Node.js', 'Redis'],
    metrics: [
      { label: 'Retenção', value: '94%', sub: 'LTV Elevado' },
      { label: 'Automação', value: '85%', sub: 'Financeiro' },
      { label: 'Acessos', value: '10k+', sub: 'Alunos Ativos' }
    ],
    fullCase: 'Um ecossistema completo que integra aplicativo móvel para alunos e dashboard administrativo para proprietários.'
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
