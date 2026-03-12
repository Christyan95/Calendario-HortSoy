import { CalendarEvent } from '../data/calendar-events';
import { getEventIcon, getEventBgColor, getEventTextColor, getSpecialCampaignColors } from '../utils/calendar-utils';
import { getIconComponent } from '../utils/icon-mapper';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface EventListProps {
  events: CalendarEvent[];
  title?: string;
}

export function EventList({ events, title }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Nenhum evento encontrado</p>
      </div>
    );
  }

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      )}
      <div className="grid gap-3">
        {sortedEvents.map((event) => {
          const Icon = getIconComponent(event.icon);
          const specialColors = getSpecialCampaignColors(event.title);
          const bgColor = specialColors.isSpecial ? specialColors.bg : getEventBgColor(event.type);
          const textColor = specialColors.isSpecial ? specialColors.text : getEventTextColor(event.type);
          const iconBg = specialColors.isSpecial ? specialColors.iconBg : textColor.replace('text', 'bg').replace('600', '100');

          return (
            <div
              key={event.id}
              className={`${bgColor} p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md hover:scale-[1.02]`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${iconBg}`}>
                  <Icon className={`w-5 h-5 ${textColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                      {format(event.date, "dd 'de' MMMM", { locale: ptBR })}
                    </span>
                  </div>
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
  );
}