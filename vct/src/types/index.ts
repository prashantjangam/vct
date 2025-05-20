export type JourneyType = 'acquisition' | 'upgrade' | 'second-line';
export type SubJourneyType = 'PAYM' | 'PAYG' | 'VOX' | 'SMART-DEVICES';

export interface ServiceStation {
  id: string;
  name: string;
  description: string;
  stats: {
    dropOffRate: number;
    averageTimeSpent: number; // in seconds
    conversionRate: number; // percentage
    errorRate: number; // percentage
  };
}

export interface SubJourney {
  type: SubJourneyType;
  name: string;
  description: string;
  stations: ServiceStation[];
  color: string;
  totalUsers: number;
  completionRate: number;
  averageTotalTime: number;
}

export interface Journey {
  type: JourneyType;
  name: string;
  description: string;
  stations: ServiceStation[];
  subJourneys: SubJourney[];
  color: string;
  totalUsers: number;
  completionRate: number;
  averageTotalTime: number;
}

export interface JourneyMetric {
  label: string;
  value: number;
  change: number;
  isPositive: boolean;
}