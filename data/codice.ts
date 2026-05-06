export const company = {
  name: 'CODICE',
  fullName: 'CODICE Technology LLC',
  founded: 2009,
  tagline: 'Transforming Government Through Technology',
  subtagline: '16 years. 12+ agencies. 100% client retention. Built in Washington DC.',
  award: "Washington DC's Small Business of the Year",
  phone: '+1 202-808-9399',
  email: 'info@codicetech.com',
  address: '1101 Vermont Avenue NW Suite 400, Washington, DC 20005',
  social: {
    linkedin: 'https://www.linkedin.com/company/codicetech',
    instagram: 'https://www.instagram.com/codicetech/',
    twitter: 'https://x.com/CodiceTech',
    facebook: 'https://web.facebook.com/CodiceTechDC',
  },
}

export const stats = [
  { value: 16, suffix: '+', label: 'Years of Experience' },
  { value: 12, suffix: '+', label: 'Government Agencies' },
  { value: 8, suffix: '', label: 'Proprietary Products' },
  { value: 100, suffix: '%', label: 'Client Retention' },
]

export const services = [
  { id: 'software', title: 'Custom Software Development', description: 'Tailored applications built for your specific mission and workflow.', slug: '/custom-software-and-application-development/' },
  { id: 'permits', title: 'Permit System Modernization', description: 'Replace legacy permit systems with fast, compliant modern platforms.', slug: '/permit-system-modernization/' },
  { id: 'analytics', title: 'Data Analytics & Business Intelligence', description: 'Decision-enabling dashboards and BI solutions for government data.', slug: '/data-analytics-and-business-intelligence/' },
  { id: 'cloud', title: 'Cloud Migration & Modernization', description: 'Move from legacy infrastructure to AWS, Azure, and cloud-native systems.', slug: '/cloud-migration-and-modernization/' },
  { id: 'security', title: 'IT Security & Privacy Solutions', description: 'Compliance-first security services for sensitive government environments.', slug: '/it-security-and-privacy-solutions/' },
  { id: 'payments', title: 'Payment Processing & Financial Systems', description: 'Automated payment platforms for government agencies and healthcare.', slug: '/payment-processing-and-financial-systems/' },
  { id: 'consulting', title: 'IT Consulting & Strategic Planning', description: 'Strategic and tactical technology consulting with measurable outcomes.', slug: '/it-consulting-and-strategic-planning/' },
  { id: 'workforce', title: 'Workforce Management & Support', description: 'IT staffing, HR systems, and administrative support solutions.', slug: '/workforce-management-and-administrative-support-solutions/' },
]

export const products = [
  { id: 'fortimind', name: 'FortiMind.ai', category: 'AI Regulatory Intelligence', description: 'AI-driven platform for regulatory compliance and intelligence.', isNew: true, slug: '/products/#fortimind' },
  { id: 'permione', name: 'PermiOne', category: 'Permit Modernization', description: 'End-to-end digital permitting for government agencies.', isNew: false, slug: '/products/#permione' },
  { id: 'celerkost', name: 'CelerKost', category: 'Healthcare Finance', description: 'Medicaid cost reporting that prevents fraud and enhances transparency.', isNew: false, slug: '/products/#celerkost' },
  { id: 'codicepay', name: 'CodicePay', category: 'Payment Processing', description: 'Automated payment solutions for public sector workflows.', isNew: false, slug: '/products/#codicepay' },
  { id: 'celermed', name: 'CelerMed', category: 'Healthcare Admin', description: 'Healthcare administration built for government health programs.', isNew: false, slug: '/products/#celermed' },
  { id: 'celercase', name: 'CelerCase', category: 'Case Management', description: 'Digital case management for justice, social services, and beyond.', isNew: false, slug: '/products/#celercase' },
  { id: 'travo', name: 'Travo AI', category: 'Transportation AI', description: 'AI-powered optimization for transportation and transit systems.', isNew: false, slug: '/products/#travo' },
  { id: 'cypms', name: 'CYPMS', category: 'Public Management', description: 'Youth and public program management for government agencies.', isNew: false, slug: '/products/#cypms' },
]

