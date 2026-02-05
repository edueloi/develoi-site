
// Fix: Added missing React import to resolve "Cannot find namespace 'React'" error.
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Saúde' | 'Indústria' | 'Beleza' | 'Serviços' | 'Mobile';
  imageUrl: string;
  link: string;
  features: string[];
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}