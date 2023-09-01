/*
 * Credit to Cruip!
 * https://github.com/cruip/highlighter-next
 */
'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

import { useMousePosition } from '@/hooks/mouse-position';
import { cn } from '@/lib/utils';

type HighlighterProps = {
  children: ReactNode;
  className?: string;
  refresh?: boolean;
};

export function Highlighter({
  children,
  className,
  refresh = false
}: HighlighterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<HTMLElement[]>([]);

  useEffect(() => {
    containerRef.current &&
      setBoxes(
        Array.from(containerRef.current.children).map((el) => el as HTMLElement)
      );
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener('resize', initContainer);
    return () => {
      window.removeEventListener('resize', initContainer);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition]);

  useEffect(() => {
    initContainer();
  }, [refresh]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const { w, h } = containerSize.current;

      const rect = containerRef.current.getBoundingClientRect();
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;

      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;

        boxes.forEach((box) => {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty('--mouse-x', `${boxX}px`);
          box.style.setProperty('--mouse-y', `${boxY}px`);
        });
      }
    }
  };

  return (
    <div className={cn('group', className)} ref={containerRef}>
      {children}
    </div>
  );
}
