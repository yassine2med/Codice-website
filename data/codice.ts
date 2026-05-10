export const company = {
  name: 'CODICE',
  fullName: 'CODICE Technology LLC',
  founded: 2009,
  tagline: 'Innovative Technology. Exceptional Value. Outstanding Results.',
  subtagline: 'Trusted technology and operations partner to government for 16+ years. Built in Washington DC.',
  award: "Washington DC's Small Business of the Year 2025",
  certifications: ['Certified Minority-Owned Small Business', 'GSA Schedule Holder', 'SBA 8(a) Eligible'],
  revenue: '$6.4M',
  employees: 137,
  linkedinFollowers: 4423,
  logo: '/images/brand/codice-logo-full.png',
  phone: '+1 202-808-9399',
  email: 'info@codicetech.com',
  address: '1101 Vermont Avenue NW Suite 400, Washington, DC 20005',
  offices: [
    { city: 'Washington, DC', country: 'USA', address: '1101 Vermont Avenue NW Suite 400', headquarters: true },
    { city: 'Washington, DC (Branch)', country: 'USA', address: '1711 North Capitol Street NE Suite 200', headquarters: false },
    { city: 'Colombo', country: 'Sri Lanka', address: 'International Engineering & Finance Center', headquarters: false },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/codicetech',
    instagram: 'https://www.instagram.com/codicetech/',
    twitter: 'https://x.com/CodiceTech',
    facebook: 'https://web.facebook.com/CodiceTechDC',
  },
}

export const stats = [
  { value: 16, suffix: '+', label: 'Years of Excellence' },
  { value: 12, suffix: '+', label: 'Government Agencies' },
  { value: 8, suffix: '', label: 'Proprietary Products' },
  { value: 100, suffix: '%', label: 'Client Retention' },
]

