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
    date: 'Aug 2024 – Present',
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
    date: 'Jul 2024 – Present',
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
    date: 'Feb 2024 – Apr 2024',
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

export const gems = [
  {
    title: 'Blog posts',
    slug: 'blog-posts',
    items: [
      {
        title: "Why I don't use Prettier",
        description: 'Anthony Fu',
        href: 'https://antfu.me/posts/why-not-prettier'
      },
      {
        title: 'Leaving Twitter for Bluesky',
        description: 'Justin Jackson',
        href: 'https://justinjackson.ca/twitter-bluesky'
      },
      {
        title: 'Using Bluesky posts as blog comments',
        description: 'Emily Liu',
        href: 'https://emilyliu.me/blog/comments'
      }
    ]
  },
  {
    title: 'Browser Extensions',
    slug: 'browser-extensions',
    items: [
      {
        title: 'uBlock Origin',
        description: 'Highly-efficient content blocker',
        href: 'https://ublockorigin.com'
      },
      {
        title: 'JSONVue',
        description: 'Validate and view JSON documents',
        href: 'https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc'
      },
      {
        title: 'FastForward',
        description: 'Circumvent annoying link shorteners',
        href: 'https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe'
      },
      {
        title: 'DeArrow',
        description: 'Crowdsourced YouTube titles and thumbnails',
        href: 'https://chrome.google.com/webstore/detail/dearrow/enamippconapkdmgfgjchkhakpfinmaj'
      },
      {
        title: 'Better Canvas',
        description: 'Feature-packed extension for Canvas',
        href: 'https://chromewebstore.google.com/detail/better-canvas/cndibmoanboadcifjkjbdpjgfedanolh'
      },
      {
        title: 'Refined GitHub',
        description: 'Simplifies the GitHub interface with useful features',
        href: 'https://chrome.google.com/webstore/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf'
      },
      {
        title: 'LanguageTool',
        description: 'Grammar and spelling checker',
        href: 'https://chromewebstore.google.com/detail/ai-grammar-checker-paraph/oldceeleldhonbafppcapldpdifcinji'
      },
      {
        title: 'Disable Page Visibility API',
        description: 'Prevents websites from seeing if you are on a page',
        href: 'https://chromewebstore.google.com/detail/disable-page-visibility-a/eecfoibnnhheckhfokpihgefmlnenofb'
      },
      {
        title: 'GoFullPage',
        description: 'Capture full page screenshots reliably',
        href: 'https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl'
      },
      {
        title: 'SponsorBlock',
        description: 'Skip sponsorships and promotions in YouTube videos',
        href: 'https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone'
      },
      {
        title: 'Unhook',
        description: 'Remove distractions from YouTube',
        href: 'https://chrome.google.com/webstore/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid'
      },
      {
        title: 'Open Frame',
        description: 'Adds context menu items for opening iframes',
        href: 'https://chrome.google.com/webstore/detail/open-frame/ioohmdjfjcbggpcggeeknkgbgbdajmmo'
      },
      {
        title: 'Simplify Copilot',
        description: 'Automatically fill out job applications',
        href: 'https://chromewebstore.google.com/detail/simplify-copilot-autofill/pbanhockgagggenencehbnadejlgchfc'
      },
      {
        title: 'Shazam',
        description: 'Identify music, search lyrics, and more',
        href: 'https://chromewebstore.google.com/detail/shazam-find-song-names-fr/mmioliijnhnoblpgimnlajmefafdfilb'
      },
      {
        title: 'Wappalyzer',
        description: 'Identify web technologies used on websites',
        href: 'https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg'
      },
      {
        title: 'Save image as type',
        description: 'Save images as PNG, JPG, or WebP files',
        href: 'https://chrome.google.com/webstore/detail/save-image-as-type/gabfmnliflodkdafenbcpjdlppllnemd'
      },
      {
        title: 'JavaScript Bundle Size',
        description: 'Adds bundle size data to npm and GitHub',
        href: 'https://chrome.google.com/webstore/detail/javascript-bundle-size/aojdnjnhhjmokccbelfdocgiedioienh'
      },
      {
        title: 'Chrome extension source viewer',
        description: 'View the source code of any browser extension',
        href: 'https://chrome.google.com/webstore/detail/chrome-extension-source-v/jifpbeccnghkjeaalbbjmodiffmgedin'
      },
      {
        title: "I still don't care about cookies",
        description: 'Automatically handle cookie consent popups',
        href: 'https://chrome.google.com/webstore/detail/i-still-dont-care-about-c/edibdbjcniadpccecjdfdjjppcpchdlm'
      },
      {
        title: 'File Icons for GitHub and GitLab',
        description: 'Adds file icons to GitHub, GitLab, Gitea, and Gogs',
        href: 'https://chrome.google.com/webstore/detail/file-icons-for-github-and/ficfmibkjjnpogdcfhfokmihanoldbfe'
      }
    ]
  }
];
