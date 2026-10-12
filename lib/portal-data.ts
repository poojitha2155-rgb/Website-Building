export const companies = [
  { name: 'Nimbus Softworks', type: 'Technology company', industry: 'Software & Product', location: 'Bengaluru, India', openings: 48, description: 'Building accessible digital products for a connected world.' },
  { name: 'Sanjeevani Health Network', type: 'Healthcare group', industry: 'Healthcare', location: 'Hyderabad, India', openings: 36, description: 'Growing a compassionate network of care professionals.' },
  { name: 'Pragati Finance Bank', type: 'Financial services', industry: 'Banking & Finance', location: 'Mumbai, India', openings: 29, description: 'Creating inclusive financial experiences across emerging markets.' },
  { name: 'Northstar Mobility', type: 'Global enterprise', industry: 'Mobility & Logistics', location: 'Singapore / Remote', openings: 22, description: 'Designing cleaner, smarter ways to move people and goods.' },
  { name: 'Kalam Media Labs', type: 'Learning company', industry: 'Education & Media', location: 'Remote / India', openings: 17, description: 'Making high-quality learning more engaging and available.' },
  { name: 'Veerabhadra Industries', type: 'Manufacturing group', industry: 'Manufacturing', location: 'Pune, India', openings: 31, description: 'Building resilient teams for the next generation of industry.' },
]

export const institutions = [
  { name: 'Akshitha Institute of Technology', type: 'Engineering college', location: 'Bengaluru, India', programs: 28, learners: '4,800+', description: 'Industry-aligned engineering education with a strong placement culture.' },
  { name: 'Global School of Business & Management', type: 'Management institute', location: 'Mumbai, India', programs: 14, learners: '2,100+', description: 'Preparing future leaders through applied learning and global exposure.' },
  { name: 'Vidya Arts & Science University', type: 'University', location: 'Jaipur, India', programs: 42, learners: '9,200+', description: 'A multidisciplinary campus connecting ideas, skills and opportunity.' },
  { name: 'SkillForge Technical Academy', type: 'Training institute', location: 'Chennai, India', programs: 19, learners: '3,600+', description: 'Practical pathways into technology, trades and modern workplaces.' },
  { name: 'Horizon Community College', type: 'Vocational institution', location: 'Nairobi, Kenya', programs: 16, learners: '1,900+', description: 'Career-ready programs for a changing global economy.' },
  { name: 'Eastern School of Data & AI', type: 'Specialist institute', location: 'Kolkata, India', programs: 11, learners: '1,200+', description: 'Focused education for data, artificial intelligence and analytics.' },
]

export const courses = [
  { title: 'Full-Stack Web Development', provider: 'SkillForge Learning', category: 'Software Engineering', level: 'Beginner to Intermediate', duration: '16 weeks', format: 'Online', learners: '2,400+', color: 'blue' },
  { title: 'Applied Data Analytics with Python', provider: 'Eastern School of Data & AI', category: 'Data Science', level: 'Intermediate', duration: '12 weeks', format: 'Hybrid', learners: '980+', color: 'teal' },
  { title: 'Cloud Foundations for Professionals', provider: 'Nimbus Academy', category: 'Cloud Computing', level: 'Beginner', duration: '8 weeks', format: 'Online', learners: '1,760+', color: 'violet' },
  { title: 'Career Communication Studio', provider: 'Akshitha Career Lab', category: 'Professional Development', level: 'All levels', duration: '4 weeks', format: 'Live online', learners: '3,100+', color: 'amber' },
  { title: 'Cybersecurity Essentials', provider: 'Global Tech Institute', category: 'Cybersecurity', level: 'Intermediate', duration: '10 weeks', format: 'Online', learners: '740+', color: 'rose' },
  { title: 'Digital Marketing for Growth Teams', provider: 'Kalam Media Labs', category: 'Digital Marketing', level: 'Beginner', duration: '6 weeks', format: 'Self-paced', learners: '1,280+', color: 'green' },
]

export const portalStats = [
  { label: 'Partner companies', value: '120+', note: 'Sample platform data' },
  { label: 'Institution partners', value: '68', note: 'Sample platform data' },
  { label: 'Career-ready courses', value: '240+', note: 'Sample platform data' },
  { label: 'Countries represented', value: '14', note: 'Sample platform data' },
]

export type PortalTab = 'companies' | 'institutions' | 'courses'