export const services = [
  {
    id: 'software',
    title: 'Custom Software & Application Development',
    description: 'Tailored applications built for your specific mission and workflow — fast, secure, and built for government scale.',
    features: [
      'Full-stack web and mobile application development',
      'API design, development, and third-party integration',
      'Legacy system modernization and refactoring',
      'User Experience (UX) and Interface (UI) design',
      'Agile methodology and continuous delivery'
    ],
    techStack: ['React', 'Node.js', 'Python', 'Java', 'Next.js', 'Tailwind CSS'],
    icon: '/images/services/software.png',
    slug: 'software-development',
  },
  {
    id: 'permits',
    title: 'Permit System Modernization',
    description: 'Replace legacy permit systems with fast, compliant modern platforms that streamline approvals and inspections.',
    features: [
      'End-to-end permit lifecycle automation',
      'Digital plan review and parallel departmental routing',
      'Mobile-first inspection apps with offline sync',
      'Self-service contractor and citizen portals',
      'Compliance with municipal and federal regulations'
    ],
    techStack: ['PermiOne', 'Cloud Native', 'Workflow Engines', 'Mobile Apps'],
    icon: '/images/services/permits.png',
    slug: 'permit-modernization',
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Business Intelligence',
    description: 'Practical BI solutions that enable informed decisions through dashboards, reporting, and data integration.',
    features: [
      'Interactive dashboards and data visualization',
      'Enterprise data warehousing and ETL processes',
      'Predictive analytics for operational forecasting',
      'Performance metrics and KPI tracking',
      'Data governance and quality management'
    ],
    techStack: ['Tableau', 'Power BI', 'SQL', 'Data Factory', 'Python Analytics'],
    icon: '/images/services/analytics.png',
    slug: 'data-analytics',
  },
  {
    id: 'cloud',
    title: 'Cloud Migration & Modernization',
    description: 'Move from legacy infrastructure to AWS, Azure, and cloud-native systems with improved performance and compliance.',
    features: [
      'Cloud readiness assessment and strategic roadmap',
      'Seamless migration of legacy workloads to AWS/Azure',
      'Cloud-native architecture and microservices design',
      'Security hardening and FedRAMP-aligned compliance',
      'DevOps automation and CI/CD pipeline setup'
    ],
    techStack: ['AWS', 'Azure', 'Microservices', 'Docker', 'Kubernetes'],
    icon: '/images/services/cloud.png',
    slug: 'cloud-migration',
  },
  {
    id: 'security',
    title: 'IT Security & Privacy Solutions',
    description: 'Comprehensive security services incorporating compliance with industry standards for sensitive government environments.',
    features: [
      'Vulnerability assessments and penetration testing',
      'NIST/FedRAMP compliance auditing and remediation',
      'Identity and Access Management (IAM) implementation',
      'Data encryption and privacy impact assessments',
      'Continuous security monitoring and incident response'
    ],
    techStack: ['Cybersecurity', 'IAM', 'Compliance', 'Security Auditing'],
    icon: '/images/services/security.png',
    slug: 'it-security',
  },
  {
    id: 'payments',
    title: 'Payment Processing & Financial Systems',
    description: 'Specialized payment and financial platforms with statistical fraud detection and transparent audit trails.',
    features: [
      'Secure payment portal development and hosting',
      'Automated transaction processing and reconciliation',
      'Statistical fraud detection and anomaly alerts',
      'Integration with ERP and accounting systems (Oracle, QuickBooks)',
      'PCI-DSS compliant architecture and audit logging'
    ],
    techStack: ['FinTech', 'PCI-DSS', 'Fraud Analytics', 'Secure APIs'],
    icon: '/images/services/payments.png',
    slug: 'payment-systems',
  },
  {
    id: 'consulting',
    title: 'IT Consulting & Strategic Planning',
    description: 'Strategic and tactical consulting to guide your organization\'s technology decisions with measurable outcomes.',
    features: [
      'IT needs assessment and gap analysis',
      'Strategic IT roadmaps aligned with mission goals',
      'CIO-level advisory and governance support',
      'BPM optimization and operational efficiency',
      'Change management and digital transformation'
    ],
    techStack: ['Strategy', 'Governance', 'BPM', 'Agile Consulting'],
    icon: '/images/services/consulting.png',
    slug: 'it-consulting',
  },
  {
    id: 'workforce',
    title: 'Workforce Management & Administrative Support',
    description: 'IT staffing, HR systems, and administrative support solutions that streamline operations across departments.',
    features: [
      'Credentialing and provider data management',
      'Automated workflow and task management',
      'IVR and multi-channel support systems',
      'Salesforce platform integration and optimization',
      'Workforce productivity and analytics'
    ],
    techStack: ['Salesforce', 'IVR', 'Workflow Automation', 'HCM'],
    icon: '/images/services/workforce.png',
    slug: 'workforce-management',
  },
]

