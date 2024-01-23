import { GitHubLogoIcon } from '@radix-ui/react-icons';
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

import { PlusCircleIcon } from '~/components/icons/plus-circle-icon';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'CryptoTracker | aelew' },
    {
      name: 'description',
      content:
        'A Discord bot that notifies users when their cryptocurrency transactions confirm.'
    }
  ];
};

export default function CryptoTrackerPage() {
  return (
    <motion.div
      className="m-auto flex max-w-sm flex-col items-center gap-3 pb-8 text-center"
      transition={{ type: 'tween' }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <img src="/images/coin.png" height={56} width={56} alt="Coin" />
      <h1 className="text-gradient text-3xl font-bold tracking-tight">
        CryptoTracker
      </h1>
      <p className="leading-5 text-muted-foreground">
        A Discord bot that notifies users when their cryptocurrency transactions
        confirm.
      </p>
      <div className="mt-2 flex gap-2">
        <Link
          className={cn(
            buttonVariants(),
            'bg-[#5865F2] hover:bg-[#4752C4] dark:text-primary'
          )}
          to="https://discord.com/api/oauth2/authorize?client_id=1132724830135922688&permissions=277025508352&scope=bot%20applications.commands"
          rel="noreferrer"
          target="_blank"
        >
          <PlusCircleIcon className="mr-2" /> Invite
        </Link>
        <Link
          className={buttonVariants({ variant: 'secondary' })}
          to="https://github.com/aelew/cryptotracker"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubLogoIcon className="mr-2" /> GitHub
        </Link>
      </div>
    </motion.div>
  );
}
