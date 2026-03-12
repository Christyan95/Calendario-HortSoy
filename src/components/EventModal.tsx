import { CalendarEvent } from '../data/calendar-events';
import { getEventIcon, getEventBgColor, getEventTextColor, getSpecialCampaignColors } from '../utils/calendar-utils';
import { getIconComponent } from '../utils/icon-mapper';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { X } from 'lucide-react';

interface EventModalProps {
  date: Date;
  events: CalendarEvent[];
  onClose: () => void;
}

export function EventModal({ date, events, onClose }: EventModalProps) {
  if (events.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {format(date, "dd 'de' MMMM", { locale: ptBR })}
              </h2>
              <p className="text-sm text-gray-600">
                {events.length} {events.length === 1 ? 'evento' : 'eventos'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {events.map((event) => {
            const Icon = getIconComponent(event.icon);
            const specialColors = getSpecialCampaignColors(event.title);
            const bgColor = specialColors.isSpecial ? specialColors.bg : getEventBgColor(event.type);
            const textColor = specialColors.isSpecial ? specialColors.text : getEventTextColor(event.type);
            const iconBg = specialColors.isSpecial ? specialColors.iconBg : textColor.replace('text', 'bg').replace('600', '100');

            return (
              <div
                key={event.id}
                className={`${bgColor} p-4 rounded-lg border-2`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${iconBg}`}>
                    <Icon className={`w-5 h-5 ${textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    {event.description && (
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}