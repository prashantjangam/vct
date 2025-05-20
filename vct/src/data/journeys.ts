import { Journey } from '../types';

const createSubJourney = (baseJourney: any, type: string, color: string) => ({
  ...baseJourney,
  type,
  color,
  stations: baseJourney.stations.map((station: any) => ({
    ...station,
    id: `${station.id}-${type.toLowerCase()}`
  }))
});

const baseStations = [
  {
    id: 'web',
    name: 'Web',
    description: 'Customer visits the website and explores products',
    stats: {
      dropOffRate: 28.4,
      averageTimeSpent: 145,
      conversionRate: 71.6,
      errorRate: 2.1
    }
  },
  {
    id: 'basket',
    name: 'Basket',
    description: 'Customer adds products to their shopping basket',
    stats: {
      dropOffRate: 42.3,
      averageTimeSpent: 98,
      conversionRate: 57.7,
      errorRate: 3.8
    }
  },
  {
    id: 'checkout',
    name: 'Checkout',
    description: 'Customer proceeds to checkout process',
    stats: {
      dropOffRate: 15.7,
      averageTimeSpent: 76,
      conversionRate: 84.3,
      errorRate: 5.2
    }
  },
  {
    id: 'payment',
    name: 'Payment',
    description: 'Customer makes payment for their order',
    stats: {
      dropOffRate: 8.9,
      averageTimeSpent: 43,
      conversionRate: 91.1,
      errorRate: 6.7
    }
  },
  {
    id: 'order',
    name: 'Order',
    description: 'Order is created and processed in the system',
    stats: {
      dropOffRate: 3.2,
      averageTimeSpent: 12,
      conversionRate: 96.8,
      errorRate: 1.5
    }
  },
  {
    id: 'til',
    name: 'TIL',
    description: 'Transaction Information Logging',
    stats: {
      dropOffRate: 1.8,
      averageTimeSpent: 8,
      conversionRate: 98.2,
      errorRate: 0.9
    }
  },
  {
    id: 'seibel',
    name: 'Seibel',
    description: 'Customer data is recorded in Seibel CRM',
    stats: {
      dropOffRate: 0.5,
      averageTimeSpent: 45,
      conversionRate: 99.5,
      errorRate: 2.3
    }
  }
];

const createJourneyStations = (prefix: string) => 
  baseStations.map(station => ({
    ...station,
    id: `${station.id}-${prefix}`
  }));

export const journeyData: Journey[] = [
  {
    type: 'acquisition',
    name: 'Acquisition Journey',
    description: 'New customer acquisition process',
    color: '#3B82F6', // Blue
    totalUsers: 25430,
    completionRate: 43.2,
    averageTotalTime: 427,
    stations: createJourneyStations('acq'),
    subJourneys: [
      {
        type: 'PAYM',
        name: 'Pay Monthly Journey',
        description: 'Contract-based acquisition process',
        color: '#60A5FA',
        totalUsers: 12715,
        completionRate: 48.5,
        averageTotalTime: 412,
        stations: createJourneyStations('paym')
      },
      {
        type: 'PAYG',
        name: 'Pay As You Go Journey',
        description: 'Prepaid service acquisition process',
        color: '#93C5FD',
        totalUsers: 6358,
        completionRate: 39.8,
        averageTotalTime: 389,
        stations: createJourneyStations('payg')
      },
      {
        type: 'VOX',
        name: 'Voice Services Journey',
        description: 'Voice-focused product acquisition',
        color: '#BFDBFE',
        totalUsers: 3814,
        completionRate: 41.5,
        averageTotalTime: 402,
        stations: createJourneyStations('vox')
      },
      {
        type: 'SMART-DEVICES',
        name: 'Smart Devices Journey',
        description: 'IoT and smart device acquisition',
        color: '#DBEAFE',
        totalUsers: 2543,
        completionRate: 45.2,
        averageTotalTime: 445,
        stations: createJourneyStations('smart')
      }
    ]
  },
  {
    type: 'upgrade',
    name: 'Upgrade Journey',
    description: 'Existing customer upgrading their service',
    color: '#10B981', // Green
    totalUsers: 15280,
    completionRate: 68.4,
    averageTotalTime: 356,
    stations: createJourneyStations('upg'),
    subJourneys: [
      {
        type: 'PAYM',
        name: 'Pay Monthly Upgrade',
        description: 'Contract upgrade process',
        color: '#34D399',
        totalUsers: 7640,
        completionRate: 72.1,
        averageTotalTime: 342,
        stations: createJourneyStations('paym-upg')
      },
      {
        type: 'PAYG',
        name: 'Pay As You Go Upgrade',
        description: 'Prepaid service upgrade process',
        color: '#6EE7B7',
        totalUsers: 3820,
        completionRate: 65.8,
        averageTotalTime: 334,
        stations: createJourneyStations('payg-upg')
      },
      {
        type: 'VOX',
        name: 'Voice Services Upgrade',
        description: 'Voice-focused product upgrade',
        color: '#A7F3D0',
        totalUsers: 2292,
        completionRate: 67.2,
        averageTotalTime: 348,
        stations: createJourneyStations('vox-upg')
      },
      {
        type: 'SMART-DEVICES',
        name: 'Smart Devices Upgrade',
        description: 'IoT and smart device upgrade',
        color: '#D1FAE5',
        totalUsers: 1528,
        completionRate: 69.8,
        averageTotalTime: 365,
        stations: createJourneyStations('smart-upg')
      }
    ]
  },
  {
    type: 'second-line',
    name: 'Second-Line Journey',
    description: 'Additional product purchase by existing customer',
    color: '#8B5CF6', // Purple
    totalUsers: 8920,
    completionRate: 52.7,
    averageTotalTime: 389,
    stations: createJourneyStations('sl'),
    subJourneys: [
      {
        type: 'PAYM',
        name: 'Pay Monthly Second Line',
        description: 'Contract-based additional line',
        color: '#A78BFA',
        totalUsers: 4460,
        completionRate: 58.3,
        averageTotalTime: 375,
        stations: createJourneyStations('paym-sl')
      },
      {
        type: 'PAYG',
        name: 'Pay As You Go Second Line',
        description: 'Prepaid service additional line',
        color: '#C4B5FD',
        totalUsers: 2230,
        completionRate: 48.9,
        averageTotalTime: 368,
        stations: createJourneyStations('payg-sl')
      },
      {
        type: 'VOX',
        name: 'Voice Services Second Line',
        description: 'Voice-focused additional line',
        color: '#DDD6FE',
        totalUsers: 1338,
        completionRate: 51.2,
        averageTotalTime: 382,
        stations: createJourneyStations('vox-sl')
      },
      {
        type: 'SMART-DEVICES',
        name: 'Smart Devices Second Line',
        description: 'IoT and smart device additional line',
        color: '#EDE9FE',
        totalUsers: 892,
        completionRate: 53.8,
        averageTotalTime: 395,
        stations: createJourneyStations('smart-sl')
      }
    ]
  }
];