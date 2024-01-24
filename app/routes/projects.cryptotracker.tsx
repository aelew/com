import { SiGithub } from '@icons-pack/react-simple-icons';
import type { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { PlusCircleIcon } from 'lucide-react';

import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'CryptoTracker | aelew' },
    {
      name: 'description',
      content:
        'A Discord bot that alerts users when their crypto transactions confirm.'
    }
  ];
};

export default function CryptoTrackerPage() {
  return (
    <motion.div
      className="my-auto flex flex-col items-center gap-3 pt-8 text-center"
      transition={{ type: 'tween' }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <img
        src="/images/cryptotracker/coin.png"
        className="drop-shadow-lg"
        height={56}
        width={56}
        alt="Coin"
      />
      <h1 className="text-gradient text-3xl font-bold tracking-tight">
        CryptoTracker
      </h1>
      <p className="mb-2 max-w-sm leading-5 text-muted-foreground">
        A Discord bot that notifies users when their cryptocurrency transactions
        confirm.
      </p>
      <div className="mb-4 flex gap-2">
        <Link
          className={cn(
            buttonVariants(),
            'bg-[#5865F2] hover:bg-[#4752C4] dark:text-primary'
          )}
          to="https://discord.com/api/oauth2/authorize?client_id=1132724830135922688&permissions=277025508352&scope=bot%20applications.commands"
          rel="noreferrer"
          target="_blank"
        >
          <PlusCircleIcon className="mr-2 h-4 w-4" /> Invite
        </Link>
        <Link
          className={buttonVariants({ variant: 'secondary' })}
          to="https://github.com/aelew/cryptotracker"
          rel="noreferrer"
          target="_blank"
        >
          <SiGithub className="mr-2 h-4 w-4" /> GitHub
        </Link>
      </div>
      <img
        src="/images/cryptotracker/example.jpg"
        alt="Example of CryptoTracker in action"
        className="rounded-md sm:max-w-md"
        height={410}
        width={448}
      />
    </motion.div>
  );
}
