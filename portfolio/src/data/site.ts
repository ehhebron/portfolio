// Global site content. Edit this file to update copy without touching components.

export const site = {
  name: 'Hillary Hebron',
  wordmark: 'HILLARY',
  role: 'Design Engineer',
  location: 'Your City',
  headline: ['A design engineer', 'who ships the details.'],
  intro:
    'I design interfaces and build them in production code. I work where design systems, interaction, and front-end engineering meet — so nothing gets lost between the mockup and the browser.',
  email: 'hello@example.com',
  availability: 'Open to new opportunities',
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Read.cv', href: 'https://read.cv/' },
  ],
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Lab', href: '#lab' },
]

export type Role = {
  title: string
  company: string
  href?: string
  period: string
  detail?: string
}

export const experience: Role[] = [
  { title: 'Design Engineer', company: 'Company Name', period: '2024 — Now', detail: 'Full-time · Remote' },
  { title: 'Front-end Engineer', company: 'Company Name', period: '2022 — 2024' },
  { title: 'Product Designer', company: 'Company Name', period: '2020 — 2022' },
  { title: 'Design Intern', company: 'Company Name', period: '2019' },
]

export type Step = {
  title: string
  description: string
  activities: string[]
}

export const process: Step[] = [
  {
    title: 'Understand',
    description: 'Get clear on the problem, the people, and the constraints before pushing pixels.',
    activities: ['Stakeholder & user conversations', 'Audit existing UI and code', 'Define success metrics'],
  },
  {
    title: 'Prototype',
    description: 'Explore in Figma, then move to code early so interactions can be felt, not imagined.',
    activities: ['Low-fi flows and sketches', 'Interactive code prototypes', 'Motion and state studies'],
  },
  {
    title: 'Build',
    description: 'Turn the prototype into production components with clean APIs and real data.',
    activities: ['Token-driven components', 'Accessibility from the start', 'Performance budgets'],
  },
  {
    title: 'Refine',
    description: 'Ship, watch how it is used, and polish the rough edges that only show up in real life.',
    activities: ['Usability testing', 'Instrumentation & analytics', 'Documentation and handoff'],
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Placeholder — a short quote from a colleague about your design and engineering craft.',
    name: 'Colleague Name',
    role: 'Engineering Manager, Company',
  },
  {
    quote: 'Placeholder — a quote about how you bridged design and engineering on a project.',
    name: 'Colleague Name',
    role: 'Product Designer, Company',
  },
]

export const faqs = [
  {
    q: 'Are you a designer or an engineer?',
    a: 'Both. I am happiest owning a feature from first sketch to shipped component, and I am comfortable going deep on either side.',
  },
  {
    q: 'What is your stack?',
    a: 'Figma for exploration; TypeScript, React, and modern CSS for production. I pick up new tools quickly when a team needs them.',
  },
  {
    q: 'What kinds of roles are you looking for?',
    a: 'Design engineering, design systems, and UI engineering roles on product teams that care about craft.',
  },
  {
    q: 'Do you take freelance work?',
    a: 'Occasionally, for well-scoped projects. Send an email with some context and I will get back to you.',
  },
]

export const marquee = 'DESIGNED IN FIGMA · BUILT IN THE BROWSER'
