
import { ShowcaseItem } from './types';

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'roofing-inbound',
    title: 'Inbound Call Agent',
    description: 'Watch this AI turn a skeptical caller into a $12K roofing job in under 4 minutes. Handles price objections, schedules estimates, and sends follow-up texts automatically.',
    industry: 'Roofing Company',
    type: 'inbound',
    audioUrl: '/audio/roofing-inbound-demo.mp3',
    features: ['Lead Qualification', 'Appointment Booking', '24/7 Availability', 'CRM Integration'],
    resultStats: [
      { metric: 'Call Answer Rate', value: '100%' },
      { metric: 'Lead Conversion', value: '+45%' },
      { metric: 'Appointment Shows', value: '87%' }
    ]
  },
  {
    id: 'lending-outbound',
    title: 'Outbound Call Agent',
    description: 'Listen to this AI warm up cold leads and book consultations without sounding robotic. Even handles "I\'m not interested" objections like a seasoned sales pro.',
    industry: 'Business Lending Firm',
    type: 'outbound',
    audioUrl: '/audio/lending-outbound-demo.mp3',
    features: ['Lead Warming', 'Consultation Booking', 'Follow-up Sequences', 'Objection Handling'],
    resultStats: [
      { metric: 'Contact Rate', value: '3x Higher' },
      { metric: 'Consultation Bookings', value: '+67%' },
      { metric: 'Cost per Lead', value: '-40%' }
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
