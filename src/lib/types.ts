interface SocialMediaProfile {
  icon: any
  href: string
}

interface Experience {
  organization: string
  title: string
  href: string
  date: string
  status: 'incoming' | 'active' | 'inactive'
  logo: { rounded: boolean, data: ImageMetadata }
}

interface Project {
  name: string
  description: string
  openSource: boolean
  cover: ImageMetadata
  link: { type: string, href: string }
  icons: any[]
}

interface Gem {
  title: string
  description: string
  href: string
}

interface GemGroup {
  icon: any
  title: string
  slug: string
  items: Gem[]
}

export type { Experience, GemGroup, Project, SocialMediaProfile };
