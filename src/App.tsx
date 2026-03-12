import { useState, useMemo } from 'react';
import { calendarEvents, EventType } from './data/calendar-events';
import { MonthCalendar } from './components/MonthCalendar';
import { EventList } from './components/EventList';
import { EventFilter } from './components/EventFilter';
import { AdditionalInfo } from './components/AdditionalInfo';
import { EventModal } from './components/EventModal';
import { CropSeasonPanel } from './components/CropSeasonPanel';
import { CropTimeline } from './components/CropTimeline';
import { getEventsForMonth, getEventsForDate, monthNames } from './utils/calendar-utils';
import { Calendar as CalendarIcon, ListFilter } from 'lucide-react';
import logoImage from 'figma:asset/1d7547754bca40a26959df08635c5c57423d1a16.png';

export default function App() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([
    'feriado',
    'campanha',
    'reuniao',
    'pagamento',
    'administrativo',
  ]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAllEvents, setShowAllEvents] = useState(false);

  const filteredEvents = useMemo(() => {
    return calendarEvents.filter((event) => selectedTypes.includes(event.type));
  }, [selectedTypes]);

  const monthEvents = useMemo(() => {
    return getEventsForMonth(filteredEvents, currentMonth, currentYear);
  }, [filteredEvents, currentMonth, currentYear]);

  const handleTypeToggle = (type: EventType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleMonthChange = (month: number, year: number) => {
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const handleDateClick = (date: Date) => {
    const events = getEventsForDate(filteredEvents, date);
    if (events.length > 0) {
      setSelectedDate(date);
    }
  };

  const displayedEvents = showAllEvents ? filteredEvents : monthEvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="Grupo Hortsoy" className="h-16 object-contain" />
              <div className="border-l-2 border-gray-300 pl-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  Calendário HortSoy
                </h1>
                <p className="text-sm text-gray-600">Grupo Hortsoy - Agronegócio</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Crop Timeline */}
        <CropTimeline />

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ListFilter className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-800">Filtrar Eventos</h2>
          </div>
          <EventFilter selectedTypes={selectedTypes} onTypeToggle={handleTypeToggle} />
        </div>

        {/* Calendar and Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {monthNames[currentMonth]} {currentYear}
              </h2>
            </div>
            <MonthCalendar
              month={currentMonth}
              year={currentYear}
              events={filteredEvents}
              selectedTypes={selectedTypes}
              onMonthChange={handleMonthChange}
              onDateClick={handleDateClick}
            />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Crop Season Panel */}
            <CropSeasonPanel month={currentMonth} />
            
            {/* Additional Info */}
            <AdditionalInfo />
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {showAllEvents ? 'Todos os Eventos' : `Eventos de ${monthNames[currentMonth]}`}
            </h2>
            <button
              onClick={() => setShowAllEvents(!showAllEvents)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              {showAllEvents ? 'Visualizar Mês' : 'Ver Todos'}
            </button>
          </div>
          <EventList events={displayedEvents} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2026 Calendário HortSoy - Grupo Hortsoy
          </p>
        </div>
      </footer>

      {/* Event Modal */}
      {selectedDate && (
        <EventModal
          date={selectedDate}
          events={getEventsForDate(filteredEvents, selectedDate)}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
}