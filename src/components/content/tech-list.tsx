import {
  SiDiscord,
  SiFirefox,
  SiGithub,
  SiNextdotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from '@icons-pack/react-simple-icons';
import type { IconType } from '@icons-pack/react-simple-icons/types';
import Link from 'next/link';

import { MotionDiv } from '../wrappers/framer-motion';

interface Tech {
  icon: IconType;
  name: string;
  href: string;
}

const technologies: Tech[] = [
  {
    icon: SiTypescript,
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org'
  },
  {
    icon: SiPython,
    name: 'Python',
    href: 'https://www.python.org'
  },
  {
    icon: SiNextdotjs,
    name: 'Next.js',
    href: 'https://nextjs.org'
  },
  {
    icon: SiReact,
    name: 'React',
    href: 'https://react.dev'
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind',
    href: 'https://tailwindcss.com/'
  },
  {
    icon: SiFirefox,
    name: 'Firefox',
    href: 'https://www.mozilla.org/en-US/firefox/new/'
  },
  {
    icon: SiDiscord,
    name: 'Discord',
    href: 'https://discord.com'
  },
  {
    icon: SiVercel,
    name: 'Vercel',
    href: 'https://vercel.com'
  },
  {
    icon: SiGithub,
    name: 'GitHub',
    href: 'https://github.com'
  },
  {
    icon: SiNotion,
    name: 'Notion',
    href: 'https://www.notion.so/'
  }
];

export function TechList() {
  return (
    <MotionDiv
      transition={{ type: 'tween', delay: 0.3 }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-xl font-semibold">🔮 Technologies</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Software and services I use often.
      </p>
      <div className="grid grid-cols-5 items-center gap-x-4 gap-y-6 text-xs">
        {technologies.map((tech, index) => (
          <MotionDiv
            transition={{ type: 'tween', delay: 0.075 * index + 0.3 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-center"
            key={index}
          >
            <Link
              className="group flex w-fit flex-col items-center gap-1"
              href={tech.href}
              target="_blank"
            >
              <tech.icon className="transition-opacity group-hover:opacity-80" />
              <span className="text-muted-foreground">{tech.name}</span>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
