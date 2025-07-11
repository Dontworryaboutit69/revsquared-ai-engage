
import { ShowcaseItem } from './types';

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'plastic-surgery-outbound',
    title: 'Outbound Call Agent',
    description: 'Watch this AI turn leads into consultation bookings for cosmetic procedures. Handles sensitive questions about pricing and procedures with the perfect balance of professionalism and warmth.',
    industry: 'Plastic Surgery Office',
    type: 'outbound',
    audioUrl: '/audio/plastic-surgery-outbound-demo.mp3',
    features: ['Consultation Booking', 'Procedure Information', 'Financing Options', 'Follow-up Sequences'],
    resultStats: [
      { metric: 'Contact Rate', value: '100%' },
      { metric: 'Consultation Bookings', value: '+58%' },
      { metric: 'Cost per Lead', value: '-45%' }
    ]
  },
  {
    id: 'law-office-agent',
    title: 'Legal Intake Agent',
    description: 'Listen to this AI conduct professional legal intake calls, gathering case details and qualifying potential clients. Handles sensitive legal matters with appropriate discretion and empathy.',
    industry: 'Law Office',
    type: 'inbound',
    audioUrl: '/audio/law-office-intake-demo.mp3',
    features: ['Client Intake', 'Case Qualification', 'Appointment Scheduling', 'Document Collection'],
    resultStats: [
      { metric: 'Call Answer Rate', value: '100%' },
      { metric: 'Client Conversion', value: '+52%' },
      { metric: 'Case Quality', value: '91%' }
    ]
  },
  {
    id: 'lead-follow-up',
    title: 'Leads Fall Through the Cracks',
    description: 'That hot prospect from your trade show? No one followed up for 5 days. Your CRM shows 200 \'maybe\' leads that never got touched. You\'re sitting on a goldmine but don\'t have systems to mine it.',
    industry: 'Sales & Lead Management',
    type: 'follow-up',
    audioUrl: '/audio/lead-follow-up-demo.mp3',
    features: ['Automatic Follow-up', 'Lead Nurturing', 'CRM Integration', 'Conversion Tracking'],
    resultStats: [
      { metric: 'Follow-up Rate', value: '100%' },
      { metric: 'Lead Conversion', value: '+73%' },
      { metric: 'Revenue Recovery', value: '+180%' }
    ]
  }
];
