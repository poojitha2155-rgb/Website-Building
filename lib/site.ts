export const siteConfig = {
  name: 'Future Akshita Company',
  shortName: 'Future Akshita',
  tagline: 'Connecting talent with opportunity across India',
  description:
    'Future Akshita Company is a career services platform that helps job seekers find jobs, employers hire talent, and everyone access career guidance, skill programs, and job fairs.',
  contact: {
    email: 'support@futureakshita.example',
    phone: '1800-000-0000',
    address: '4th Floor, Akshita Towers, MG Road, Bengaluru, Karnataka 560001',
    hours: 'Mon – Sat, 9:00 AM – 6:00 PM',
  },
}

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Employers', href: '/employers' },
  { label: 'Career Guidance', href: '/career-guidance' },
  { label: 'Job Fairs', href: '/job-fairs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = [
  {
    title: 'For Job Seekers',
    links: [
      { label: 'Search Jobs', href: '/jobs' },
      { label: 'Register as Job Seeker', href: '/register?role=jobseeker' },
      { label: 'Career Guidance', href: '/career-guidance' },
      { label: 'Upcoming Job Fairs', href: '/job-fairs' },
    ],
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '/register?role=employer' },
      { label: 'Hiring Solutions', href: '/employers' },
      { label: 'Host a Job Fair', href: '/job-fairs' },
      { label: 'Employer Login', href: '/login' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Help & FAQs', href: '/contact#faq' },
    ],
  },
]
