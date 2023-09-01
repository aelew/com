import type { Metadata } from 'next';

import { ProjectGrid } from '@/components/project-grid';
import { SocialLinks } from '@/components/social-links';
import { MotionDiv } from '@/components/wrappers/framer-motion';

export const metadata: Metadata = { description: '18 • cs student, developer' };

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center">
      <MotionDiv
        transition={{ type: 'tween' }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="py-14 sm:pt-0"
      >
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          <span className="text-gradient mr-1">Hey, I&apos;m Andre.</span> 👋
        </h1>
        <p className="text-muted-foreground">
          I&apos;m an 18-year-old developer and student majoring in Computer
          Science. I love building and learning about new things! If you want to
          chat, you can find me at my socials below.
        </p>
        <SocialLinks />
      </MotionDiv>
      <ProjectGrid />
    </main>
  );
}
