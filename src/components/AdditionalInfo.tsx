import { additionalInfo } from '../data/calendar-events';
import { Info } from 'lucide-react';

export function AdditionalInfo() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-6 border-2 border-green-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-green-600 rounded-lg">
          <Info className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Informações Importantes</h3>
      </div>
      <div className="space-y-3">
        {additionalInfo.map((info, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
            <p className="text-sm text-gray-600">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
