import { crops, seasonInfo, getReceivableCropsForMonth } from '../data/crop-seasons';
import { monthNames } from '../utils/calendar-utils';
import { DollarSign } from 'lucide-react';

export function CropTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Calendário Agrícola - Safras e Culturas
      </h2>

      {/* Season Info */}
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        {seasonInfo.map((season, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border-2 border-green-200"
          >
            <h4 className="font-bold text-green-800 text-sm mb-1">{season.name}</h4>
            <p className="text-xs text-green-700 font-semibold mb-1">{season.months}</p>
            <p className="text-xs text-green-600">{season.description}</p>
          </div>
        ))}
      </div>

      {/* Crop Timeline */}
      <div>
        <div className="w-full">
          {/* Month Headers */}
          <div className="grid grid-cols-12 gap-1 mb-1">
            {monthNames.map((month, index) => (
              <div
                key={index}
                className="text-center text-xs font-semibold text-gray-600 p-1"
              >
                {month.substring(0, 3)}
              </div>
            ))}
          </div>

          {/* Crop Rows */}
          <div className="space-y-1.5">
            {crops.map((crop) => (
              <div key={crop.id} className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-28 flex items-center gap-2">
                    <span className="text-lg">{crop.icon}</span>
                    <span className="text-xs font-semibold text-gray-700">
                      {crop.name}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }, (_, monthIndex) => {
                    const isPlanting = crop.plantingMonths.includes(monthIndex);
                    const isHarvest = crop.harvestMonths.includes(monthIndex);
                    
                    // Verifica se é mês de recebimento (mês seguinte ao último mês de colheita)
                    const lastHarvestMonth = crop.harvestMonths.length > 0 ? Math.max(...crop.harvestMonths) : -1;
                    const receivableMonth = lastHarvestMonth >= 0 ? (lastHarvestMonth + 1) % 12 : -1;
                    const isReceivable = monthIndex === receivableMonth;

                    return (
                      <div
                        key={monthIndex}
                        className={`h-8 rounded border transition-all duration-200 relative ${
                          isPlanting
                            ? 'border-2 border-green-600'
                            : isHarvest
                            ? 'border-2'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                        style={{
                          backgroundColor: isPlanting
                            ? crop.lightColor
                            : isHarvest
                            ? crop.color
                            : undefined,
                          borderColor: isHarvest ? crop.color : undefined,
                        }}
                        title={
                          isPlanting
                            ? `${crop.name} - Plantio`
                            : isHarvest
                            ? `${crop.name} - Colheita`
                            : isReceivable
                            ? `${crop.name} - Mês de Recebimento`
                            : ''
                        }
                      >
                        {isPlanting && (
                          <div className="h-full flex items-center justify-center">
                            <span className="text-xs font-bold" style={{ color: crop.color }}>
                              P
                            </span>
                          </div>
                        )}
                        {isHarvest && (
                          <div className="h-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">C</span>
                          </div>
                        )}
                        {isReceivable && (
                          <div className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5 shadow-lg" title={`${crop.name} - Foco em Recebimentos`}>
                            <DollarSign className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border-2 border-green-600 bg-green-50"></div>
              <span className="text-xs text-gray-600">
                <span className="font-semibold">P</span> - Plantio
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-green-600"></div>
              <span className="text-xs text-gray-600">
                <span className="font-semibold">C</span> - Colheita
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gray-50 border border-gray-200 flex items-center justify-center relative">
                <div className="absolute -top-1 -right-1 bg-emerald-500 rounded-full p-0.5">
                  <DollarSign className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
              </div>
              <span className="text-xs text-gray-600">
                <DollarSign className="w-3 h-3 inline text-emerald-600" strokeWidth={3} /> - Foco em Recebimentos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}