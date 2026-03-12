import { getCropsForMonth, getReceivableCropsForMonth } from '../data/crop-seasons';
import { Sprout, Wheat, DollarSign } from 'lucide-react';

interface CropSeasonPanelProps {
  month: number;
}

export function CropSeasonPanel({ month }: CropSeasonPanelProps) {
  const plantingCrops = getCropsForMonth(month, 'planting');
  const harvestCrops = getCropsForMonth(month, 'harvest');
  const receivableCrops = getReceivableCropsForMonth(month);

  if (plantingCrops.length === 0 && harvestCrops.length === 0 && receivableCrops.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Sprout className="w-6 h-6" />
        Atividades Agrícolas do Mês
      </h3>

      {plantingCrops.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Sprout className="w-5 h-5" />
            <h4 className="font-semibold text-lg">Plantio</h4>
          </div>
          <div className="grid gap-2">
            {plantingCrops.map((crop) => (
              <div
                key={`planting-${crop.id}`}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{crop.icon}</span>
                  <div>
                    <div className="font-semibold">{crop.name}</div>
                    <div className="text-xs text-white/80">{crop.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {harvestCrops.length > 0 && (
        <div className={receivableCrops.length > 0 ? 'mb-4' : ''}>
          <div className="flex items-center gap-2 mb-3">
            <Wheat className="w-5 h-5" />
            <h4 className="font-semibold text-lg">Colheita</h4>
          </div>
          <div className="grid gap-2">
            {harvestCrops.map((crop) => (
              <div
                key={`harvest-${crop.id}`}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{crop.icon}</span>
                  <div>
                    <div className="font-semibold">{crop.name}</div>
                    <div className="text-xs text-white/80">{crop.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {receivableCrops.length > 0 && (
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-4 border-2 border-emerald-300">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5" />
            <h4 className="font-semibold text-lg">🎯 Foco em Recebimentos</h4>
          </div>
          <div className="grid gap-2">
            {receivableCrops.map((crop) => (
              <div
                key={`receivable-${crop.id}`}
                className="bg-white/30 backdrop-blur-sm rounded-lg p-3 border border-white/40"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{crop.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold">{crop.name}</div>
                    <div className="text-xs text-white/90">Mês de recebimento pós-colheita</div>
                  </div>
                  <DollarSign className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}