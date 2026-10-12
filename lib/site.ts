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
  { label: 'Find Jobs', href: '/jobs', menuKey: 'jobseekers' },
  { label: 'Employers', href: '/employers', menuKey: 'employers' },
  { label: 'Career Guidance', href: '/career-guidance', menuKey: 'guidance' },
  { label: 'Job Fairs', href: '/job-fairs', menuKey: 'events' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const megaMenus = {
  jobseekers: [
    { title: 'Get Started', links: [{ label: 'Create your profile', href: '/register?role=jobseeker' }, { label: 'Sign in to your account', href: '/login' }, { label: 'How Future Akshita works', href: '/about' }] },
    { title: 'Find Opportunities', links: [{ label: 'Browse all jobs', href: '/jobs' }, { label: 'Explore by category', href: '/jobs#categories' }, { label: 'Upcoming job fairs', href: '/job-fairs' }] },
    { title: 'Grow Your Career', links: [{ label: 'Career guidance', href: '/career-guidance' }, { label: 'Counselling request', href: '/career-guidance#counselling' }, { label: 'Skill-building resources', href: '/career-guidance#resources' }] },
  ],
  employers: [
    { title: 'Hire With Confidence', links: [{ label: 'Post a new opportunity', href: '/employers#post-job' }, { label: 'Employer registration', href: '/register?role=employer' }, { label: 'Employer login', href: '/login' }] },
    { title: 'Recruitment Support', links: [{ label: 'Hiring solutions', href: '/employers' }, { label: 'Find skilled candidates', href: '/jobs' }, { label: 'Host a job fair', href: '/job-fairs' }] },
    { title: 'Employer Resources', links: [{ label: 'Responsible hiring guide', href: '/about' }, { label: 'Contact our team', href: '/contact' }] },
  ],
  guidance: [
    { title: 'Career Planning', links: [{ label: 'Book career counselling', href: '/career-guidance#counselling' }, { label: 'Explore career paths', href: '/career-guidance' }, { label: 'Skills assessment', href: '/career-guidance#resources' }] },
    { title: 'Learning & Skills', links: [{ label: 'Training resources', href: '/career-guidance#resources' }, { label: 'Interview preparation', href: '/career-guidance#resources' }, { label: 'Resume support', href: '/career-guidance#resources' }] },
    { title: 'Support', links: [{ label: 'Meet our counsellors', href: '/career-guidance' }, { label: 'Ask a question', href: '/contact' }] },
  ],
  events: [
    { title: 'Discover Events', links: [{ label: 'View upcoming job fairs', href: '/job-fairs' }, { label: 'Register for an event', href: '/job-fairs' }] },
    { title: 'For Employers', links: [{ label: 'Create a job fair', href: '/employers' }, { label: 'Meet local talent', href: '/job-fairs' }] },
    { title: 'Stay Connected', links: [{ label: 'Contact the events team', href: '/contact' }, { label: 'About Future Akshita', href: '/about' }] },
  ],
} as const

export type MegaMenuKey = keyof typeof megaMenus

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
