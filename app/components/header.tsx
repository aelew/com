import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

import { ThemeSwitcher } from './theme-switcher';

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/25 dark:border-border/50"
      transition={{ type: 'tween' }}
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="container flex items-center justify-between py-4">
        <Link className="flex gap-3 transition-opacity hover:opacity-80" to="/">
          <img
            className="rounded-md shadow"
            src="/images/penguin.jpg"
            alt="Penguin"
            height={32}
            width={32}
          />
          <span className="text-gradient text-xl font-semibold tracking-tight">
            aelew
          </span>
        </Link>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
