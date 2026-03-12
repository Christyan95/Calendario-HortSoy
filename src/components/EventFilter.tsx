import { EventType } from '../data/calendar-events';
import { getEventIcon, getEventLabel, getEventColor } from '../utils/calendar-utils';

interface EventFilterProps {
  selectedTypes: EventType[];
  onTypeToggle: (type: EventType) => void;
}

const eventTypes: EventType[] = ['feriado', 'campanha', 'reuniao', 'pagamento', 'administrativo'];

export function EventFilter({ selectedTypes, onTypeToggle }: EventFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {eventTypes.map((type) => {
        const Icon = getEventIcon(type);
        const isSelected = selectedTypes.includes(type);
        const color = getEventColor(type);

        return (
          <button
            key={type}
            onClick={() => onTypeToggle(type)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium 
              transition-all duration-200 border-2
              ${isSelected 
                ? `${color} text-white border-transparent shadow-md scale-105` 
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{getEventLabel(type)}</span>
          </button>
        );
      })}
    </div>
  );
}
