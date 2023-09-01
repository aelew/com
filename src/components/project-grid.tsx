import {
  SiBitcoin,
  SiConventionalcommits,
  SiDiscord,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import type { IconType } from '@icons-pack/react-simple-icons/types';
import Link from 'next/link';

import { HighlighterCard } from './highlighter-card';
import { RadialGradient } from './radial-gradient';
import { MotionDiv } from './wrappers/framer-motion';

type Project = {
  title: string;
  href: string;
  icons: IconType[];
  description: string;
};

const projects: Project[] = [
  {
    title: '💻 aelew.com',
    href: 'https://github.com/aelew/com',
    icons: [SiTailwindcss, SiNextdotjs, SiTypescript],
    description:
      "My personal website made with Next.js and Tailwind CSS. You're looking at it right now!"
  },
  {
    title: '🤖 CryptoTracker',
    href: 'https://github.com/aelew/cryptotracker',
    icons: [SiDiscord, SiPython, SiBitcoin],
    description:
      'A Discord bot that notifies users when their cryptocurrency transactions confirm.'
  },
  {
    title: '🧩 Cobalt for Raycast',
    href: 'https://github.com/aelew/raycast-cobalt',
    icons: [SiReact, SiTypescript],
    description:
      'A Raycast extension for downloading videos and audio from social media platforms.'
  },
  {
    title: '📆 UC Merced iCal',
    href: 'https://github.com/aelew/ucmerced-ical',
    icons: [SiTailwindcss, SiNextdotjs, SiTypescript],
    description:
      'Import UC Merced course schedules into Apple Calendar, Google Calendar, etc.'
  },
  {
    title: '🔗 unshorten',
    href: 'https://github.com/aelew/unshorten',
    icons: [SiRust],
    description:
      'A simple CLI tool for unshortening URLs that supports a large variety of shorteners.'
  },
  {
    title: '✨ conai',
    href: 'https://github.com/aelew/conai',
    icons: [SiConventionalcommits, SiOpenai, SiJavascript],
    description:
      'A CLI tool for normalizing commit messages as per the Conventional Commits spec.'
  }
];

export function ProjectGrid() {
  return (
    <MotionDiv
      transition={{ type: 'tween', delay: 0.1 }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h3 className="text-xl font-semibold">📝 Projects</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Here&apos;s what I&apos;ve been working on recently!
      </p>
      <section className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link href={project.href} key={project.href} target="_blank">
            <HighlighterCard index={index}>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-background p-4 text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between gap-2">
                    <h4 className="text-primary">{project.title}</h4>
                    <div className="flex items-center gap-2">
                      {project.icons.map((Icon, index) => (
                        <Icon key={index} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <RadialGradient />
              </div>
            </HighlighterCard>
          </Link>
        ))}
      </section>
    </MotionDiv>
  );
}
