import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

import { ThemeSwitcher } from './theme-switcher';

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur dark:bg-background/95 dark:supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween' }}
    >
      <div className="container">
        <div className="flex items-center justify-between border-b py-4">
          <Link
            className="flex gap-3 transition-opacity hover:opacity-80"
            to="/"
          >
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
      </div>
    </motion.header>
  );
}