export const portalTabs: { label: string; href: string; key: PortalTab }[] = [
  { label: 'Companies', href: '/companies', key: 'companies' },
  { label: 'Institutions', href: '/institutions', key: 'institutions' },
  { label: 'Courses & Training', href: '/courses', key: 'courses' },
]

export const companyIndustries = ['All industries', 'Software & Product', 'Healthcare', 'Banking & Finance', 'Mobility & Logistics', 'Education & Media', 'Manufacturing']
export const institutionTypes = ['All institution types', 'Engineering college', 'Management institute', 'University', 'Training institute', 'Vocational institution', 'Specialist institute']
export const courseCategories = ['All categories', 'Software Engineering', 'Data Science', 'Cloud Computing', 'Professional Development', 'Cybersecurity', 'Digital Marketing']

export const demoNotice = 'Demonstration content for the Future Akshitha proposal. Connect your verified platform data when the backend is ready.'

export type Company = (typeof companies)[number]
export type Institution = (typeof institutions)[number]
export type Course = (typeof courses)[number]

export const portalContent: Record<PortalTab, { eyebrow: string; title: string; description: string }> = {
  companies: { eyebrow: 'Global employer network', title: 'Meet the companies building tomorrow', description: 'Explore organizations, roles and partnership opportunities across sectors and regions.' },
  institutions: { eyebrow: 'Education ecosystem', title: 'Find institutions that open doors', description: 'Connect colleges, universities and training partners with employers and learners.' },
  courses: { eyebrow: 'Skills for the future', title: 'Learn skills that move careers forward', description: 'Discover flexible learning pathways from trusted education and training providers.' },
}

export const benefitCards = [
  { title: 'For learners', description: 'Build a profile, discover opportunities and keep your career plan in one place.', action: 'Explore opportunities', href: '/jobs' },
  { title: 'For companies', description: 'Reach prepared, diverse talent and build high-trust institutional partnerships.', action: 'Partner with us', href: '/employers' },
  { title: 'For institutions', description: 'Coordinate placements, courses and employer engagement from one workspace.', action: 'View institutions', href: '/institutions' },
]

export const globalRegions = ['India', 'Southeast Asia', 'Middle East', 'Africa', 'Europe', 'Remote worldwide']

export const faqs = [
  { question: 'Who is Future Akshitha for?', answer: 'The platform is designed for learners, job seekers, employers, educational institutions and course providers.' },
  { question: 'Can institutions manage campus hiring?', answer: 'Yes. The proposal includes a dedicated institution workspace for opportunity sharing, placement coordination and outcome tracking.' },
  { question: 'Are these live listings?', answer: 'This version uses clearly labelled demonstration data for presentation. Live data, authentication and workflows can be connected through a future backend.' },
]

export const siteSections = [
  { title: 'Discover', links: ['Find jobs', 'Internships', 'Companies', 'Institutions', 'Courses & training'] },
  { title: 'Build capability', links: ['Career guidance', 'Skill assessments', 'Learning pathways', 'Mentorship', 'Events & job fairs'] },
  { title: 'Partner', links: ['For employers', 'For institutions', 'For providers', 'Global partnerships', 'Platform overview'] },
]

export const opportunityTypes = ['Jobs', 'Internships', 'Courses', 'Events', 'Institutions']

export const heroHighlights = [
  { label: 'Career pathways', value: 'Connected' },
  { label: 'Institution partnerships', value: 'Growing' },
  { label: 'Global access', value: 'Ready' },
]

export const featuredCompanies = companies.slice(0, 4)
export const featuredInstitutions = institutions.slice(0, 4)
export const featuredCourses = courses.slice(0, 4)

export const portalRoutes = { companies: '/companies', institutions: '/institutions', courses: '/courses' } as const

export const globalSearchPlaceholder = 'Search jobs, companies, institutions or courses'

export const journeySteps = ['Create your profile', 'Discover opportunities', 'Connect and apply', 'Track your progress']

export const stakeholderLabels = ['Students & professionals', 'Companies & employers', 'Colleges & institutions', 'Course providers']

export const sampleLabel = 'Sample data'

export const countryOptions = ['India', 'Singapore', 'United Arab Emirates', 'Kenya', 'United Kingdom', 'Remote worldwide']

export const opportunityCounts = { jobs: '2,400+', internships: '680+', courses: '240+', events: '36' }