export const products = [
  {
    id: 'permione',
    name: 'PermiOne™',
    category: 'Permitting & Licensing',
    description: 'The definitive cloud-native platform for government permitting and licensing. PermiOne™ eliminates bureaucratic bottlenecks with intelligent workflow automation, real-time digital plan review, and a mobile-first inspection suite designed for the modern regulatory environment.',
    highlights: ['Intelligent Workflow Automation', 'Real-time Digital Plan Review', 'Mobile-first Inspection Suite', 'Cloud-Native Scalability'],
    features: [
      'Comprehensive Public Portal for citizen and contractor self-service',
      'Internal Operations Portal for staff approvals and routing',
      'Powerful Workflow Management with drag-and-drop configurability',
      'Mobile-first Inspection App with real-time sync and offline mode',
      'Integrated digital signature and fee payment processing'
    ],
    techStack: ['Cloud Native', 'Workflow Engine', 'Mobile React', 'Secure Payments'],
    logo: '/images/products/permione.png',
    showcaseImages: [
      '/images/products/showcase/permione.png',
      '/images/products/showcase/permione_2.png',
      '/images/products/showcase/permione_3.png'
    ],
    isNew: false,
    slug: 'permione',
  },
  {
    id: 'fortimind',
    name: 'FortiMind.ai™',
    category: 'AI & Compliance',
    description: 'A state-of-the-art AI regulatory intelligence engine. FortiMind.ai™ empowers government agencies with real-time monitoring of legislative changes, automated compliance tracking, and natural language research capabilities that deliver cited legal insights 90% faster than manual review.',
    highlights: ['Real-time AI Monitoring', 'Automated Compliance Tracking', 'Natural Language Legal Queries', '90% Faster Research Results'],
    features: [
      'Real-time monitoring of federal, state, and local regulatory updates',
      'AI-powered analysis and summarization of legal changes',
      'Configurable compliance dashboards and task management',
      'Predictive alerts for upcoming regulatory deadlines',
      'Natural language search across massive regulatory datasets'
    ],
    techStack: ['Python AI', 'NLP', 'Vector Databases', 'Cloud Infrastructure'],
    logo: '/images/products/fortimind.png',
    showcaseImages: [
      '/images/products/showcase/fortimind.png',
      '/images/products/showcase/fortimind_2.png',
      '/images/products/showcase/fortimind_3.png'
    ],
    isNew: true,
    slug: 'fortimind',
  },
  {
    id: 'travo',
    name: 'Travo.AI™',
    category: 'Logistics & Transportation',
    description: 'Next-generation logistics and transportation optimization. Travo.AI™ leverages advanced machine learning to provide dynamic route planning, real-time asset tracking, and predictive maintenance analytics, ensuring maximum efficiency for large-scale public transit and fleet operations.',
    highlights: ['Dynamic AI Route Optimization', 'Real-time Asset Tracking', 'Predictive Maintenance Analytics', 'Fleet Performance Metrics'],
    features: [
      'Real-time dynamic route optimization and re-routing',
      'Enterprise asset tracking and fleet management',
      'Predictive maintenance alerts based on usage data',
      'Automated scheduling and driver dispatching',
      'Comprehensive fuel efficiency and performance analytics'
    ],
    techStack: ['AI Optimization', 'GPS Integration', 'Data Science', 'Node.js'],
    logo: '/images/products/travo.png',
    showcaseImages: [
      '/images/products/showcase/travo.png',
      '/images/products/showcase/travo_2.png',
      '/images/products/showcase/travo_3.png'
    ],
    isNew: true,
    slug: 'travo',
  },
  {
    id: 'celerkost',
    name: 'CelerKost™',
    category: 'Healthcare Finance',
    description: 'Precision financial auditing and Medicaid cost reporting. CelerKost™ brings unprecedented transparency to healthcare finance with automated data validation, statistical anomaly detection for fraud prevention, and comprehensive audit trails that ensure regulatory integrity.',
    highlights: ['Automated Medicaid Reporting', 'Statistical Fraud Prevention', 'Unprecedented Audit Transparency', 'Real-time Financial Dashboards'],
    features: [
      'Automated Medicaid and Healthcare cost report generation',
      'Statistical anomaly detection for fraud and error prevention',
      'Full transparent audit trails for all financial submissions',
      'Integrated regulatory compliance and validation rules',
      'Real-time executive dashboards for spend analysis'
    ],
    techStack: ['Predictive Analytics', 'HIPAA Security', 'Cloud Data', 'Java'],
    logo: '/images/products/celerkost.png',
    showcaseImages: [
      '/images/products/showcase/celerkost.png',
      '/images/products/showcase/celerkost_2.png',
      '/images/products/showcase/celerkost_3.png'
    ],
    isNew: false,
    slug: 'celerkost',
  },
  {
    id: 'codicepay',
    name: 'CodicePay™',
    category: 'Payment Processing',
    description: 'Secure, intelligence-driven payment processing. CodicePay™ combines high-speed transaction handling with advanced statistical fraud detection and transparent trend analytics, providing government agencies with a secure and scalable financial ecosystem.',
    highlights: ['Intelligence-Driven Fraud Detection', 'High-Speed Transaction Handling', 'Transparent Payment Analytics', 'Scalable Financial Ecosystem'],
    features: [
      'Real-time transaction monitoring and anomaly detection',
      'Transparent payment trend and volume analytics',
      'Secure third-party payment gateway integrations',
      'Automated reconciliation with accounting systems',
      'Multi-device responsive management portal'
    ],
    techStack: ['FinTech', 'Data Analytics', 'Secure Gateways', 'PCI-DSS'],
    logo: '/images/products/codicepay.png',
    showcaseImages: [
      '/images/products/showcase/codicepay.png',
      '/images/products/showcase/codicepay_2.png',
      '/images/products/showcase/codicepay_3.png'
    ],
    isNew: false,
    slug: 'codicepay',
  },
  {
    id: 'celermed',
    name: 'CelerMed™',
    category: 'Healthcare Administration',
    description: 'Patient-centered healthcare administration and transition planning. CelerMed™ streamlines the Money Follows Person (MFP) lifecycle, offering detailed case documentation, expense tracking, and provider collaboration tools to ensure seamless patient transitions.',
    highlights: ['MFP Lifecycle Streamlining', 'Patient-Centered Case Documentation', 'Seamless Transition Planning', 'Provider Collaboration Tools'],
    features: [
      'Money Follows Person (MFP) case management integration',
      'Detailed transition planning and documentation',
      'End-to-end patient service and expense tracking',
      'Automated invoicing and payment reconciliation',
      'Provider collaboration and status dashboard'
    ],
    techStack: ['Health Management', 'Case Management', 'Cloud Forms', '.NET'],
    logo: '/images/products/celermed.png',
    showcaseImages: [
      '/images/products/showcase/celermed.png',
      '/images/products/showcase/celermed_2.png',
      '/images/products/showcase/celermed_3.png'
    ],
    isNew: false,
    slug: 'celermed',
  },
  {
    id: 'celercase',
    name: 'CelerCase™',
    category: 'Case Management',
    description: 'A high-performance, configurable case management system. CelerCase™ organizes complex justice and social services workflows with interactive trajectory tracking, automated action monitoring, and secure evidentiary management for mission-critical operations.',
    highlights: ['Interactive Trajectory Tracking', 'Mission-Critical Workflow Logic', 'Secure Evidentiary Management', 'Automated Action Monitoring'],
    features: [
      'Highly configurable case workflows and data fields',
      'Interactive case trajectory tracking and milestones',
      'Automated task assignments and action monitoring',
      'Secure document management and evidence tracking',
      'Comprehensive reporting and audit logs for justice systems'
    ],
    techStack: ['Case Mgmt', 'Workflow Logic', 'SQL Server', 'Cloud API'],
    logo: '/images/products/celercase.png',
    showcaseImages: [
      '/images/products/showcase/celercase.png',
      '/images/products/showcase/celercase_2.png',
      '/images/products/showcase/celercase_3.png'
    ],
    isNew: false,
    slug: 'celercase',
  },
  {
    id: 'cypms',
    name: 'CYPMS™',
    category: 'Program Management',
    description: 'The Codice Youth Program Management System (CYPMS™) is a specialized platform for tracking youth engagement, program outcomes, and administrative compliance, ensuring municipal youth services deliver measurable impact.',
    highlights: ['Youth Engagement Tracking', 'Measurable Outcome Impact', 'Administrative Compliance', 'Secure Data Handling'],
    features: [
      'Individual youth profile and participation tracking',
      'Program-specific outcome and impact measurement',
      'Administrative compliance and grant reporting',
      'Parental portal and communication module',
      'Secure data handling for sensitive minor information'
    ],
    techStack: ['Program Mgmt', 'Reporting Engine', 'Secure Forms', 'Next.js'],
    logo: '',
    showcaseImages: [
      '/images/products/showcase/cypms.png',
    ],
    isNew: false,
    slug: 'cypms',
  },
]

