'use client';

import type { PropsWithChildren } from 'react';
import { isMobile } from 'react-device-detect';

import { useDelayedMobileDetection } from '@/hooks/delayed-mobile-detection';
import { cn } from '@/lib/utils';
import { Highlighter } from './highlighter';
import { MotionDiv } from './wrappers/framer-motion';

interface HighlighterCardProps extends PropsWithChildren {
  index: number;
}

export function HighlighterCard({ index, children }: HighlighterCardProps) {
  const isLoaded = useDelayedMobileDetection();

  const child = (
    <MotionDiv
      className={cn(
        'rounded-lg p-px shadow-md ring-1 ring-border dark:bg-zinc-700 dark:ring-0',
        isLoaded &&
          !isMobile &&
          'relative overflow-hidden before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] before:hover:opacity-20 after:group-hover:opacity-100'
      )}
      transition={{ type: 'tween', delay: 0.05 * index + 0.1 }}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </MotionDiv>
  );

  return (
    <div
      className={
        !isLoaded || isMobile
          ? undefined
          : 'transition-transform hover:-translate-y-0.5'
      }
    >
      {!isLoaded || isMobile ? child : <Highlighter>{child}</Highlighter>}
    </div>
  );
}
