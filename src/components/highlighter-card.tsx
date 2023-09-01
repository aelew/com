'use client';

import { type PropsWithChildren } from 'react';

import { Highlighter } from './highlighter';
import { MotionDiv } from './wrappers/framer-motion';

interface HighlighterCardProps extends PropsWithChildren {
  index: number;
}

export function HighlighterCard({ index, children }: HighlighterCardProps) {
  return (
    <div className="sm:transition-transform hover:sm:-translate-y-0.5">
      <Highlighter>
        <MotionDiv
          className="relative overflow-hidden rounded-lg p-px shadow-md ring-1 ring-border before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] before:hover:opacity-20 after:group-hover:opacity-100 dark:bg-zinc-700 dark:ring-0"
          transition={{ type: 'tween', delay: 0.075 * index + 0.4 }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {children}
        </MotionDiv>
      </Highlighter>
    </div>
  );
}
