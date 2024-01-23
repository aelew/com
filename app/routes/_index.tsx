import type { MetaFunction } from '@remix-run/node';
import { motion } from 'framer-motion';

import { ProjectGrid } from '~/components/content/project-grid';
import { TechList } from '~/components/content/tech-list';
import { SocialLinks } from '~/components/social-links';

export const meta: MetaFunction = () => {
  return [
    { title: 'Andre Lew | aelew' },
    { name: 'description', content: '19 - cs student, developer' }
  ];
};

export default function Index() {
  return (
    <div className="space-y-12 pt-12 lg:pb-12">
      <motion.div
        transition={{ type: 'tween' }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          <span className="text-gradient mr-1">Hey, I&apos;m Andre.</span> 👋
        </h1>
        <p className="text-muted-foreground">
          I&apos;m an 19-year-old developer and student majoring in Computer
          Science. I love building and learning about new things! If you want to
          chat, you can find me at my socials below.
        </p>
        <SocialLinks />
      </motion.div>
      <TechList />
      <ProjectGrid />
    </div>
  );
}
