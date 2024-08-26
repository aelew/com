import EmailIcon from '@/components/icons/EmailIcon.astro';
import {
  Bitcoin as BitcoinIcon,
  Discord as DiscordIcon,
  Drizzle as DrizzleIcon,
  Ethereum as EthereumIcon,
  Github as GitHubIcon,
  Linkedin as LinkedInIcon,
  Litecoin as LitecoinIcon,
  Meilisearch as MeilisearchIcon,
  Nextdotjs as NextIcon,
  Openai as OpenAIIcon,
  Python as PythonIcon,
  Raycast as RaycastIcon,
  React as ReactIcon,
  Tailwindcss as TailwindCSSIcon,
  Typescript as TypeScriptIcon,
  X as XIcon
} from 'simple-icons-astro';

export const socials = [
  {
    icon: DiscordIcon,
    href: 'https://discord.dog/204594797812383744'
  },
  {
    icon: GitHubIcon,
    href: 'https://github.com/aelew'
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/aelew'
  },
  {
    icon: XIcon,
    href: 'https://x.com/aelew_'
  },
  {
    icon: EmailIcon,
    href: 'mailto:me@aelew.com'
  }
];

export const experience = [
  {
    company: 'UC Merced',
    title: 'Web Developer, Enterprise Application Services',
    href: 'https://www.ucmerced.edu',
    logo: '/img/logos/uc-merced.png',
    date: 'Aug 2024 - Present',
    active: true
  },
  {
    company: 'HackMerced',
    title: 'Engineering Organizer',
    href: 'https://hackmerced.com',
    logo: '/img/logos/hackmerced.jpeg',
    date: 'Jul 2024 - Present',
    active: true
  },
  {
    company: 'Open Avenues',
    title: 'Student Consultant, Software Engineering/Product Design',
    href: 'https://www.openavenuesfoundation.org/career-pathways',
    logo: '/img/logos/open-avenues.jpeg',
    date: 'Feb 2024 - Apr 2024',
    active: false
  }
];

export const projects = [
  {
    name: 'DevTerms',
    description: 'crowdsourced dictionary for developers',
    cover: '/img/projects/devterms.jpg',
    link: { type: 'website', href: 'https://devterms.io' },
    openSource: true,
    icons: [
      DrizzleIcon,
      MeilisearchIcon,
      TailwindCSSIcon,
      ReactIcon,
      NextIcon,
      TypeScriptIcon
    ]
  },
  {
    name: 'Cobalt for Raycast',
    description: 'Raycast extension for downloading media',
    cover: '/img/projects/raycast-cobalt.jpg',
    link: { type: 'raycast', href: 'https://www.raycast.com/aelew/cobalt' },
    openSource: true,
    icons: [ReactIcon, RaycastIcon, TypeScriptIcon]
  },
  {
    name: 'IconKit',
    description: 'AI icon generator',
    cover: '/img/projects/iconkit.jpg',
    link: { type: 'website', href: 'https://iconkit.ai' },
    openSource: false,
    icons: [
      DrizzleIcon,
      TailwindCSSIcon,
      ReactIcon,
      OpenAIIcon,
      NextIcon,
      TypeScriptIcon
    ]
  },
  {
    name: 'CryptoTracker',
    description: 'Discord bot for tracking crypto confirmations',
    cover: '/img/projects/cryptotracker.jpg',
    link: { type: 'github', href: 'https://github.com/aelew/cryptotracker' },
    openSource: true,
    icons: [DiscordIcon, PythonIcon, BitcoinIcon, LitecoinIcon, EthereumIcon]
  },
  {
    name: 'lookup.tools',
    description: 'Domain, IP, & email lookup tool',
    cover: '/img/projects/lookuptools.jpg',
    link: { type: 'website', href: 'https://lookup.tools' },
    openSource: true,
    icons: [TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  },
  {
    name: 'UC Merced iCalendar Tool',
    description: '.ics generator for UC Merced courses',
    cover: '/img/projects/ucmerced-ical.jpg',
    link: { type: 'website', href: 'https://github.com/aelew/ucmerced-ical' },
    openSource: true,
    icons: [TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  }
];
