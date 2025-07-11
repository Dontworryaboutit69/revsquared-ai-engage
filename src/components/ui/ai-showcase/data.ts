
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
    id: 'security-support',
    title: 'Technical Support Agent',
    description: 'Hear how this AI walks customers through complex installations step-by-step. Customers rate it higher than human support - and it never gets frustrated.',
    industry: 'Home Security Company',
    type: 'support',
    audioUrl: '/audio/security-support-demo.mp3',
    features: ['24/7 Support', 'Installation Guidance', 'Troubleshooting', 'Ticket Escalation'],
    resultStats: [
      { metric: 'Resolution Rate', value: '89%' },
      { metric: 'Customer Satisfaction', value: '4.8/5' },
      { metric: 'Support Costs', value: '-60%' }
    ]
  }
];