export const markets = [
  {
    id: 'government',
    name: 'Government Agencies',
    description: 'Serving federal and local agencies with mission-aligned technology that improves citizen services and operational efficiency.',
    details: 'From the DC Department of Buildings to the Criminal Justice Coordinating Council, we help agencies modernize legacy systems and automate complex workflows.',
    icon: 'Building2',
  },
  {
    id: 'healthcare',
    name: 'Health IT & Administration',
    description: 'Specialized solutions for healthcare agencies, including Medicaid cost reporting, patient tracking, and transition planning.',
    details: 'Our CelerMed and CelerKost platforms are built to handle the rigorous compliance and financial transparency needs of health departments.',
    icon: 'HeartPulse',
  },
  {
    id: 'education',
    name: 'Education & Public Schools',
    description: 'Technology solutions for school districts and education agencies — from data integration to IT staffing and application development.',
    details: 'We serve DC Public Schools with custom software, data systems, and IT support that keep one of the largest urban school districts running efficiently.',
    icon: 'GraduationCap',
  },
  {
    id: 'transportation',
    name: 'Transportation & Logistics',
    description: 'Optimizing the move of people and assets through AI-driven routing, scheduling, and permitting.',
    details: 'We support DOT agencies with permitting platforms like PermiOne and AI logistics with Travo.AI to reduce delays and improve public safety.',
    icon: 'Bus',
  },
  {
    id: 'public-safety',
    name: 'Public Safety & Justice',
    description: 'Tools for justice departments to track cases, manage evidence, and ensure inter-departmental coordination.',
    details: 'Our CelerCase platform provides a secure, web-based environment for managing complex case trajectories and ensuring accountability.',
    icon: 'Shield',
  },
  {
    id: 'legal',
    name: 'Legal & Regulatory Compliance',
    description: 'AI-powered regulatory intelligence and compliance tools for legal offices and regulated government entities.',
    details: 'FortiMind.ai enables legal and compliance teams to research multi-jurisdictional regulations in natural language — 90% faster than manual review.',
    icon: 'Scale',
  },
  {
    id: 'unemployment',
    name: 'Unemployment Insurance',
    description: 'Modernizing the benefits system to ensure residents get critical support fast and accurately.',
    details: 'Our 2024 launch for the DC DOES UI Benefits System is a testament to our ability to deliver large-scale, resident-facing modernization.',
    icon: 'Users',
  },
  {
    id: 'facilities',
    name: 'Facilities & Infrastructure',
    description: 'Managing the life-cycle of public facilities and infrastructure with permitting and inspections.',
    details: 'We provide end-to-end permit modernization for construction and infrastructure agencies, ensuring safety and regulatory compliance.',
    icon: 'Hammer',
  },
  {
    id: 'financial',
    name: 'Financial Services & Payments',
    description: 'Secure payment processing and financial platforms with fraud detection and full audit transparency for government finance.',
    details: 'CodicePay and CelerKost bring government-grade fraud prevention and reconciliation to payment operations across agencies.',
    icon: 'DollarSign',
  },
  {
    id: 'environment',
    name: 'Environmental & Utility Services',
    description: 'Digital permitting and compliance platforms for environmental agencies managing inspections and regulatory reporting.',
    details: 'Our permitting and inspection tools streamline environmental compliance workflows for utility and environmental regulatory agencies.',
    icon: 'Leaf',
  },
  {
    id: 'hr-workforce',
    name: 'Human Resources & Workforce',
    description: 'HR systems and workforce management platforms built for the operational demands of government agencies.',
    details: 'From credentialing and provider data management to IVR support systems and Salesforce integration, we streamline HR at scale.',
    icon: 'Users2',
  },
]

