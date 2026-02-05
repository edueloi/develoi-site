
import React from 'react';
import { Project, Service } from './types';
import { 
  Code, 
  Users, 
  Smartphone,
  Heart,
  Store,
  Calendar,
  ShieldCheck,
  MessageCircle,
  Cpu,
  Globe,
  Lock,
  Zap
} from 'lucide-react';

export const COMPANY_STATS = [
  { label: 'Projetos Ativos', value: '142', sub: 'Em 12 países' },
  { label: 'Linhas de Código', value: '2.4M', sub: 'Sustentando negócios' },
  { label: 'Uptime de Sistemas', value: '99.9%', sub: 'SLA Garantido' },
  { label: 'Satisfação', value: '5/5', sub: 'Feedback real' }
];

export const TECHNICAL_CAPABILITIES = [
  { title: 'Frontend Architecture', tools: 'React, Next.js, Framer, Tailwind', icon: <Globe className="w-5 h-5" /> },
  { title: 'Backend Systems', tools: 'Node.js, Go, Python, PostgreSQL', icon: <Cpu className="w-5 h-5" /> },
  { title: 'Cloud Infrastructure', tools: 'AWS, GCP, Azure, Docker, K8s', icon: <Zap className="w-5 h-5" /> },
  { title: 'Security & Privacy', tools: 'OAuth2, AES-256, LGPD Compliance', icon: <Lock className="w-5 h-5" /> }
];

export const DEVELOI_PROJECTS: Project[] = [
  {
    id: 'nr-pro',
    title: 'Develoi Saúde Digital',
    description: 'Transformamos a burocracia das leis de saúde em um sistema simples que qualquer funcionário consegue usar no celular.',
    category: 'Indústria',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    features: [
      'Documentos em PDF automáticos',
      'Treinamentos por vídeo curtos',
      'Aviso de vencimento de exames',
      'Suporte via WhatsApp'
    ],
    tags: ['Simplicidade', 'Saúde', 'Trabalho'],
    techStack: ['Web', 'Mobile'],
    metrics: [
      { label: 'Uso Diário', value: 'Alta', sub: 'Fácil de usar' },
      { label: 'Economia', value: '40%', sub: 'Menos papel' },
      { label: 'Configuração', value: '1 dia', sub: 'Muito rápido' }
    ],
    fullCase: 'Um sistema focado em empresas que não querem perder tempo com computadores complicados.'
  },
  {
    id: 'psimanager',
    title: 'Meu Consultório Digital',
    description: 'Um cantinho seguro para psicólogos e terapeutas organizarem seus horários e prontuários com total privacidade.',
    category: 'Saúde',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    features: [
      'Agenda inteligente',
      'Prontuário com senha',
      'Lembrete automático para o paciente',
      'Controle de pagamentos fácil'
    ],
    tags: ['Cuidado', 'Saúde', 'Segurança'],
    techStack: ['Web App'],
    metrics: [
      { label: 'Paz', value: 'Total', sub: 'Sem esquecimentos' },
      { label: 'Fidelidade', value: '+30%', sub: 'Pelos lembretes' },
      { label: 'Segurança', value: 'LGPD', sub: 'Dados protegidos' }
    ],
    fullCase: 'Feito para quem cuida de pessoas. O sistema é leve, bonito e não exige curso para aprender.'
  },
  {
    id: 'salao-develoi',
    title: 'Gestão para Estética & Beleza',
    description: 'Ajude seu salão ou barbearia a crescer. Seus clientes agendam sozinhos e você foca no seu talento.',
    category: 'Beleza',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    features: [
      'Link de agendamento próprio',
      'Controle de estoque de produtos',
      'Cálculo de comissão automático',
      'Galeria de fotos do trabalho'
    ],
    tags: ['Beleza', 'Crescimento', 'Prático'],
    techStack: ['Celular'],
    metrics: [
      { label: 'Tempo', value: 'Livre', sub: 'Sem atender telefone' },
      { label: 'Vendas', value: '+25%', sub: 'Mais organização' },
      { label: 'Investimento', value: 'Baixo', sub: 'Acessível' }
    ],
    fullCase: 'Tudo o que uma dona de salão precisa para profissionalizar seu negócio hoje mesmo.'
  },
  {
    id: 'e-com-simples',
    title: 'Loja no WhatsApp',
    description: 'Venda seus produtos direto pelo WhatsApp com um catálogo organizado e pagamentos fáceis.',
    category: 'Serviços',
    imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    features: [
      'Catálogo com fotos',
      'Carrinho de compras',
      'Integração com PIX',
      'Gestão de pedidos'
    ],
    tags: ['Vendas', 'WhatsApp', 'Pequeno Negócio'],
    techStack: ['Mobile-First'],
    metrics: [
      { label: 'Conversão', value: 'Alta', sub: 'Vende sozinho' },
      { label: 'Praticidade', value: '100%', sub: 'Tudo no Whats' },
      { label: 'Preço', value: 'Justo', sub: 'Mensalidade amiga' }
    ],
    fullCase: 'Ideal para quem está começando e quer vender online sem pagar taxas absurdas de marketplaces.'
  }
];
