
import { ShowcaseItem } from './types';

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'plastic-surgery-outbound',
    title: 'Outbound Call Agent',
    description: 'Watch this AI turn leads into consultation bookings for cosmetic procedures. Handles sensitive questions about pricing and procedures with the perfect balance of professionalism and warmth.',
    industry: 'Plastic Surgery Office',
    type: 'outbound',
    audioUrl: 'https://pvpdgsmmpggsfxxamcms.supabase.co/storage/v1/object/public/audio-files/plastic-surgery-outbound-demo.wav',
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
    id: 'alarm-security-support',
    title: 'Technical Support Agent',
    description: 'Our AI handles technical support calls for alarm system troubleshooting, monitoring center inquiries, and customer service. Provides instant responses to common issues while escalating complex matters to your technicians.',
    industry: 'Alarm & Security Company',
    type: 'support',
    audioUrl: '/audio/alarm-security-support-demo.mp3',
    features: ['System Diagnostics', 'Alarm Troubleshooting', 'Monitoring Support', 'Service Scheduling'],
    resultStats: [
      { metric: 'Labor Cost Reduction', value: '80%' },
      { metric: 'Revenue Increase', value: '30%' },
      { metric: 'Call Resolution', value: '95%' }
    ]
  }
];
