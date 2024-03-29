import {
  SiDiscord,
  SiDrizzle,
  SiGithub,
  SiHyper,
  SiNextdotjs,
  SiNotion,
  SiPython,
  SiRaycast,
  SiReact,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

const technologies = [
  {
    icon: SiGithub,
    name: 'GitHub',
    href: 'https://github.com'
  },
  {
    icon: SiDiscord,
    name: 'Discord',
    href: 'https://discord.com'
  },
  {
    icon: SiRaycast,
    name: 'Raycast',
    href: 'https://www.raycast.com'
  },
  {
    icon: SiPython,
    name: 'Python',
    href: 'https://www.python.org'
  },
  {
    icon: SiTypescript,
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org'
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
    icon: SiDrizzle,
    name: 'Drizzle ORM',
    href: 'https://orm.drizzle.team'
  },
  {
    icon: SiHyper,
    name: 'Hyper',
    href: 'https://hyper.is'
  },
  {
    icon: SiNotion,
    name: 'Notion',
    href: 'https://www.notion.so'
  }
];

export function TechList() {
  return (
    <motion.div
      transition={{ type: 'tween', delay: 0.2 }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-xl font-semibold">🔮 Technologies</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Software and services I use often.
      </p>
      <div className="grid grid-cols-5 items-center gap-x-4 gap-y-6 text-xs">
        {technologies.map((tech, index) => (
          <motion.div
            transition={{ type: 'tween', delay: 0.075 * index + 0.1 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-center"
            key={index}
          >
            <Link
              className="group flex w-fit flex-col items-center gap-1"
              rel="noreferrer"
              to={tech.href}
            >
              <tech.icon className="transition-opacity group-hover:opacity-75" />
              <span className="whitespace-nowrap text-muted-foreground">
                {tech.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