export const globalTagline = 'One ecosystem for talent, education and opportunity.'

export const platformPillars = [
  { title: 'Opportunity discovery', description: 'Search jobs, internships and events with clear filters for role, skill, place and work model.' },
  { title: 'Learning pathways', description: 'Move from career goals to practical courses, credentials and guided next steps.' },
  { title: 'Institution partnerships', description: 'Bring campus talent, placement teams and employers into one collaboration layer.' },
]

export const platformPromise = 'Make every next step clearer, more connected and more achievable.'

export const portalCta = { label: 'Explore the ecosystem', href: '/companies' }

export const categories = ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Sustainability']

export const productNav = [
  { label: 'Jobs & Internships', href: '/jobs' },
  { label: 'Companies', href: '/companies' },
  { label: 'Institutions', href: '/institutions' },
  { label: 'Courses', href: '/courses' },
]

export const footerLinks = [
  { label: 'Privacy', href: '/about' },
  { label: 'Terms', href: '/about' },
  { label: 'Accessibility', href: '/about' },
]

export const platformAudience = 'Built for a world where careers, learning and collaboration are connected.'

export const callout = { label: 'Future-ready network', title: 'The right opportunity is often one connection away.' }

export const pageKicker = 'Future Akshitha ecosystem'

export const demoDisclaimer = 'Prototype interface — authentication, real listings and transactions require backend integration.'

export const profileRoles = ['Learner', 'Professional', 'Employer', 'Institution', 'Training provider']

export const globalOpportunityNote = 'Explore cross-border and remote opportunities with country-aware discovery.'

export const partnerNote = 'Partner profiles shown here are illustrative and should be replaced with approved organizations.'

export const courseFormats = ['Online', 'Hybrid', 'Live online', 'Self-paced']

export const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'All levels']

export const portalNav = [...portalTabs]

export const sampleCountries = countryOptions

export const homepageSectionTitles = { audience: 'Choose the path that fits your next move', ecosystem: 'A connected ecosystem for meaningful progress' }

export const allPortalItems = { companies, institutions, courses }

export const globalReady = true

export const pageMeta = { title: 'Future Akshitha — Global talent and learning ecosystem', description: 'A connected platform for careers, education and institutional collaboration.' }

export const version = 'proposal-ui-1'

export const lastUpdated = '2026'

export const navSearchLabel = 'Search the platform'

export const mobileMenuLabel = 'Open platform menu'

export const partnershipCta = { title: 'Build the next chapter with us', description: 'Bring your learners, teams or programs into a connected international ecosystem.', href: '/contact', label: 'Start a conversation' }

export const portalCardColors = ['blue', 'teal', 'violet', 'amber']

export const dashboardRoutes = { learner: '/login', employer: '/employers', institution: '/institutions', provider: '/courses' } as const

export const allCountries = sampleCountries

export const allCategories = categories

export const homeSearchFields = ['Job title or skill', 'City, country or remote', 'Jobs, courses or institutions']

export const opportunityLabels = ['Work', 'Learn', 'Connect']

export const moreNavItems = ['Resources', 'Support', 'Language']

export const proposalTitle = 'Future Akshitha Company'

export const proposalSubtitle = 'Global Talent, Education, Training and Career Management Platform'

export const platformStatus = 'Frontend proposal'

export const contentSource = 'Curated demonstration content'

export const futureScope = ['Authentication', 'Live search', 'Applications', 'Analytics', 'Messaging']

export const supportedModes = ['On-site', 'Hybrid', 'Remote']

export const institutionalServices = ['Placement coordination', 'Student engagement', 'Employer partnerships', 'Course discovery']

export const employerServices = ['Talent discovery', 'Opportunity publishing', 'Campus recruitment', 'Hiring analytics']

export const learnerServices = ['Profile building', 'Job discovery', 'Learning plans', 'Career support']

export const providerServices = ['Course publishing', 'Enrollment insights', 'Cohort management', 'Certificates']

export const allServices = [...institutionalServices, ...employerServices, ...learnerServices, ...providerServices]

export const platformName = 'Future Akshitha'

export const portalNavDescription = 'Explore people, organizations and pathways.'

export const accessibilityNote = 'Designed with keyboard-friendly controls and readable contrast.'

export const implementationNote = 'Replace mock arrays with API calls without changing card components.'
