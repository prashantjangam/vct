import React from 'react';
import { JourneyType } from '../types';
import { Train, ArrowRightLeft, LineChart } from 'lucide-react';

interface JourneySelectorProps {
  activeJourney: JourneyType;
  setActiveJourney: (journey: JourneyType) => void;
}

const JourneySelector: React.FC<JourneySelectorProps> = ({ 
  activeJourney, 
  setActiveJourney 
}) => {
  const journeyOptions: {
    type: JourneyType;
    label: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    status: 'operational' | 'maintenance' | 'delayed';
  }[] = [
    {
      type: 'acquisition',
      label: 'AQUISITION',
      icon: <Train size={18} />,
      color: '#3B82F6',
      description: 'New Customer Sales Aquisition Journey',
      status: 'operational'
    },
    {
      type: 'upgrade',
      label: 'UPGRADE',
      icon: <ArrowRightLeft size={18} />,
      color: '#10B981',
      description: 'Customer Sales Upgrade Journey',
      status: 'operational'
    },
    {
      type: 'second-line',
      label: 'SECOND LINE',
      icon: <LineChart size={18} />,
      color: '#8B5CF6',
      description: 'Customer Second Line Purchase Journey',
      status: 'maintenance'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-100">Sales Board</h3>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-gray-400">Active</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="text-gray-400">Maintenance</span>
          </div>
        </div>
      </div>
      
      {journeyOptions.map((journey) => (
        <button
          key={journey.type}
          onClick={() => setActiveJourney(journey.type)}
          className={`w-full flex flex-col p-4 rounded-lg transition-all duration-300 ${
            activeJourney === journey.type
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span 
                className="p-2 rounded-lg mr-3"
                style={{ 
                  backgroundColor: journey.color + '20',
                  color: journey.color
                }}
              >
                {journey.icon}
              </span>
              <span className="font-medium text-gray-100">{journey.label}</span>
            </div>
            <div 
              className={`h-2 w-2 rounded-full ${
                journey.status === 'operational' ? 'bg-green-500' :
                journey.status === 'maintenance' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
            />
          </div>
          <p className="text-sm text-gray-400 ml-11">{journey.description}</p>
        </button>
      ))}
    </div>
  );
};

export default JourneySelector;