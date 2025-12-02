import { Stethoscope, Heart, Brain, Bone, Baby, Activity, Eye, Smile, User } from 'lucide-react';

export const departments = [
  { id: 'gen-med', name: 'General Medicine', icon: Stethoscope, description: 'Comprehensive care for adult diseases.' },
  { id: 'ortho', name: 'Orthopedics', icon: Bone, description: 'Care for bones, joints, ligaments, tendons, and muscles.' },
  { id: 'gynae', name: 'Gynecology', icon: User, description: 'Health of the female reproductive systems.' },
  { id: 'peds', name: 'Pediatrics', icon: Baby, description: 'Medical care of infants, children, and adolescents.' },
  { id: 'cardio', name: 'Cardiology', icon: Heart, description: 'Diagnosis and treatment of heart conditions.' },
  { id: 'ent', name: 'ENT', icon: Activity, description: 'Ear, Nose, and Throat disorders.' },
  { id: 'derm', name: 'Dermatology', icon: Smile, description: 'Skin, hair, and nail conditions.' },
  { id: 'dental', name: 'Dental', icon: Smile, description: 'Oral health and hygiene.' },
  { id: 'physio', name: 'Physiotherapy', icon: Activity, description: 'Physical rehabilitation and injury prevention.' },
  { id: 'diag', name: 'Diagnostics', icon: Eye, description: 'Advanced imaging and laboratory services.' },
];

export const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    specialty: 'Cardiology',
    qualification: 'MBBS, MD (Cardiology)',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Fri: 9:00 AM - 1:00 PM'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedics',
    qualification: 'MBBS, MS (Ortho)',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Sat: 10:00 AM - 4:00 PM'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    qualification: 'MBBS, DCH',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Fri: 2:00 PM - 6:00 PM'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'General Medicine',
    qualification: 'MBBS, MD',
    experience: '20+ Years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Sat: 9:00 AM - 2:00 PM'
  }
];

export const facilities = [
  { title: '24/7 Emergency', description: 'Round-the-clock emergency care with dedicated trauma teams.' },
  { title: 'Advanced ICU', description: 'State-of-the-art Intensive Care Units for critical patients.' },
  { title: 'Modern OT', description: 'Modular operation theatres equipped with latest technology.' },
  { title: 'Pharmacy', description: '24-hour in-house pharmacy for all medication needs.' },
  { title: 'Laboratory', description: 'NABL accredited pathology lab for accurate diagnostics.' },
  { title: 'Ambulance', description: 'ACLs and BLS ambulance services available 24/7.' },
];
