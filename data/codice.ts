export const company = {
  name: 'CODICE',
  fullName: 'CODICE Technology LLC',
  founded: 2009,
  tagline: 'Innovative Technology. Exceptional Value. Outstanding Results.',
  subtagline: 'Trusted technology and operations partner to government for 16+ years. Built in Washington DC.',
  award: "Washington DC's Small Business of the Year 2025",
  logo: '/images/brand/codice-logo.png',
  phone: '+1 202-808-9399',
  email: 'info@codicetech.com',
  address: '1101 Vermont Avenue NW Suite 400, Washington, DC 20005',
  offices: [
    { city: 'Washington, DC', country: 'USA', headquarters: true },
    { city: 'Colombo', country: 'Sri Lanka', headquarters: false },
  ],
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
  {
    id: 'software',
    title: 'Custom Software & Application Development',
    description: 'Tailored applications built for your specific mission and workflow — fast, secure, and built for government scale.',
    icon: '/images/services/software.png',
    slug: '/custom-software-and-application-development/',
  },
  {
    id: 'permits',
    title: 'Permit System Modernization',
    description: 'Replace legacy permit systems with fast, compliant modern platforms that streamline approvals and inspections.',
    icon: '/images/services/permits.png',
    slug: '/permit-system-modernization/',
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Business Intelligence',
    description: 'Practical BI solutions that enable informed decisions through dashboards, reporting, and data integration.',
    icon: '/images/services/analytics.png',
    slug: '/data-analytics-and-business-intelligence/',
  },
  {
    id: 'cloud',
    title: 'Cloud Migration & Modernization',
    description: 'Move from legacy infrastructure to AWS, Azure, and cloud-native systems with improved performance and compliance.',
    icon: '/images/services/cloud.png',
    slug: '/cloud-migration-and-modernization/',
  },
  {
    id: 'security',
    title: 'IT Security & Privacy Solutions',
    description: 'Comprehensive security services incorporating compliance with industry standards for sensitive government environments.',
    icon: '/images/services/security.png',
    slug: '/it-security-and-privacy-solutions/',
  },
  {
    id: 'payments',
    title: 'Payment Processing & Financial Systems',
    description: 'Specialized payment and financial platforms with statistical fraud detection and transparent audit trails.',
    icon: '/images/services/payments.png',
    slug: '/payment-processing-and-financial-systems/',
  },
  {
    id: 'consulting',
    title: 'IT Consulting & Strategic Planning',
    description: 'Strategic and tactical consulting to guide your organization\'s technology decisions with measurable outcomes.',
    icon: '/images/services/consulting.png',
    slug: '/it-consulting-and-strategic-planning/',
  },
  {
    id: 'workforce',
    title: 'Workforce Management & Administrative Support',
    description: 'IT staffing, HR systems, and administrative support solutions that streamline operations across departments.',
    icon: '/images/services/workforce.png',
    slug: '/workforce-management-and-administrative-support-solutions/',
  },
]

export const products = [
  {
    id: 'permione',
    name: 'PermiOne',
    category: 'Permit Modernization',
    description: 'A cloud-agnostic permitting and licensing platform that modernizes approval processes for government agencies. Features automated routing, parallel reviews, mobile inspections, and workflow configuration.',
    highlights: ['Automated routing', 'Mobile inspections', 'Cross-department collaboration', 'Decision-ready dashboards'],
    logo: '/images/products/permione.png',
    isNew: false,
    slug: '/products/#permione',
  },
  {
    id: 'fortimind',
    name: 'FortiMind.ai',
    category: 'AI Regulatory Intelligence',
    description: 'An AI legal compliance assistant providing instant access to federal, state, municipal, and international regulations. Delivers 90% faster research times through natural language queries.',
    highlights: ['90% faster research', 'Multi-jurisdictional queries', 'Natural language interface', 'Real-time regulatory updates'],
    logo: null,
    isNew: true,
    slug: '/products/#fortimind',
  },
  {
    id: 'travo',
    name: 'Travo AI™',
    category: 'Assistive Technology',
    description: 'A digital assistive technology assessment platform simplifying device and service recommendations for individuals with disabilities across education, vision, hearing, senior care, and physical disability categories.',
    highlights: ['AI-powered recommendations', 'Order management', 'Expense tracking', 'Multi-category support'],
    logo: '/images/products/travo.png',
    isNew: true,
    slug: '/products/#travo',
  },
  {
    id: 'celerkost',
    name: 'CelerKost™',
    category: 'Healthcare Finance',
    description: 'An electronic cost reporting system automating Medicaid cost reporting for healthcare providers and state agencies. Cloud-based, secure, and compliant with healthcare IT regulations.',
    highlights: ['Automated Medicaid reporting', 'Fraud prevention', 'Regulatory compliance', 'Cloud-based & secure'],
    logo: '/images/products/celerkost.png',
    isNew: false,
    slug: '/products/#celerkost',
  },
  {
    id: 'codicepay',
    name: 'CodicePay™',
    category: 'Payment Processing',
    description: 'An electronic payment tracker using statistical analysis to reduce fraud. Provides analytics with transparent payment trend tracking accessible across any device.',
    highlights: ['Fraud detection', 'Statistical analysis', 'Payment trend tracking', 'Cross-device access'],
    logo: '/images/products/codicepay.png',
    isNew: false,
    slug: '/products/#codicepay',
  },
  {
    id: 'celermed',
    name: 'CelerMed™',
    category: 'Healthcare Administration',
    description: 'A patient-centered financial platform tracking services, expenses, invoices, and payments. Supports Money Follows Person case management documentation and transition planning.',
    highlights: ['Patient financial tracking', 'MFP case management', 'Transition planning', 'Invoice management'],
    logo: '/images/products/celermed.png',
    isNew: false,
    slug: '/products/#celermed',
  },
  {
    id: 'celercase',
    name: 'CelerCase™',
    category: 'Case Management',
    description: 'A configurable web-based case management system organizing complaints and cases with trajectory tracking and action monitoring for justice, social services, and beyond.',
    highlights: ['Configurable workflows', 'Trajectory tracking', 'Action monitoring', 'Web-based access'],
    logo: '/images/products/celercase.png',
    isNew: false,
    slug: '/products/#celercase',
  },
  {
    id: 'cypms',
    name: 'CYPMS',
    category: 'Youth Program Management',
    description: 'The CODICE Youth Program Management System supporting youth employment and exploration programs through four portals for youth, hosts, administration, and parents.',
    highlights: ['4 role-based portals', 'Youth employment tracking', 'Host management', 'Parent visibility'],
    logo: null,
    isNew: false,
    slug: '/products/#cypms',
  },
]

