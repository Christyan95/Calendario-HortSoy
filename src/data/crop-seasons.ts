export interface CropSeason {
  id: string;
  name: string;
  color: string;
  lightColor: string;
  plantingMonths: number[]; // 0-11 (Janeiro = 0)
  harvestMonths: number[];
  icon: string; // emoji
  description: string;
}

export const crops: CropSeason[] = [
  {
    id: 'soja',
    name: 'Soja',
    color: '#16a34a',
    lightColor: '#dcfce7',
    plantingMonths: [9, 10, 11], // Out, Nov, Dez
    harvestMonths: [0, 1, 2, 3], // Jan, Fev, Mar, Abr
    icon: '🌱',
    description: 'Safra principal',
  },
  {
    id: 'milho',
    name: 'Milho',
    color: '#eab308',
    lightColor: '#fef9c3',
    plantingMonths: [8, 9, 10], // Set, Out, Nov (safra)
    harvestMonths: [0, 1, 2], // Jan, Fev, Mar
    icon: '🌽',
    description: 'Safra e safrinha',
  },
  {
    id: 'milho-safrinha',
    name: 'Milho Safrinha',
    color: '#ca8a04',
    lightColor: '#fef3c7',
    plantingMonths: [1, 2], // Fev, Mar
    harvestMonths: [6, 7], // Jul, Ago
    icon: '🌽',
    description: 'Segunda safra',
  },
  {
    id: 'cafe',
    name: 'Café',
    color: '#92400e',
    lightColor: '#fef3c7',
    plantingMonths: [2, 3, 4], // Mar, Abr, Mai
    harvestMonths: [4, 5, 6, 7, 8], // Mai, Jun, Jul, Ago, Set
    icon: '☕',
    description: 'Safra de março a setembro',
  },
  {
    id: 'sorgo',
    name: 'Sorgo',
    color: '#dc2626',
    lightColor: '#fee2e2',
    plantingMonths: [2], // Mar
    harvestMonths: [6, 7], // Jul, Ago
    icon: '🌾',
    description: 'Cultura de rotação',
  },
  {
    id: 'batata',
    name: 'Batata',
    color: '#a16207',
    lightColor: '#fef3c7',
    plantingMonths: [7, 8, 9], // Ago, Set, Out
    harvestMonths: [10, 11, 0], // Nov, Dez, Jan
    icon: '🥔',
    description: 'Três safras anuais',
  },
  {
    id: 'cenoura',
    name: 'Cenoura',
    color: '#ea580c',
    lightColor: '#ffedd5',
    plantingMonths: [3, 4, 5, 6, 7], // Abr, Mai, Jun, Jul, Ago
    harvestMonths: [6, 7, 8, 9, 10], // Jul, Ago, Set, Out, Nov
    icon: '🥕',
    description: 'Plantio de outono',
  },
  {
    id: 'alho',
    name: 'Alho',
    color: '#6366f1',
    lightColor: '#e0e7ff',
    plantingMonths: [2, 3, 4], // Mar, Abr, Mai
    harvestMonths: [9, 10, 11], // Out, Nov, Dez
    icon: '🧄',
    description: 'Ciclo longo',
  },
  {
    id: 'citros',
    name: 'Citros',
    color: '#f97316',
    lightColor: '#ffedd5',
    plantingMonths: [9, 10, 11], // Out, Nov, Dez
    harvestMonths: [4, 5, 6, 7], // Mai, Jun, Jul, Ago
    icon: '🍊',
    description: 'Laranja, limão, tangerina',
  },
];

export const getCropsForMonth = (month: number, type: 'planting' | 'harvest'): CropSeason[] => {
  return crops.filter(crop => 
    type === 'planting' 
      ? crop.plantingMonths.includes(month)
      : crop.harvestMonths.includes(month)
  );
};

export const getActiveCropsForMonth = (month: number): CropSeason[] => {
  return crops.filter(crop => 
    crop.plantingMonths.includes(month) || crop.harvestMonths.includes(month)
  );
};

export const getReceivableCropsForMonth = (month: number): CropSeason[] => {
  // Retorna as culturas cujo último mês de colheita foi no mês anterior
  return crops.filter(crop => {
    if (crop.harvestMonths.length === 0) return false;
    
    // Pega o último mês de colheita
    const lastHarvestMonth = Math.max(...crop.harvestMonths);
    
    // Calcula o mês de recebimento (mês seguinte ao último mês de colheita)
    const receivableMonth = (lastHarvestMonth + 1) % 12;
    
    return receivableMonth === month;
  });
};

export const isReceivableMonth = (month: number): boolean => {
  return getReceivableCropsForMonth(month).length > 0;
};

export const seasonInfo = [
  {
    name: 'Safra Principal',
    months: 'Outubro a Março',
    description: 'Período de plantio e colheita das principais culturas (Soja, Milho)',
  },
  {
    name: 'Safrinha',
    months: 'Janeiro a Março',
    description: 'Segunda safra, principalmente milho após soja',
  },
  {
    name: 'Café',
    months: 'Março a Setembro',
    description: 'Período de colheita do café',
  },
];