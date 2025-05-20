import React, { useState } from 'react';
import { ServiceStation } from '../types';
import { formatPercent, formatTime } from '../utils/formatters';
import { ChevronDown, AlertCircle } from 'lucide-react';

interface ServiceStationNodeProps {
  station: ServiceStation;
  color: string;
  isLast: boolean;
}

const ServiceStationNode: React.FC<ServiceStationNodeProps> = ({ 
  station, 
  color,
  isLast 
}) => {
  const [expanded, setExpanded] = useState(false);
  const isProblemArea = station.stats.dropOffRate > 20 || station.stats.errorRate > 5;

  return (
    <div className="relative z-10">
      <div 
        className={`
          station-node rounded-lg p-4 cursor-pointer
          ${expanded ? 'border-blue-500/50' : ''}
        `}
        onClick={() => setExpanded(!expanded)}
        style={{ width: '180px' }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full signal-active"
              style={{ backgroundColor: color }}
            />
            <h3 className="font-medium text-gray-300">{station.name}</h3>
          </div>
          {isProblemArea && (
            <AlertCircle size={16} className="text-amber-500" />
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Status: <span className="text-green-400">Active</span>
          </div>
          <ChevronDown 
            size={16} 
            className={`text-gray-400 transform transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </div>

        {expanded && (
          <div className="absolute top-full left-0 w-full mt-2 bg-gray-900/95 rounded-lg border border-gray-700 p-4 shadow-xl">
            <div className="space-y-3">
              <p className="text-sm text-gray-400">{station.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800/50 p-2 rounded">
                  <span className="text-xs text-gray-500">Time</span>
                  <p className="text-sm font-medium text-gray-300">
                    {formatTime(station.stats.averageTimeSpent)}
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-2 rounded">
                  <span className="text-xs text-gray-500">Drop-off</span>
                  <p className={`text-sm font-medium ${
                    station.stats.dropOffRate > 20 ? 'text-red-400' : 'text-gray-300'
                  }`}>
                    {formatPercent(station.stats.dropOffRate)}
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-2 rounded">
                  <span className="text-xs text-gray-500">Success</span>
                  <p className="text-sm font-medium text-green-400">
                    {formatPercent(station.stats.conversionRate)}
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-2 rounded">
                  <span className="text-xs text-gray-500">Errors</span>
                  <p className={`text-sm font-medium ${
                    station.stats.errorRate > 5 ? 'text-amber-400' : 'text-gray-300'
                  }`}>
                    {formatPercent(station.stats.errorRate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceStationNode;