
import React from 'react';

export interface ProjectMetric {
  label: string;
  value: string;
  sub: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Saúde' | 'Indústria' | 'Beleza' | 'Serviços' | 'Mobile' | 'Fintech';
  imageUrl: string;
  link: string;
  features: string[];
  tags: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  fullCase: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