export const clients = [
  {
    category: 'Government Agencies',
    items: [
      { name: 'DC Department of Buildings (DOB)', logo: '/images/clients/client-220.png' },
      { name: 'DC Department of Transportation (DDOT)', logo: '/images/clients/client-221.png' },
      { name: 'DC Department of General Services (DGS)', logo: '/images/clients/client-222.png' },
      { name: 'DC Public Schools (DCPS)', logo: '/images/clients/client-223.png' },
      { name: 'DC Department of Employment Services (DOES)', logo: '/images/clients/client-224.png' },
      { name: 'DC Department of Health Care Finance (DHCF)', logo: '/images/clients/client-225.png' },
      { name: 'Metropolitan Police Department (MPD)', logo: '/images/clients/client-229.png' },
      { name: 'Office of the Attorney General (OAG)', logo: '/images/clients/client-230.png' },
      { name: 'Criminal Justice Coordinating Council (CJCC)', logo: '/images/clients/client-227.png' },
      { name: 'DC Child and Family Services Agency (CFSA)', logo: '/images/clients/client-228.png' },
      { name: 'Office of the Chief Technology Officer (OCTO)', logo: '/images/clients/client-231.png' },
    ]
  },
  {
    category: 'Industry & Corporate Partners',
    items: [
      { name: 'Geographic Solutions', logo: '/images/clients/client-gra.png' },
      { name: 'Public Consulting Group (PCG)', logo: '/images/clients/client-pub.png' },
      { name: 'UKG (Ultimate Kronos Group)', logo: '/images/clients/client-dl1.png' },
      { name: 'Salesforce', logo: '/images/clients/client-dl2.png' },
      { name: 'ICOSMOS Corp', logo: '/images/clients/client-232.png' },
      { name: 'Gide Public Affairs', logo: '/images/clients/client-233.png' },
    ]
  }
]

export const clientLogos = [
  '/images/clients/client-dl1.png',
  '/images/clients/client-dl2.png',
  '/images/clients/client-dl3.png',
  '/images/clients/client-dl4.png',
  '/images/clients/client-dl5.png',
  '/images/clients/client-220.png',
  '/images/clients/client-221.png',
  '/images/clients/client-222.png',
  '/images/clients/client-223.png',
  '/images/clients/client-224.png',
  '/images/clients/client-225.png',
  '/images/clients/client-227.png',
  '/images/clients/client-228.png',
  '/images/clients/client-229.png',
  '/images/clients/client-230.png',
  '/images/clients/client-231.png',
  '/images/clients/client-232.png',
  '/images/clients/client-233.png',
  '/images/clients/client-234.png',
  '/images/clients/client-235.png',
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
    bio: '20+ years in healthcare and government technology. Founded CODICE in 2009 with a vision to modernize government IT from the ground up.',
    fullBio: 'Dash Kiridena is the Founder and President of CODICE Technology LLC, a Washington DC-based government technology firm he established in 2009 with a singular vision: to modernize public-sector IT with the same rigor and innovation applied to the private sector.\n\nWith more than 20 years of experience spanning healthcare IT, enterprise software, and government operations, Dash has led CODICE through 16 consecutive years of growth — building an organization trusted by over 12 Washington DC agencies including DDOT, DOH, DOES, DCRA, OAG, and DHCF. Under his leadership, CODICE has achieved a 100% client retention rate and expanded from a services firm into a proprietary product company with 8 purpose-built government platforms.\n\nDash is known for his hands-on approach to delivery — working directly with agency stakeholders to understand mission requirements, compliance constraints, and operational realities. His philosophy centers on building systems that outlast political cycles and deliver continuous value to the communities they serve.\n\nIn 2025, CODICE was named Washington DC\'s Small Business of the Year, a recognition Dash attributes entirely to his team\'s commitment to "high-fidelity government technology — on time, on budget, with zero compromise."',
    education: 'MBA, Johns Hopkins University · BA Economics, Clarion University',
    photo: '/images/team/dash.jpg',
  },
  {
    name: 'Emmash Sudusinghe',
    title: 'Chief Financial Officer',
    bio: 'CPA and CMA with deep expertise in government financial operations and compliance auditing.',
    fullBio: 'Emmash Sudusinghe serves as Chief Financial Officer of CODICE Technology, where he oversees all financial operations, strategic planning, government contract compliance, and corporate governance for the firm.\n\nA Certified Public Accountant (CPA) and Certified Management Accountant (CMA), Emmash brings deep expertise in government financial management, GAAP/GASB compliance, and the specific reporting requirements of DC and federal contracting environments. His background spans cost accounting, indirect rate structures, DCAA audit readiness, and financial systems implementation for government-facing organizations.\n\nAt CODICE, Emmash has been instrumental in scaling the company\'s financial infrastructure to support multi-year government contracts, GSA Schedule administration, and the financial rigor required by agency clients. He has led CODICE through multiple audit cycles and contract renewals, maintaining the organization\'s strong compliance posture.\n\nBefore joining CODICE, Emmash held senior finance roles in both the public and private sectors, developing a reputation for translating complex financial data into strategic insight for executive leadership.',
    education: "Master's Finance, American University · BS Accounting, University of Maryland Eastern Shore",
    photo: '/images/team/emmash.jpg',
  },
  {
    name: 'Ashanthi Kiridena',
    title: 'VP Business Development & Human Capital',
    bio: 'Leads business growth strategies and human resources, ensuring Codice attracts top-tier mission-driven talent.',
    fullBio: 'Ashanthi Kiridena is CODICE\'s Vice President of Business Development and Human Capital, where she drives the firm\'s growth strategy while building the people infrastructure that supports it.\n\nIn her business development role, Ashanthi leads CODICE\'s pursuit of new government partnerships, manages key agency relationships, and oversees proposal development and competitive positioning. She has been central to expanding CODICE\'s footprint across Washington DC\'s government ecosystem — identifying opportunities where CODICE\'s proprietary platforms and services can deliver the most mission impact.\n\nOn the human capital side, Ashanthi oversees all aspects of talent acquisition, employee development, and organizational culture. She has built a team of 137 professionals who share CODICE\'s commitment to excellence in public-sector technology — engineers, analysts, project managers, and delivery specialists who are passionate about the work they do for government.\n\nAshanthi is also a champion of CODICE\'s minority-owned small business identity, working to ensure the company reflects the diversity of the communities it serves. Her dual role bridges strategy and people, making her one of the most cross-functional leaders on the executive team.',
    education: 'BA Business Administration',
    photo: '/images/team/ashanthi.jpg',
  },
  {
    name: 'Sully Ayubi',
    title: 'Chief Information Officer',
    bio: '20+ years in enterprise IT strategy and delivery. Expert in cloud migration and security modernization.',
    fullBio: 'Sully Ayubi is CODICE\'s Chief Information Officer, responsible for the firm\'s overall technology strategy, enterprise architecture, cybersecurity posture, and the technical quality of every solution delivered to government clients.\n\nWith more than 20 years of experience in enterprise IT, Sully has led large-scale technology programs across federal and municipal government environments. His expertise spans cloud migration (AWS and Azure), FedRAMP and FISMA-aligned security frameworks, DevSecOps implementation, and the modernization of legacy government infrastructure.\n\nAt CODICE, Sully sets the architectural standards and technical direction for all 8 proprietary platforms and serves as the senior technical authority for complex agency engagements. He has guided CODICE\'s evolution from on-premise delivery to a cloud-native, multi-tenant platform model — enabling the firm to scale across agencies without sacrificing security or compliance.\n\nBefore CODICE, Sully held CTO and enterprise architect roles across the DC technology community, earning a reputation for bridging the gap between visionary technology strategy and the practical realities of government IT procurement and operations.',
    education: 'MS Technology Management · BS IT, George Mason University',
    photo: '/images/team/sully.jpg',
  },
]

