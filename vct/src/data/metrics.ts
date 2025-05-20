import { JourneyMetric } from '../types';

export const getJourneyMetrics = (journeyType: string): JourneyMetric[] => {
  // These would typically come from an API
  const metricsMap: Record<string, JourneyMetric[]> = {
    'acquisition': [
      { label: 'Conversion Rate', value: 43.2, change: 2.1, isPositive: true },
      { label: 'Average Time (min)', value: 7.1, change: -0.3, isPositive: true },
      { label: 'Bounce Rate', value: 28.4, change: -1.7, isPositive: true },
      { label: 'Total Users', value: 25430, change: 8.4, isPositive: true }
    ],
    'upgrade': [
      { label: 'Conversion Rate', value: 68.4, change: 3.8, isPositive: true },
      { label: 'Average Time (min)', value: 5.9, change: -0.8, isPositive: true },
      { label: 'Bounce Rate', value: 18.7, change: -2.3, isPositive: true },
      { label: 'Total Users', value: 15280, change: 12.6, isPositive: true }
    ],
    'second-line': [
      { label: 'Conversion Rate', value: 52.7, change: -1.3, isPositive: false },
      { label: 'Average Time (min)', value: 6.5, change: 0.4, isPositive: false },
      { label: 'Bounce Rate', value: 24.1, change: 1.8, isPositive: false },
      { label: 'Total Users', value: 8920, change: 5.2, isPositive: true }
    ]
  };
  
  return metricsMap[journeyType] || [];
};