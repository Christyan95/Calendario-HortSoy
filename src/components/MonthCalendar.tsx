import { CalendarEvent, EventType } from '../data/calendar-events';
import { 
  getEventsForDate, 
  getDaysInMonth, 
  getFirstDayOfMonth, 
  weekDays,
  getEventColor,
  getEventTextColor,
  getSpecialCampaignColors
} from '../utils/calendar-utils';
import { getIconComponent } from '../utils/icon-mapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthCalendarProps {
  month: number;
  year: number;
  events: CalendarEvent[];
  selectedTypes: EventType[];
  onMonthChange: (month: number, year: number) => void;
  onDateClick: (date: Date) => void;
}

export function MonthCalendar({ 
  month, 
  year, 
  events, 
  selectedTypes,
  onMonthChange,
  onDateClick 
}: MonthCalendarProps) {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const handlePrevMonth = () => {
    if (month === 0) {
      onMonthChange(11, year - 1);
    } else {
      onMonthChange(month - 1, year);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      onMonthChange(0, year + 1);
    } else {
      onMonthChange(month + 1, year);
    }
  };

  const handleToday = () => {
    const today = new Date();
    onMonthChange(today.getMonth(), today.getFullYear());
  };

  const days = [];
  const totalSlots = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  for (let i = 0; i < totalSlots; i++) {
    const dayNumber = i - firstDay + 1;
    if (i < firstDay || dayNumber > daysInMonth) {
      days.push(null);
    } else {
      days.push(dayNumber);
    }
  }

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           month === today.getMonth() && 
           year === today.getFullYear();
  };

  const getDateBackgroundClass = (dayEvents: CalendarEvent[]) => {
    if (dayEvents.length === 0) return '';
    
    // Verifica se tem campanha especial (Setembro Amarelo ou Outubro Rosa)
    const specialCampaign = dayEvents.find(event => {
      const colors = getSpecialCampaignColors(event.title);
      return colors.isSpecial;
    });
    
    if (specialCampaign) {
      const colors = getSpecialCampaignColors(specialCampaign.title);
      return colors.bg;
    }
    
    // Prioridade: se tem feriado, usa fundo laranja
    const hasFeriado = dayEvents.some(event => event.type === 'feriado');
    if (hasFeriado) return 'bg-orange-100';
    
    // Se não tem feriado mas tem outros eventos (HortSoy), usa fundo azul
    return 'bg-blue-100';
  };

  const getDateTextClass = (dayEvents: CalendarEvent[]) => {
    if (dayEvents.length === 0) return 'text-gray-900';
    
    // Verifica se tem campanha especial (Setembro Amarelo ou Outubro Rosa)
    const specialCampaign = dayEvents.find(event => {
      const colors = getSpecialCampaignColors(event.title);
      return colors.isSpecial;
    });
    
    if (specialCampaign) {
      const colors = getSpecialCampaignColors(specialCampaign.title);
      return `${colors.text} font-bold`;
    }
    
    // Prioridade: se tem feriado, texto vermelho escuro
    const hasFeriado = dayEvents.some(event => event.type === 'feriado');
    if (hasFeriado) return 'text-red-700 font-bold';
    
    // Se não tem feriado mas tem outros eventos (HortSoy), texto azul escuro
    return 'text-blue-700 font-bold';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <button
          onClick={handleToday}
          className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Hoje
        </button>

        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="aspect-square" />;
          }

          const date = new Date(year, month, day);
          const dayEvents = getEventsForDate(events, date).filter(
            event => selectedTypes.includes(event.type)
          );
          const today = isToday(day);
          const dateBackgroundClass = getDateBackgroundClass(dayEvents);
          const dateTextClass = getDateTextClass(dayEvents);

          return (
            <button
              key={index}
              onClick={() => onDateClick(date)}
              className={`
                aspect-square p-2 rounded-lg border-2 transition-all duration-200
                hover:shadow-md hover:scale-105 relative flex flex-col
                ${today 
                  ? 'border-green-500 bg-green-50 font-bold' 
                  : 'border-gray-200 hover:border-gray-300'
                }
                ${!today ? dateBackgroundClass : ''}
              `}
            >
              <div className={`text-sm mb-1 ${dateTextClass}`}>{day}</div>
              {dayEvents.length > 0 && (
                <>
                  <div className="flex flex-wrap gap-0.5 justify-center items-center flex-1">
                    {dayEvents.slice(0, 4).map((event, idx) => {
                      const Icon = getIconComponent(event.icon);
                      const textColor = getEventTextColor(event.type);
                      return (
                        <div
                          key={idx}
                          className={`${textColor}`}
                          title={event.title}
                        >
                          <Icon className="w-3 h-3" />
                        </div>
                      );
                    })}
                    {dayEvents.length > 4 && (
                      <div className="text-[9px] text-gray-500 font-normal">
                        +{dayEvents.length - 4}
                      </div>
                    )}
                  </div>
                  {/* Indicador de eventos no canto inferior direito */}
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}