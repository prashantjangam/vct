import React from 'react';
import { Journey, SubJourney } from '../types';
import ServiceStationNode from './ServiceStationNode';
import { Clock, Users, Train } from 'lucide-react';

interface JourneyFlowProps {
  isSubJourney?: boolean,
  journey: Journey | SubJourney;
}

const JourneyFlow: React.FC<JourneyFlowProps> = ({ journey }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <div className="flex items-center mb-6">
        <div className="flex items-center flex-1">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 signal-node"
            style={{ backgroundColor: `${journey.color}20` }}
          >
            <Train size={24} style={{ color: journey.color }} />
          </div>
            <div>
            <h2 className="text-xl font-bold" style={{ color: journey.color }}>{journey.name}</h2>
            <p className="text-gray-500">{journey.description}</p>
          </div> 
        </div> 
        <div className="flex gap-4">
          <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
            <Users size={18} className="mr-2 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Active Users</p>
              <p className="text-sm font-semibold text-gray-300">
                {journey.totalUsers.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
            <Clock size={18} className="mr-2 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500">Route Time</p>
              <p className="text-sm font-semibold text-gray-300">
                {Math.round(journey.averageTotalTime / 60)}m
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[2px] signal-line" />
        </div>
        <div className="relative flex justify-between">
          {journey.stations.map((station, index) => (
            <ServiceStationNode
              key={station.id}
              station={station}
              color={journey.color}
              isLast={index === journey.stations.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyFlow;