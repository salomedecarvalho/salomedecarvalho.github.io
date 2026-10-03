import type { Tone } from './projects'

export const profile = {
  name: 'Salomé de Carvalho',
  firstName: 'Salomé',
  lastName: 'de Carvalho',
  role: 'Product & UX/UI Designer',
  location: 'Wiesbaden, Germany',
  email: 'salomedecarvalho.design@gmail.com',
  linkedin: 'https://www.linkedin.com/in/salomedecarvalho',
  instagram: 'https://www.instagram.com/',
  /** Two rows, each stretched to the same width. */
  hobbies: [
    ['Cooking', 'Horror & thriller books'],
    ['Gaming', 'Cycling', 'House plants'],
  ],
  hobbiesText: [
    "Outside of Figma, I cook like there's always someone coming over. I find something genuinely satisfying about starting with a pile of random ingredients and turning them into something that actually works! Now that I think about it, it's not that different from design.",
    "When I'm not doing any of that, you can probably find me deep in a thriller, a crime novel, or something with just enough horror to give me some nightmares, produced by A24.",
    'Recently I started cycling too. Hills are still the enemy.',
  ],
  languages: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'German', level: 'Learning (A2)' },
  ],
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'illustration', label: 'Illustration' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

export interface SkillGroup {
  title: string
  tone: Tone
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'User Research & Strategy',
    tone: 'lilac',
    items: [
      'User interviews & personas',
      'Journey mapping',
      'Usability testing & feedback analysis',
      'Data-driven UX improvements',
      'Inclusive design research',
      'Accessibility audits & WCAG awareness',
      'AI tools in the design workflow',
    ],
  },
  {
    title: 'Product & Interface Design',
    tone: 'purple',
    items: [
      'High-fidelity UI design',
      'Design systems & component libraries',
      'SaaS platform interfaces & dashboards',
      'Complex system redesigns',
      'Responsive web applications',
      'AI-powered product interfaces',
      'EdTech & learning platform design',
    ],
  },
  {
    title: 'AI & Modern Workflows',
    tone: 'pink',
    items: [
      'AI-assisted research synthesis',
      'Smarter task & documentation management',
      'Faster iteration without losing design quality',
      'Prompt-driven content & microcopy drafting',
    ],
  },
  {
    title: 'Project Management',
    tone: 'ink',
    items: [
      'Cross-functional team coordination',
      'Agile methodology & sprint planning',
      'Briefing, scoping & milestone tracking',
      'Client communication & management',
    ],
  },
]

export interface Job {
  period: string
  role: string
  company: string
  country: string
  points: string[]
}

export const jobs: Job[] = [
  {
    period: 'Jun 2024 — Present',
    role: 'UX/UI Designer',
    company: 'freyhauer',
    country: 'Germany',
    points: [
      'Lead end-to-end design projects across complex digital products, from discovery and research to delivery.',
      'Lead UX research — interviews, usability testing, journey mapping — to inform and validate decisions.',
      'Coordinate designers and developers, keeping decisions grounded in research and product goals.',
      'Introduced structured design processes and documentation that reduced feedback loops with development.',
      'Contribute to and document the design system used across concurrent client projects.',
    ],
  },
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'UX/UI Designer, Freelance',
    company: 'Unflow',
    country: 'Portugal',
    points: [
      'Owned the end-to-end design process for AI-based SaaS platforms, from UX strategy to developer handoff.',
      'Built scalable design systems for consistency across platforms.',
      'Researched dyscalculia, dysgraphia and dyslexia to inform WCAG-aligned, inclusive design for a UK EdTech product.',
    ],
  },
  {
    period: 'Jul 2023 — Jan 2024',
    role: 'Product & Web Designer',
    company: 'RedOcean',
    country: 'Portugal',
    points: [
      'Led the full UX redesign of a complex B2B CRM platform.',
      'Interviewed all stakeholder groups and turned insights into UI improvements.',
      'Built and maintained the design system.',
    ],
  },
  {
    period: 'Nov 2021 — Jun 2023',
    role: 'Digital & Web Designer',
    company: 'As Digital Marketing',
    country: 'Portugal',
    points: [
      'Managed the full web design process for a portfolio of client websites.',
      'Wireframing, prototyping, testing and handoff across concurrent projects.',
    ],
  },
]

export const education = [
  { period: '2018 — 2021', title: 'BA Hons Communication Design', place: 'ESAD Matosinhos, Porto' },
  { period: '2021 — 2022', title: 'Web Design (1 year) & UX/UI Design', place: 'Lisbon School of Design, Porto' },
  { period: '2022 — 2023', title: 'UX, UI, UX Writing and UX Research & Strategy courses', place: 'TheStarter, PT' },
]

export const illustrations: { title: string; tone: Tone; ratio: 'portrait' | 'square' | 'landscape' }[] = [
  { title: 'Illustration 01', tone: 'pink', ratio: 'portrait' },
  { title: 'Illustration 02', tone: 'lilac', ratio: 'square' },
  { title: 'Illustration 03', tone: 'ink', ratio: 'portrait' },
  { title: 'Illustration 04', tone: 'lime', ratio: 'landscape' },
  { title: 'Illustration 05', tone: 'purple', ratio: 'portrait' },
  { title: 'Illustration 06', tone: 'ink', ratio: 'square' },
  { title: 'Illustration 07', tone: 'pink', ratio: 'landscape' },
  { title: 'Illustration 08', tone: 'lilac', ratio: 'portrait' },
]