export const techStack = [
  'React', 'Angular', 'Vue', 'Node.js', 'TypeScript',
  'Spring', 'Laravel', 'MySQL', 'GitHub', 'AWS',
  'Azure', 'Oracle', 'Salesforce', 'UKG', 'Genesys',
]

export const caseStudies = [
  {
    client: 'DC Dept. of Transportation (DDOT)',
    product: 'PermiOne™',
    challenge: 'A legacy permitting infrastructure causing multi-week delays, significant compliance gaps, and fragmented cross-departmental communication.',
    solution: 'Deployment of PermiOne™ — an enterprise-grade, cloud-agnostic permitting platform featuring automated routing, real-time digital plan review, and a mobile inspection suite.',
    outcome: 'Realized a fully digital, 100% paperless permit lifecycle with accelerated processing times and unified adoption across all DC transportation infrastructure.',
    metric: '100% Digital',
  },
  {
    client: 'DC Dept. of Health Care Finance (DHCF)',
    product: 'CelerKost™',
    challenge: 'Pervasive Medicaid cost reporting errors resulting in substantial fraud exposure, audit risks, and critical transparency gaps.',
    solution: 'Implementation of CelerKost™ with integrated data validation, advanced statistical anomaly detection, and immutable real-time audit trails.',
    outcome: 'Eliminated systemic reporting errors, drastically reduced fraud exposure, and ensured 100% regulatory compliance for the District’s Medicaid programs.',
    metric: 'Fraud Eliminated',
  },
  {
    client: 'Office of the Attorney General (OAG)',
    product: 'FortiMind.ai™',
    challenge: 'Manual regulatory research processes that could not maintain pace with the rapid evolution of multi-jurisdictional legal requirements.',
    solution: 'Strategic deployment of FortiMind.ai™ for AI-powered natural language regulatory intelligence across federal, state, and local law.',
    outcome: 'Achieved 90% faster legal research efficiency, empowering compliance and legal staff to execute mission-critical research with unprecedented precision.',
    metric: '90% Faster',
  },
  {
    client: 'DC Dept. of Employment Services (DOES)',
    product: 'Custom Software Development',
    challenge: 'An obsolete Unemployment Insurance Benefits System creating critical processing delays and service errors for thousands of DC residents.',
    solution: 'Development and launch of a modernized, high-performance cloud platform designed specifically for the DC DOES UI Benefits System.',
    outcome: 'Dramatic improvement in processing velocity and resident experience, providing a stable and scalable foundation for the District’s unemployment services.',
    metric: 'Launched 2024',
  },
]

