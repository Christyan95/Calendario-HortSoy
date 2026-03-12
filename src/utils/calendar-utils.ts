import { CalendarEvent, EventType } from '../data/calendar-events';
import { 
  Calendar as CalendarIcon, 
  PartyPopper, 
  Users, 
  DollarSign, 
  Briefcase,
  Store 
} from 'lucide-react';

export const getEventColor = (type: EventType): string => {
  const colors = {
    feriado: 'bg-red-500',
    campanha: 'bg-blue-500',
    reuniao: 'bg-purple-500',
    pagamento: 'bg-green-500',
    administrativo: 'bg-orange-500',
  };
  return colors[type];
};

export const getEventTextColor = (type: EventType): string => {
  const colors = {
    feriado: 'text-red-600',
    campanha: 'text-blue-600',
    reuniao: 'text-purple-600',
    pagamento: 'text-green-600',
    administrativo: 'text-orange-600',
  };
  return colors[type];
};

export const getEventBgColor = (type: EventType): string => {
  const colors = {
    feriado: 'bg-red-50 border-red-200',
    campanha: 'bg-blue-50 border-blue-200',
    reuniao: 'bg-purple-50 border-purple-200',
    pagamento: 'bg-green-50 border-green-200',
    administrativo: 'bg-orange-50 border-orange-200',
  };
  return colors[type];
};

export const getEventIcon = (type: EventType) => {
  const icons = {
    feriado: Store,
    campanha: PartyPopper,
    reuniao: Users,
    pagamento: DollarSign,
    administrativo: Briefcase,
  };
  return icons[type];
};

export const getEventLabel = (type: EventType): string => {
  const labels = {
    feriado: 'Feriado',
    campanha: 'Campanha',
    reuniao: 'Reunião',
    pagamento: 'Pagamento',
    administrativo: 'Administrativo',
  };
  return labels[type];
};

export const getSpecialCampaignColors = (eventTitle: string) => {
  const title = eventTitle.toLowerCase();
  
  if (title.includes('setembro amarelo')) {
    return {
      bg: 'bg-yellow-50 border-yellow-300',
      text: 'text-yellow-700',
      iconBg: 'bg-yellow-100',
      isSpecial: true,
    };
  }
  
  if (title.includes('outubro rosa')) {
    return {
      bg: 'bg-pink-50 border-pink-300',
      text: 'text-pink-700',
      iconBg: 'bg-pink-100',
      isSpecial: true,
    };
  }
  
  return { isSpecial: false };
};

export const getEventsForDate = (events: CalendarEvent[], date: Date): CalendarEvent[] => {
  return events.filter(event => 
    event.date.getDate() === date.getDate() &&
    event.date.getMonth() === date.getMonth() &&
    event.date.getFullYear() === date.getFullYear()
  );
};

export const getEventsForMonth = (events: CalendarEvent[], month: number, year: number): CalendarEvent[] => {
  return events.filter(event => 
    event.date.getMonth() === month && event.date.getFullYear() === year
  );
};

export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month, 1).getDay();
};

export const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];