import React, { useState } from 'react';
import JourneyFlow from './JourneyFlow';
import MetricsCards from './MetricsCards';
import { journeyData } from '../data/journeys';
import { getJourneyMetrics } from '../data/metrics';
import { Users, Clock, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react';
import { Journey, SubJourney } from '../types';

const Dashboard: React.FC = () => {
  const [expandedJourneys, setExpandedJourneys] = useState<Record<string, boolean>>({});
  const [showMetrics, setShowMetrics] = useState<Record<string, boolean>>({
    acquisition: false,
    upgrade: false,
    'second-line': false
  });

  const toggleJourney = (journeyType: string) => {
    setExpandedJourneys(prev => ({
      ...prev,
      [journeyType]: !prev[journeyType]
    }));
  };

  const toggleMetrics = (journeyType: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setShowMetrics(prev => ({
      ...prev,
      [journeyType]: !prev[journeyType]
    }));
  };

  const allMetrics = journeyData.map(journey => ({
    journey: journey.type,
    metrics: getJourneyMetrics(journey.type)
  }));

  const renderJourneyFlow = (journey: Journey | SubJourney, isSubJourney = true) => (
    <div className={`space-y-4 ${isSubJourney ? 'ml-8 mt-4' : ''}`}>
  
      <JourneyFlow journey={journey} />
    </div>
  );
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 grid-bg">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-blue-500 rounded-full signal-active" />
              <h2 className="text-2xl font-bold text-blue-400">Vodafone Sales Journey Control</h2>
            </div>
            <p className="text-gray-500 mt-1">Network Status Monitor</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-400">System Status:</span>
              <span className="ml-2 text-green-400">Operational</span>
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-400">Last Update:</span>
              <span className="ml-2 text-blue-400">Live</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {journeyData.map((journey, index) => (
            <div key={journey.type} className="space-y-4">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleMetrics(journey.type, e)}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                        showMetrics[journey.type] 
                          ? 'bg-gray-700 text-blue-400' 
                          : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                      }`}
                      title={showMetrics[journey.type] ? 'Show Metrics' : 'Hide Metrics'}>
                      <BarChart2 size={16} />
                    </button>
                    {journey.subJourneys?.length > 0 && (
                      <button
                        onClick={() => toggleJourney(journey.type)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:textgray-300"
                      >
                        {expandedJourneys[journey.type] ? 
                          <ChevronUp size={16} /> : 
                          <ChevronDown size={16} />
                        }
                      </button>
                    )}
                    <button 
                    onClick={() => toggleJourney(journey.type)}
                    className="flex-1">
                    {renderJourneyFlow(journey)}
                  </button>
                    <div>
                      
                    </div>
                  </div>
                </div>

                {showMetrics[journey.type] && (
                  <div className="mb-6 grid grid-cols-4 gap-4">
                    <MetricsCards metrics={allMetrics[index].metrics} />
                  </div>
                )}
                
                {expandedJourneys[journey.type] && journey.subJourneys?.map(subJourney => (
                  <div key={subJourney.type} className="mt-8 border-t border-gray-800 pt-8">
                    {renderJourneyFlow(subJourney, true)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;