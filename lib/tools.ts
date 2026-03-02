export type ToolTag = 'Content' | 'Brand' | 'Analytics' | 'Enablement'

export type Tool = {
  id: string
  name: string
  description: string
  tag: ToolTag
  url: string
  status: 'live' | 'coming-soon'
  bgColor: string
}

export const tools: Tool[] = [
  {
    id: 'data-viz-gen',
    name: 'DataViz Gen',
    description: 'Generate on-brand data visualizations and charts',
    tag: 'Content',
    url: '/tools/data-viz-gen',
    status: 'live',
    bgColor: '#F8FFFA',
  },
  {
    id: 'burnbook',
    name: 'Burnbook',
    description: 'Competitive intelligence and battle cards',
    tag: 'Analytics',
    url: '/tools/burnbook',
    status: 'live',
    bgColor: '#000d05',
  },
  {
    id: 'gtm-grab-bag',
    name: 'Ye Old GTM Grab Bag',
    description: 'Go-to-market asset generator for campaigns and launches',
    tag: 'Enablement',
    url: 'https://asset-generator-alpha.vercel.app/',
    status: 'live',
    bgColor: '#F8FFFA',
  },
  {
    id: 'style-guide',
    name: 'Style Guide',
    description: 'AirOps brand guidelines, colors, and typography',
    tag: 'Brand',
    url: '',
    status: 'coming-soon',
    bgColor: '#F8FFFA',
  },
  {
    id: 'campaign-quiz',
    name: 'Campaign Quiz',
    description: 'Interactive campaign planning and strategy quiz',
    tag: 'Content',
    url: '',
    status: 'coming-soon',
    bgColor: '#F8FFFA',
  },
  {
    id: 'ao-glossary',
    name: 'AO Glossary',
    description: 'AirOps terminology and definitions reference',
    tag: 'Brand',
    url: '',
    status: 'coming-soon',
    bgColor: '#F8FFFA',
  },
  {
    id: 'pricing-calculator',
    name: 'Pricing Calculator',
    description: 'Interactive pricing and ROI calculator',
    tag: 'Enablement',
    url: '',
    status: 'coming-soon',
    bgColor: '#F8FFFA',
  },
  {
    id: 'win-brand-checker',
    name: 'Win Brand Checker',
    description: 'Verify brand compliance across winning content',
    tag: 'Brand',
    url: '',
    status: 'coming-soon',
    bgColor: '#F8FFFA',
  },
  {
    id: 'team-page',
    name: 'Team Page',
    description: 'AirOps team directory and profile generator',
    tag: 'Brand',
    url: '/tools/team-page',
    status: 'coming-soon',
    bgColor: '#F8FFFA',
  },
]

export const allTags: ToolTag[] = ['Content', 'Brand', 'Analytics', 'Enablement']
