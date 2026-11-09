export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: 'residencial' | 'comercial' | 'especial';
  pests: string[];
  features: string[];
  guaranteeMonths: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'seguranca' | 'processo' | 'comercial' | 'garantia';
}

export interface NeighborhoodItem {
  name: string;
  zone: 'Sul' | 'Norte' | 'Leste' | 'Oeste' | 'Centro' | 'RMC';
  highlight?: boolean;
}

export interface PitchChecklistItem {
  id: string;
  question: string;
  status: 'pendente' | 'confirmado';
  note: string;
  commercialImpact: string;
}
