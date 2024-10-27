import EmailIcon from '@/components/icons/EmailIcon.astro';
import hackMercedLogo from '@/images/logos/hackmerced.jpeg';
import openAvenuesLogo from '@/images/logos/open-avenues.jpeg';
import ucMercedLogo from '@/images/logos/uc-merced.png';
import cryptoTrackerCover from '@/images/projects/cryptotracker.jpg';
import devTermsCover from '@/images/projects/devterms.jpg';
import iconKitCover from '@/images/projects/iconkit.jpg';
import lookupToolsCover from '@/images/projects/lookuptools.jpg';
import raycastCobaltCover from '@/images/projects/raycast-cobalt.jpg';
import ucmCalendarCover from '@/images/projects/ucmerced-ical.jpg';
import {
  Bitcoin as BitcoinIcon,
  Bluesky as BlueskyIcon,
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
    icon: BlueskyIcon,
    href: 'https://bsky.app/profile/aelew.com'
  },
  {
    icon: EmailIcon,
    href: 'mailto:me@aelew.com'
  }
];

export const experience = [
  {
    organization: 'UC Merced',
    title: 'Web Developer, Enterprise Application Services',
    href: 'https://www.ucmerced.edu',
    date: 'Aug 2024 - Present',
    active: true,
    logo: {
      rounded: false,
      data: ucMercedLogo
    }
  },
  {
    organization: 'HackMerced',
    title: 'Engineering Organizer',
    href: 'https://hackmerced.com',
    date: 'Jul 2024 - Present',
    active: true,
    logo: {
      rounded: true,
      data: hackMercedLogo
    }
  },
  {
    organization: 'Open Avenues',
    title: 'Software Engineer Intern',
    href: 'https://www.openavenuesfoundation.org/career-pathways',
    date: 'Feb 2024 - Apr 2024',
    active: false,
    logo: {
      rounded: true,
      data: openAvenuesLogo
    }
  }
];

export const projects = [
  {
    name: 'DevTerms',
    description: 'Crowdsourced dictionary for developers',
    link: { type: 'website', href: 'https://devterms.io' },
    cover: devTermsCover,
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
    link: { type: 'raycast', href: 'https://www.raycast.com/aelew/cobalt' },
    cover: raycastCobaltCover,
    openSource: true,
    icons: [ReactIcon, RaycastIcon, TypeScriptIcon]
  },
  {
    name: 'IconKit',
    description: 'AI icon generator',
    link: { type: 'website', href: 'https://iconkit.ai' },
    cover: iconKitCover,
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
    link: { type: 'github', href: 'https://github.com/aelew/cryptotracker' },
    cover: cryptoTrackerCover,
    openSource: true,
    icons: [DiscordIcon, PythonIcon, BitcoinIcon, LitecoinIcon, EthereumIcon]
  },
  {
    name: 'lookup.tools',
    description: 'Domain, IP, & email lookup tool',
    link: { type: 'website', href: 'https://lookup.tools' },
    cover: lookupToolsCover,
    openSource: true,
    icons: [TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  },
  {
    name: 'UC Merced iCalendar Tool',
    description: '.ics generator for UC Merced courses',
    link: { type: 'website', href: 'https://cal.aelew.com' },
    cover: ucmCalendarCover,
    openSource: true,
    icons: [TailwindCSSIcon, ReactIcon, NextIcon, TypeScriptIcon]
  }
];
