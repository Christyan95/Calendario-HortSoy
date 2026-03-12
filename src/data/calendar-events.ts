export type EventType = 
  | 'feriado' 
  | 'campanha' 
  | 'reuniao' 
  | 'pagamento' 
  | 'administrativo';

export interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  description?: string;
  type: EventType;
  status?: string;
  icon?: string; // Nome do ícone do lucide-react
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: '1',
    date: new Date(2026, 0, 1),
    title: 'Ano Novo',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Sparkles',
  },
  {
    id: '3',
    date: new Date(2026, 1, 17),
    title: 'Carnaval',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Music',
  },
  {
    id: '4',
    date: new Date(2026, 1, 25),
    title: 'Dia do Agronegócio',
    description: 'Campanha',
    type: 'campanha',
    icon: 'Tractor',
  },
  {
    id: '5',
    date: new Date(2026, 2, 8),
    title: 'Dia Internacional da Mulher',
    description: 'Campanha',
    type: 'campanha',
    icon: 'Flower2',
  },
  {
    id: '6',
    date: new Date(2026, 3, 3),
    title: 'Sexta-feira da Paixão',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Cross',
  },
  {
    id: '7',
    date: new Date(2026, 3, 21),
    title: 'Tiradentes',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Flag',
  },
  {
    id: '8',
    date: new Date(2026, 4, 1),
    title: 'Dia do Trabalho',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Wrench',
  },
  {
    id: '9',
    date: new Date(2026, 4, 10),
    title: 'Dia das Mães',
    description: 'Campanha',
    type: 'campanha',
    icon: 'Heart',
  },
  {
    id: '10',
    date: new Date(2026, 5, 4),
    title: 'Corpus Christi',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Church',
  },
  {
    id: '11',
    date: new Date(2026, 7, 9),
    title: 'Dia dos Pais',
    description: 'Campanha',
    type: 'campanha',
    icon: 'Award',
  },
  {
    id: '12',
    date: new Date(2026, 8, 7),
    title: 'Independência do Brasil',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Flag',
  },
  {
    id: '13',
    date: new Date(2026, 8, 4),
    title: 'Setembro Amarelo',
    description: 'Campanha - 04/09',
    type: 'campanha',
    icon: 'Sun',
  },
  {
    id: '14',
    date: new Date(2026, 9, 12),
    title: 'Nossa Senhora Aparecida',
    description: 'Dia das Crianças - Lojas Fechadas',
    type: 'feriado',
    icon: 'Baby',
  },
  {
    id: '15',
    date: new Date(2026, 9, 9),
    title: 'Outubro Rosa',
    description: 'Campanha - 09/10',
    type: 'campanha',
    icon: 'Ribbon',
  },
  {
    id: '16',
    date: new Date(2026, 10, 2),
    title: 'Finados',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Flower',
  },
  {
    id: '17',
    date: new Date(2026, 10, 15),
    title: 'Proclamação da República',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Landmark',
  },
  {
    id: '18',
    date: new Date(2026, 10, 13),
    title: 'Novembro Azul',
    description: 'Campanha - Azul 13/11',
    type: 'campanha',
    icon: 'Shield',
  },
  {
    id: '19',
    date: new Date(2026, 10, 20),
    title: 'Consciência Negra',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Users',
  },
  {
    id: '20',
    date: new Date(2026, 11, 24),
    title: 'Véspera de Natal',
    description: 'Saída às 13h',
    type: 'administrativo',
    icon: 'Clock',
  },
  {
    id: '21',
    date: new Date(2026, 11, 25),
    title: 'Natal',
    description: 'Lojas Fechadas',
    type: 'feriado',
    icon: 'Gift',
  },
  {
    id: '22',
    date: new Date(2026, 11, 23),
    title: 'Campanha de Natal',
    description: 'Campanha - 23/12',
    type: 'campanha',
    icon: 'TreePine',
  },
  {
    id: '23',
    date: new Date(2026, 11, 31),
    title: 'Véspera de Ano novo',
    description: 'Saída às 13h',
    type: 'administrativo',
    icon: 'Clock',
  },
];

export const additionalInfo = [
  {
    title: 'Apuração de Comissão',
    description: 'Janeiro 2026',
  },
  {
    title: 'Reuniões de Liderança Administrativa',
    description: 'IEE Lidera (mensal)',
  },
  {
    title: 'Aniversariante do mês',
    description: 'Última Sexta do mês, a menos que tenha apenas 1 pessoa no mês fazendo aniversário',
  },
  {
    title: 'Pagamento 13º',
    description: '27 de novembro e 18 de dezembro',
  },
  {
    title: 'Recarga do VA',
    description: 'Quinto dia útil do mês',
  },
];