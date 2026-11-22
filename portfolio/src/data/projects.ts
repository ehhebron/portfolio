// Case studies and experiments. Replace placeholders with your real work.

export type Project = {
  slug: string
  category: string
  title: string
  subtitle: string
  summary: string
  timeline: string
  contributions: string[]
  /** Up to three image paths, e.g. '/work/ds-1.webp' (place files in /public/work). */
  images: string[]
  href?: string
}

export type Experiment = {
  title: string
  description: string
  href?: string
}

export const projects: Project[] = [
  {
    slug: 'design-system',
    category: 'Design Systems',
    title: 'Design System Foundations',
    subtitle: 'One source of truth for design and code',
    summary:
      'Built a token-driven component library adopted across product teams, cutting UI inconsistencies and handoff time.',
    timeline: '6 months',
    contributions: ['Token architecture', 'Component API design', 'Figma ↔ code sync', 'Docs site', 'Adoption & migration'],
    images: [],
  },
  {
    slug: 'onboarding-flow',
    category: 'Product UI',
    title: 'Onboarding Redesign',
    subtitle: 'From first click to first value',
    summary: 'Researched, prototyped, and shipped a new onboarding experience with motion-driven guidance.',
    timeline: '3 months',
    contributions: ['User research', 'Interactive prototypes', 'Motion design', 'Front-end build', 'A/B testing'],
    images: [],
  },
  {
    slug: 'data-dashboard',
    category: 'Data & Accessibility',
    title: 'Analytics Dashboard',
    subtitle: 'Dense data, still easy to read',
    summary: 'Designed and built an accessible data-viz dashboard with keyboard navigation and responsive charts.',
    timeline: '4 months',
    contributions: ['Information architecture', 'Chart components', 'Keyboard navigation', 'Screen-reader support'],
    images: [],
  },
]

export const experiments: Experiment[] = [
  { title: 'Spring-physics toggle', description: 'A tactile switch exploring easing and interruptibility.' },
  { title: 'Fluid type scale', description: 'Clamp-based typography that scales smoothly across viewports.' },
  { title: 'Command palette', description: 'Keyboard-first navigation component with fuzzy search.' },
  { title: 'Token visualizer', description: 'A live view of the color and spacing tokens powering this site.' },
]
