import React from 'react';
import { JourneyMetric } from '../types';
import { ArrowDownRight, ArrowUpRight, Clock, LineChart, Percent, Users } from 'lucide-react';
import { formatNumber, formatPercent, formatChange } from '../utils/formatters';

interface MetricsCardsProps {
  metrics: JourneyMetric[];
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ metrics }) => {
  const getIcon = (label: string) => {
    switch (label) {
      case 'Conversion Rate':
        return <Percent size={20} />;
      case 'Average Time (min)':
        return <Clock size={20} />;
      case 'Bounce Rate':
        return <LineChart size={20} />;
      case 'Total Users':
        return <Users size={20} />;
      default:
        return <LineChart size={20} />;
    }
  };

  return (
    <>
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="bg-gray-700 rounded-lg p-5 transition-transform duration-200 hover:bg-gray-600"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 rounded-md bg-gray-600 text-gray-300">
              {getIcon(metric.label)}
            </div>
            <div className="flex items-center">
              <span 
                className={`text-sm font-medium flex items-center ${
                  metric.isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {formatChange(metric.change)}
                {metric.isPositive ? 
                  <ArrowUpRight size={16} className="ml-1" /> : 
                  <ArrowDownRight size={16} className="ml-1" />
                }
              </span>
            </div>
          </div>
          <h3 className="text-gray-400 font-medium text-sm mb-1">{metric.label}</h3>
          <p className="text-gray-100 text-2xl font-bold">
            {metric.label.includes('Rate') ? formatPercent(metric.value) : 
             metric.label.includes('Users') ? formatNumber(metric.value) : 
             metric.value}
          </p>
        </div>
      ))}
    </>
  );
};

export default MetricsCards;