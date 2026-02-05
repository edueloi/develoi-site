
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
  MessageCircle
} from 'lucide-react';

export const COMPANY_STATS = [
  { label: 'Projetos com Sucesso', value: '124', sub: 'Histórias reais' },
  { label: 'Satisfeitos', value: '98%', sub: 'Nossa maior nota' },
  { label: 'Suporte Humano', value: 'Sim', sub: 'Gente falando com gente' },
  { label: 'Custo Justo', value: 'R$', sub: 'Cabe no seu planejamento' }
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

export const DEVELOI_SERVICES: Service[] = [
  {
    title: 'Seu Site Profissional',
    description: 'Sites que carregam rápido e funcionam em qualquer celular. Sua vitrine digital para o mundo.',
    icon: <Store className="w-8 h-8" />
  },
  {
    title: 'Sistemas que Ajudam',
    description: 'Criamos ferramentas para organizar seu estoque, agenda ou financeiro. Chega de planilhas difíceis!',
    icon: <Calendar className="w-8 h-8" />
  },
  {
    title: 'Automação Simples',
    description: 'Robôs que respondem seu WhatsApp ou enviam e-mails. Você ganha tempo para o que importa.',
    icon: <MessageCircle className="w-8 h-8" />
  },
  {
    title: 'Segurança & Nuvem',
    description: 'Seus dados guardados com as melhores travas do mundo. Tranquilidade para você e seus clientes.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];