export const markets = [
  { id: 'gov', name: 'Government Agencies', icon: '🏛️' },
  { id: 'safety', name: 'Public Safety & Justice', icon: '⚖️' },
  { id: 'education', name: 'Education Systems', icon: '🎓' },
  { id: 'healthcare', name: 'Healthcare & Social Services', icon: '🏥' },
  { id: 'transport', name: 'Transportation & Infrastructure', icon: '🚇' },
  { id: 'environment', name: 'Environmental & Utility', icon: '🌿' },
  { id: 'finance', name: 'Financial Services', icon: '💳' },
  { id: 'hr', name: 'HR & Workforce Management', icon: '👥' },
  { id: 'legal', name: 'Legal & Regulatory Compliance', icon: '📋' },
]

export const clients = [
  'DC Department of Health',
  'DC Department of General Services',
  'DC Public Schools',
  'Metropolitan Police Department',
  'Office of the Chief Technology Officer',
  'Office of the Attorney General',
  'DC Department of Transportation',
  'Metro St. Louis Sewer District',
]

export const testimonials = [
  {
    quote: "CODICE's technical team can thoroughly assess an issue and provide a viable solution in no time.",
    name: 'Marco Sernesi',
    title: 'Managing Director',
    company: 'ICOSMOS Corp',
  },
  {
    quote: "The engagement was smooth — we met all contract requirements and the client was very pleased.",
    name: 'Maria Perrin',
    title: 'Principal',
    company: 'Gide Public Affairs',
  },
  {
    quote: "CODICE has been very flexible with financial operations, time management, and great timeliness and cooperation.",
    name: 'Jimmy Ieng',
    title: 'IT Manager',
    company: 'Office of the Chief Technology Officer',
  },
]

export const techStack = [
  'React', 'Angular', 'Vue', 'Node.js', 'TypeScript',
  'Spring', 'Laravel', 'MySQL', 'GitHub', 'AWS',
  'Azure', 'Oracle', 'UKG', 'Genesys',
]

export const caseStudies = [
  {
    client: 'DC Dept. of Transportation',
    product: 'PermiOne',
    challenge: 'Outdated legacy permitting system causing delays and compliance issues.',
    solution: 'Deployed PermiOne — a modern digital permitting platform built for government scale.',
    outcome: 'Faster permit processing, full compliance, agency-wide adoption.',
    metric: '100% digital',
  },
  {
    client: 'Federal Healthcare Agency',
    product: 'CelerKost',
    challenge: 'Medicaid cost reporting errors creating fraud exposure and transparency gaps.',
    solution: 'Implemented CelerKost with automated validation and real-time audit trails.',
    outcome: 'Significant fraud reduction, improved regulatory compliance.',
    metric: 'Fraud eliminated',
  },
  {
    client: 'Government Agency',
    product: 'FortiMind.ai',
    challenge: 'Manual regulatory intelligence processes unable to keep pace with changing requirements.',
    solution: 'Deployed FortiMind.ai — AI-driven platform for real-time regulatory monitoring.',
    outcome: 'Automated compliance intelligence, faster response to regulatory changes.',
    metric: 'AI-powered',
  },
]

export const news = [
  {
    title: 'CODICE Named Washington DC Small Business of the Year',
    date: '2024-03-15',
    excerpt: 'CODICE Technology recognized for excellence in government technology innovation and client service.',
    slug: '#',
  },
  {
    title: 'FortiMind.ai Launches: AI-Powered Regulatory Intelligence for Government',
    date: '2024-02-01',
    excerpt: 'Our newest product brings real-time AI regulatory monitoring to federal and DC agencies.',
    slug: '#',
  },
  {
    title: 'CODICE Celebrates 16 Years of Government Technology Leadership',
    date: '2024-01-10',
    excerpt: '16 years, 12+ agencies, and 100% client retention — a milestone worth celebrating.',
    slug: '#',
  },
]
