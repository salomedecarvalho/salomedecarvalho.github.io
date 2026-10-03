export type Tone = 'purple' | 'lilac' | 'ink' | 'pink' | 'lime'

export interface Photo {
  /** Replace with a real image path (e.g. /images/manda/hero.jpg). Until then a placeholder renders. */
  src?: string
  alt: string
  tone: Tone
}

export interface TitledPoint {
  title: string
  text: string
}

export interface Project {
  slug: string
  title: string
  shortTitle: string
  summary: string
  intro: string[]
  client?: string
  /** Agency or studio the work was made under. Omitted for confidential cases. */
  madeUnder?: string
  /** Shown instead of client/agency on confidential cases. */
  role?: string
  year: string
  tags: string[]
  /** Shown as a small note when the case can only be shared privately. */
  confidential?: boolean
  cover: Photo
  contributions: string[]
  needs: TitledPoint[]
  focus: TitledPoint[]
  goal: string
  results?: { value: string; label: string }[]
  gallery: Photo[]
}

export const projects: Project[] = [
  {
    slug: 'manda',
    title: 'Manda AI Tutor',
    shortTitle: 'Manda',
    summary: 'Website and AI-powered learning app, designed from the ground up for TLC Live.',
    intro: [
      'Made for TLC Live, Manda was one of the most exciting and complex projects I worked on. I designed both the company website and their AI-powered app from the ground up.',
      'The goal was a seamless, human-centred experience that made advanced artificial intelligence feel intuitive and trustworthy.',
    ],
    client: 'TLC Live',
    madeUnder: 'Unflow',
    year: '2024',
    tags: ['UX/UI Design', 'Web Design', 'Product Design'],
    cover: { alt: 'Manda student dashboard on laptop and phone', tone: 'purple' },
    contributions: [
      'Led UX and UI design for both web and mobile platforms, working closely with product managers, developers and the client.',
      'Created user flows and wireframes based on research, AI model limitations and user types.',
      'Designed high-fidelity prototypes that balanced clean aesthetics with complex AI interactions.',
      'Worked across brand, marketing and product to keep the visual and functional experience consistent.',
      'Supported front-end developers with detailed UI specs and design systems.',
      'Focused heavily on accessibility and clarity, given the advanced nature of the AI product.',
    ],
    needs: [
      {
        title: 'Gamified learning dashboard',
        text: 'A playful, motivating dashboard that tracks progress, achievements and rankings. Visual cues and charts make data friendly and engaging.',
      },
      {
        title: 'Inclusive user experience',
        text: 'An interface that accommodates many student levels and learning speeds, with special attention to clarity, accessibility and language adaptability.',
      },
      {
        title: 'Modular UI components',
        text: 'A flexible, reusable component system for faster developer handoffs and consistency across screens.',
      },
    ],
    focus: [
      {
        title: 'Clear, friendly communication',
        text: 'A clean, visually engaging layout that quickly explains the platform, its AI-driven features and how it helps students.',
      },
      {
        title: 'Conversion-oriented design',
        text: 'Strategically placed CTAs, friendly subscription flows and clear pathways to registration.',
      },
      {
        title: 'Consistent visual identity',
        text: "The website extends the app's visual language, so the experience stays cohesive from first visit to onboarding.",
      },
      {
        title: 'Responsive and accessible',
        text: 'Fully responsive and accessible, for an inclusive experience across devices.',
      },
    ],
    goal: "A website that reflects the brand's playful yet smart personality and builds trust and excitement around the product: a welcoming, conversion-ready gateway to the TLC Live platform.",
    results: [
      { value: '+25%', label: 'student assessment scores in 6 months' },
      { value: '−30%', label: 'admin tasks for tutors' },
    ],
    gallery: [
      { alt: 'Gamified dashboard — levels and badges', tone: 'lilac' },
      { alt: 'Mobile app screens', tone: 'pink' },
      { alt: 'Marketing website homepage', tone: 'ink' },
      { alt: 'Component library overview', tone: 'lime' },
    ],
  },
  {
    slug: 'ecos',
    title: 'ECOS New Website',
    shortTitle: 'ECOS',
    summary: 'Clearer navigation and a scalable design system for a large, technical website.',
    intro: [
      'The ECOS website is a large, complex platform that needed clearer navigation and a more intuitive structure.',
      'Working closely with a coworker, I helped redesign the experience, improve content clarity and make support information easier to find, bringing consistency and usability to the entire site.',
    ],
    client: 'ECOS',
    madeUnder: 'freyhauer',
    year: '2025',
    tags: ['UX/UI Design', 'Web Design', 'TYPO3'],
    cover: { alt: 'ECOS website on desktop', tone: 'pink' },
    contributions: [
      'Worked closely with a coworker for cohesive design, shared decisions and efficient execution.',
      "Created a complete design system to guide the website's visual and structural foundations.",
      'Collaborated on iterative navigation redesigns based on user reports and client feedback.',
      'Supported the TYPO3 implementation, keeping design and development aligned.',
      'Added and structured content directly in TYPO3 across multiple sections.',
      'Provided troubleshooting and on-the-spot solutions throughout the process.',
    ],
    needs: [
      {
        title: 'Clearer navigation for a large website',
        text: 'Help users move through large content clusters without feeling overwhelmed.',
      },
      {
        title: 'More intuitive content structure',
        text: 'An easier way to understand topics, locate information and follow logical paths across long technical pages.',
      },
      {
        title: 'Improved support experience',
        text: 'Make it much simpler to find help, understand troubleshooting steps and reach support resources.',
      },
      {
        title: 'A scalable, flexible system',
        text: 'A structure that supports future growth without major redesigns.',
      },
    ],
    focus: [
      { title: 'Design system creation', text: 'Reusable components that kept every new page visually consistent.' },
      { title: 'Navigation improvement', text: 'Simplified pathways, restructured content and a refined menu.' },
      { title: 'Page design & support', text: 'Designed key pages and supported structured, user-friendly layouts for many sections.' },
      { title: 'TYPO3 implementation', text: 'From content entry to template tweaks, every page matched the system.' },
    ],
    goal: 'A more intuitive navigation experience, clearer content structure and much easier access to support, on top of a design system that speeds up page building and gives the site a stable foundation for future expansion.',
    gallery: [
      { alt: 'Navigation and mega menu', tone: 'lilac' },
      { alt: 'Support page layouts', tone: 'purple' },
      { alt: 'Design system components', tone: 'lime' },
    ],
  },
  {
    slug: 'case-heritage-building',
    title: 'Brand & Website for a Heritage Building',
    shortTitle: 'Heritage building',
    summary: 'Brand identity and a three-phase website for a renovated historic building turned premium business spaces.',
    intro: [
      'A full branding and website project for a historic building, renovated inside to house premium business spaces.',
      "The challenge was a visual identity and digital presence as considered as the space itself, able to grow alongside the building's renovation from construction to full occupancy. I handled everything: brand identity, colour direction and a three-phase single-page website concept.",
    ],
    role: 'Brand & UX/UI Designer (solo)',
    year: '2025',
    tags: ['Branding', 'UX/UI Design', 'Web Design', 'Product Design'],
    confidential: true,
    cover: { alt: 'Brand identity and website overview', tone: 'ink' },
    contributions: [
      'Defined the three-phase product strategy: one evolving website instead of three separate builds.',
      'Created the brand identity and colour direction, balancing the building\'s history with a contemporary feel.',
      'Designed all three phases of the one-pager, each complete on its own while leading naturally into the next.',
      'Conceptualised and designed an AI-powered digital concierge for phase 2, mapping the most common tenant questions and designing the handoff flow to the real-estate agent.',
      'Worked independently from first brand exploration to final website design and client presentation.',
    ],
    needs: [
      { title: 'A brand with weight and character', text: 'Honour the history without feeling stuck in the past.' },
      { title: 'A website that could grow', text: 'Live before the renovation was done, scaling through each phase without ever feeling unfinished.' },
      { title: 'Generate interest before the product existed', text: 'With no finished rooms to show yet, AI-generated visuals gave visitors a credible sense of what the spaces would become.' },
      { title: 'A smarter way to handle enquiries', text: 'Answer common questions and connect serious leads with the real-estate team.' },
    ],
    focus: [
      { title: 'Phase 1 — Artistic & editorial', text: 'Storytelling, atmosphere and SEO, with AI-generated room visuals and a blog structure for long-term organic visibility.' },
      { title: 'Phase 2 — Contextual & conversational', text: 'An AI digital concierge that answers common tenant questions and routes serious enquiries directly to the agent, reducing friction on both sides.' },
      { title: 'Phase 3 — Full platform', text: 'A complete, information-rich website that serves current tenants and future interest long after full occupancy.' },
    ],
    goal: 'A cohesive brand and a website concept that treated the building as a product with a launch strategy: live and credible from day one, growing in depth and functionality without ever feeling incomplete.',
    // Confidential: only the cover image is shown.
    gallery: [],
  },
  {
    slug: 'case-broadcast-platform',
    title: 'Website for a Broadcast Platform',
    shortTitle: 'Broadcast platform',
    summary: 'A bold marketing website that makes a complex broadcast hardware and software ecosystem clear for three very different audiences.',
    intro: [
      'A full marketing website for a new product in the broadcast industry, making a complex hardware and software ecosystem clear and compelling for very different clients, from small OB-van operators to large national broadcasters.',
      'I handled everything independently, from scope analysis and market research to UX strategy, content structure, UX copy and full UI design across every page.',
    ],
    role: 'UX/UI Designer & Content Strategist (solo)',
    year: '2026',
    tags: ['UX/UI Design', 'Web Design', 'Content Strategy', 'Marketing Website'],
    confidential: true,
    cover: { alt: 'Website homepage — dark, high-contrast UI', tone: 'lime' },
    contributions: [
      'Ran scope analysis and market research to understand the industry, map the competitive landscape and define audience profiles before designing anything.',
      'Defined the full information architecture and content strategy: navigation, user journeys and page hierarchy for multiple visitor types in one coherent system.',
      'Designed the full website end to end, each page with its own purpose within a single system.',
      'Structured and wrote UX copy across the site so the content logic held up visually and editorially.',
      'Kept full design consistency working solo, from first wireframe to final high-fidelity UI.',
    ],
    needs: [
      { title: 'Make a complex portfolio approachable', text: 'Multiple hardware components, software solutions and five packages, communicated without overwhelming visitors.' },
      { title: 'Speak to three audiences', text: 'Small production teams, live-event operators and large broadcasters all have different pain points. The site had to address each without losing one brand voice.' },
      { title: 'Three targeted landing pages', text: 'Each built around a specific production context, with its own narrative, pain points and product recommendations.' },
      { title: 'A bold identity for a new brand', text: 'Confident and modern in a market dominated by legacy tools.' },
    ],
    focus: [
      { title: 'Information architecture & content strategy', text: 'With a wide product range and three audience types, the core challenge was structuring the site so each visitor finds what is relevant to them without ever feeling lost.' },
      { title: 'Market-specific landing pages', text: 'Each page built around a real pain point as a clear problem → solution → product flow, designed to turn technical visitors into leads.' },
      { title: 'Visual language & brand direction', text: 'A dark, high-contrast aesthetic with bold typography and a sharp yellow-green accent: a deliberate break from the conservative look of existing broadcast tools.' },
    ],
    goal: 'A complete marketing website for a technically complex product: clear enough for a first-time visitor to understand the value, specific enough to earn the trust of a seasoned broadcast engineer. Every page and content section delivered independently, from research to final UI.',
    // Confidential: only the cover image is shown.
    gallery: [],
  },
  {
    slug: 'b2b-crm',
    title: 'B2B CRM Redesign',
    shortTitle: 'CRM',
    summary: 'Full UX redesign of a CRM platform used daily by internal teams and clients.',
    intro: [
      'A full UX redesign of a complex B2B CRM platform used every day by internal teams and external clients.',
      'User research turned into service flows, journey maps and interface improvements that reduced task friction.',
    ],
    madeUnder: 'RedOcean',
    year: '2023',
    tags: ['UX Research', 'Product Design', 'Design System'],
    cover: { alt: 'CRM dashboard redesign', tone: 'lilac' },
    contributions: [
      'Conducted user interviews across all stakeholder groups.',
      'Translated insights into service flows, journey maps and UI improvements.',
      'Built and maintained the design system for visual consistency and component reuse.',
      'Worked with developers to implement improvements and keep quality consistent.',
    ],
    needs: [
      { title: 'Reduce daily friction', text: 'Align the interface with real daily-use patterns and business goals.' },
      { title: 'One coherent platform', text: 'Consistency across many screens and user groups.' },
    ],
    focus: [
      { title: 'Research-led', text: 'Every change traced back to interviews and observed workflows.' },
      { title: 'Design system', text: 'A shared component library to keep the platform coherent as it grows.' },
    ],
    goal: 'A calmer, faster CRM shaped around how people actually work. (Placeholder case — add details and visuals.)',
    gallery: [
      { alt: 'Journey map', tone: 'pink' },
      { alt: 'Redesigned screens', tone: 'purple' },
    ],
  },
]