export const markets = [
  { id: 'gov', name: 'Government Agencies', description: 'IT solutions for federal, state, and local agencies including Salesforce, Oracle cloud, and permitting systems.', icon: '🏛️' },
  { id: 'safety', name: 'Public Safety & Justice', description: 'Automating state justice reporting and supporting law enforcement through data management and process automation.', icon: '⚖️' },
  { id: 'education', name: 'Education & Public Schools', description: 'Custom applications, data integration, and IT staffing for institutions like DC Public Schools.', icon: '🎓' },
  { id: 'environment', name: 'Environmental & Utility Services', description: 'Cloud migration and ERP modernization for utility companies and environmental agencies.', icon: '🌿' },
  { id: 'transport', name: 'Transportation & Infrastructure', description: 'Modernized permitting systems for transportation departments that streamline inspections and compliance.', icon: '🚇' },
  { id: 'finance', name: 'Financial Services & Payment Processing', description: 'Digital transformation enabling organizations to move from legacy financial systems to modern platforms.', icon: '💳' },
  { id: 'cloud', name: 'Cloud & Digital Transformation', description: 'Governance, Risk, and Compliance suite for evaluating risks and ensuring standards compliance across enterprises.', icon: '☁️' },
  { id: 'hr', name: 'HR & Workforce Management', description: 'IT staffing and resource scaling across departments including network security and help desk support.', icon: '👥' },
  { id: 'legal', name: 'Legal & Regulatory Compliance', description: 'IT consulting for regulatory sectors with expertise in system architecture and cloud engineering.', icon: '📋' },
  { id: 'healthcare', name: 'Healthcare & Social Services', description: 'Medicaid provider data management and child support system modernization for large-scale compliant environments.', icon: '🏥' },
]

export const clients = [
  'DC Department of Health Care Finance',
  'DC Department of General Services',
  'DC Public Schools',
  'Metropolitan Police Department',
  'Office of the Chief Technology Officer',
  'Office of the Attorney General',
  'DC Department of Transportation',
  'Metro St. Louis Sewer District',
]

export const clientLogos = [
  '/images/clients/client-220.png',
  '/images/clients/client-221.png',
  '/images/clients/client-222.png',
  '/images/clients/client-223.png',
  '/images/clients/client-224.png',
  '/images/clients/client-225.png',
  '/images/clients/client-226.png',
  '/images/clients/client-227.png',
  '/images/clients/client-228.png',
  '/images/clients/client-229.png',
  '/images/clients/client-230.png',
  '/images/clients/client-231.png',
  '/images/clients/client-232.png',
  '/images/clients/client-233.png',
  '/images/clients/client-234.png',
  '/images/clients/client-235.png',
  '/images/clients/client-dl1.png',
  '/images/clients/client-dl2.png',
  '/images/clients/client-dl3.png',
  '/images/clients/client-dl4.png',
  '/images/clients/client-dl5.png',
  '/images/clients/client-gra.png',
  '/images/clients/client-pub.png',
]

export const industryPartnerLogos = [
  '/images/clients/client-236.png',
  '/images/clients/client-237.png',
  '/images/clients/client-238.png',
  '/images/clients/client-239.png',
  '/images/clients/client-240.png',
  '/images/clients/client-241.png',
]