export const news = [
  {
    title: 'CODICE Named Washington DC Small Business of the Year 2025',
    date: 'January 2025',
    excerpt: 'CODICE Technology recognized for excellence in government technology innovation and outstanding client service across DC agencies.',
    image: '/images/news/news-1.jpg',
    slug: 'https://codicetech.com/washington-dcs-small-business-of-the-year/',
  },
  {
    title: 'FortiMind.ai Launches: AI-Powered Regulatory Intelligence for Government',
    date: 'November 2024',
    excerpt: 'Our newest product brings real-time AI regulatory monitoring to federal and DC agencies — delivering cited answers 90% faster than manual research.',
    image: '/images/news/news-2.jpg',
    slug: 'https://codicetech.com/fortimindlaunch/',
  },
  {
    title: 'CODICE Modernizes DC DOES Unemployment Insurance Benefits System',
    date: 'February 2024',
    excerpt: 'CODICE delivered a landmark modernization of the DC Department of Employment Services UI Benefits System — improving processing times for thousands of DC residents.',
    image: '/images/news/news-3.jpg',
    slug: 'https://codicetech.com/news-events/',
  },
]

export const navigation = [
  {
    title: 'HOME',
    items: [
      { label: 'Home', href: '/', description: 'Return to the Codice homepage.' },
    ]
  },
  {
    title: 'COMPANY',
    items: [
      { label: 'Our Story', href: '/our-story', description: 'Our 16-year journey in government tech.' },
      { label: 'Clients & Partners', href: '/clients', description: '17 DC agencies and industry partners we serve.' },
      { label: 'Case Studies', href: '/case-studies', description: 'Real outcomes for real government agencies.' },
    ]
  },
  {
    title: 'SOLUTIONS',
    sections: [
      {
        title: 'Services',
        items: [
          { label: 'Services Overview', href: '/services', description: 'Explore our end-to-end IT service offerings.' },
          ...services.map(s => ({ label: s.title, href: '/services/' + s.slug, description: s.description })),
        ]
      },
      {
        title: 'Products',
        items: [
          { label: 'Products Overview', href: '/products', description: 'Discover our proprietary software platforms.' },
          ...products.map(p => ({ label: p.name, href: '/products/' + p.slug, description: p.description })),
        ]
      },
      {
        title: 'Markets',
        items: [
          { label: 'Markets Overview', href: '/markets', description: 'Sectors we serve across the public sector.' },
          ...markets.map(m => ({ label: m.name, href: '/markets/#' + m.id, description: m.description })),
        ]
      }
    ]
  },
  {
    title: 'CONNECT',
    items: [
      { label: 'Articles', href: '/articles', description: 'Deep dives into tech trends and solutions.' },
      { label: 'Capability Statement', href: '/capability', description: 'Certifications, NAICS codes, and past performance.' },
      { label: 'Careers', href: '/careers', description: 'Join a team building technology for public service.' },
      { label: 'News & Events', href: '/news', description: 'Latest updates, launches, and milestones.' },
      { label: 'Contact', href: '/contact', description: 'Get in touch for your next project.' },
    ]
  }
];
