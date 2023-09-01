import Image from 'next/image';
import Link from 'next/link';

import { ThemeSwitcher } from './theme-switcher';
import { MotionHeader } from './wrappers/framer-motion';

export function Header() {
  return (
    <MotionHeader
      className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween' }}
    >
      <Link className="flex gap-3 transition-opacity hover:opacity-80" href="/">
        <Image
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
    </MotionHeader>
  );
}
