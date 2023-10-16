import {
  SiBitcoin,
  SiBun,
  SiConventionalcommits,
  SiDiscord,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import type { IconType } from '@icons-pack/react-simple-icons/types';
import Link from 'next/link';

import { DotPattern } from '../dot-pattern';
import { HighlighterCard } from '../highlighter-card';
import { RadialGradient } from '../radial-gradient';
import { MotionDiv } from '../wrappers/framer-motion';

type Project = {
  name: string;
  href: string;
  icons: IconType[];
  description: string;
};

const projects: Project[] = [
  {
    name: '💻 aelew.com',
    href: 'https://github.com/aelew/com',
    icons: [SiTailwindcss, SiNextdotjs, SiTypescript],
    description:
      "My personal website made with Next.js and Tailwind CSS. You're looking at it right now!"
  },
  {
    name: '🤖 CryptoTracker',
    href: '/projects/cryptotracker',
    icons: [SiDiscord, SiPython, SiBitcoin],
    description:
      'A Discord bot that notifies users when their cryptocurrency transactions confirm.'
  },
  {
    name: '🧩 Cobalt for Raycast',
    href: 'https://github.com/aelew/raycast-cobalt',
    icons: [SiReact, SiTypescript],
    description:
      'A Raycast extension for downloading videos and audio from social media platforms.'
  },
  {
    name: '📆 UC Merced iCal',
    href: 'https://github.com/aelew/ucmerced-ical',
    icons: [SiTailwindcss, SiNextdotjs, SiTypescript],
    description:
      'Import UC Merced course schedules into Apple Calendar, Google Calendar, etc.'
  },
  {
    name: '📝 discord-bot-template',
    href: 'https://github.com/aelew/discord-bot-template',
    icons: [SiDiscord, SiBun, SiTypescript],
    description:
      'A type-safe Discord.js v14 boilerplate built with TypeScript and the Bun runtime.'
  },
  {
    name: '✨ conai',
    href: 'https://github.com/aelew/conai',
    icons: [SiConventionalcommits, SiOpenai, SiJavascript],
    description:
      'A CLI tool for normalizing commit messages as per the Conventional Commits spec.'
  }
];

export function ProjectGrid() {
  return (
    <MotionDiv
      transition={{ type: 'tween', delay: 0.4 }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-xl font-semibold">📝 Projects</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Here&apos;s what I&apos;ve been working on recently!
      </p>
      <section className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            target={project.href.startsWith('/') ? '_self' : '_blank'}
            href={project.href}
            key={project.href}
          >
            <HighlighterCard index={index}>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-background p-4 text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between gap-2">
                    <h3 className="text-primary">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      {project.icons.map((Icon, index) => (
                        <Icon key={index} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <DotPattern className="mt-2" />
                <RadialGradient />
              </div>
            </HighlighterCard>
          </Link>
        ))}
      </section>
    </MotionDiv>
  );
}