export const testimonials = [
  {
    quote: "CODICE's technical team is made of truly straight shooters that can thoroughly assess an issue and provide a viable solution in no time.",
    name: 'Marco Sernesi',
    title: 'Managing Director',
    company: 'ICOSMOS Corp',
    photo: '/images/testimonials/marco.jpg',
  },
  {
    quote: "We worked with CODICE on a contract for the D.C. Department of Health. The engagement was smooth — we met all contract requirements and the client was very pleased with the work.",
    name: 'Maria Perrin',
    title: 'Principal',
    company: 'Gide Public Affairs',
    photo: '/images/testimonials/maria.jpg',
  },
  {
    quote: "CODICE has been very much flexible with financial operations, time management, and processing of potential technicians with great timeliness and cooperation.",
    name: 'Jimmy Ieng',
    title: 'IT Manager',
    company: 'Office of the Chief Technology Officer',
    photo: '/images/testimonials/jimmy.jpg',
  },
]

export const team = [
  {
    name: 'Dash Kiridena',
    title: 'Founder & President',
    bio: '20+ years in healthcare and government technology.',
    education: 'MBA, Johns Hopkins University · BA Economics, Clarion University',
    photo: '/images/team/dash.png',
  },
  {
    name: 'Emmash Sudusignhe',
    title: 'Chief Financial Officer',
    bio: 'CPA and CMA with deep expertise in government financial operations.',
    education: "Master's Finance, American University · BS Accounting, University of Maryland Eastern Shore",
    photo: '/images/team/emmash.png',
  },
  {
    name: 'Hiranya Samarasekera',
    title: 'SVP of Engineering',
    bio: '20+ years IT experience. Former CTO for the Sri Lanka government. PhD candidate.',
    education: 'PhD candidate, University of Oslo · PMP, CSPO certified',
    photo: '/images/team/hiranya.png',
  },
  {
    name: 'Sully Ayubi',
    title: 'Chief Information Officer',
    bio: '20+ years in enterprise IT strategy and delivery.',
    education: 'MS Technology Management · BS IT, George Mason University',
    photo: '/images/team/sully.png',
  },
  {
    name: 'Ashanthi Kiridena',
    title: 'VP Business Development & Human Capital',
    bio: '30+ years of administrative, management, and housing expertise.',
    education: '',
    photo: '/images/team/ashanthi.png',
  },
  {
    name: 'Dinesh Babu',
    title: 'Project Management & Delivery Director',
    bio: '15+ years in operational improvement and project delivery.',
    education: 'PMP · CSM · AWS Cloud Practitioner',
    photo: '/images/team/dinesh.png',
  },
]

export const techStack = [
  'React', 'Angular', 'Vue', 'Node.js', 'TypeScript',
  'Spring', 'Laravel', 'MySQL', 'GitHub', 'AWS',
  'Azure', 'Oracle', 'Salesforce', 'UKG', 'Genesys',
]

export const caseStudies = [
  {
    client: 'DC Dept. of Transportation',
    product: 'PermiOne',
    challenge: 'Outdated legacy permitting system causing delays and compliance gaps across departments.',
    solution: 'Deployed PermiOne — a cloud-agnostic permitting platform with automated routing and mobile inspections.',
    outcome: 'Faster permit processing, full compliance, and cross-department adoption.',
    metric: '100% digital',
  },
  {
    client: 'State Healthcare Agency',
    product: 'CelerKost™',
    challenge: 'Medicaid cost reporting errors creating fraud exposure and transparency gaps.',
    solution: 'Implemented CelerKost with automated validation and real-time audit trails.',
    outcome: 'Significant fraud reduction and improved regulatory compliance.',
    metric: 'Fraud eliminated',
  },
  {
    client: 'Government Legal Office',
    product: 'FortiMind.ai',
    challenge: 'Manual regulatory research unable to keep pace with evolving multi-jurisdictional requirements.',
    solution: 'Deployed FortiMind.ai for AI-powered natural language regulatory queries across federal and local law.',
    outcome: '90% faster research times, enabling compliance without deep legal expertise.',
    metric: '90% faster',
  },
]

export const news = [
  {
    title: 'CODICE Named Washington DC Small Business of the Year 2025',
    date: '2025-01-01',
    excerpt: 'CODICE Technology recognized for excellence in government technology innovation and outstanding client service.',
    image: '/images/news/news-1.jpg',
    slug: '#',
  },
  {
    title: 'FortiMind.ai Launches: AI-Powered Regulatory Intelligence for Government',
    date: '2024-09-01',
    excerpt: 'Our newest product brings real-time AI regulatory monitoring to federal and DC agencies — 90% faster research times.',
    image: '/images/news/news-2.jpg',
    slug: '#',
  },
  {
    title: 'CODICE Celebrates 16 Years of Government Technology Leadership',
    date: '2025-01-09',
    excerpt: '16 years, 12+ agencies, and 100% client retention — a milestone worth celebrating.',
    image: '/images/news/news-3.jpg',
    slug: '#',
  },
]
