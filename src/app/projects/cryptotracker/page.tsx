import { GitHubLogoIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { PlusCircleIcon } from '@/components/icons/plus-circle-icon';
import { buttonVariants } from '@/components/ui/button';
import { MotionDiv } from '@/components/wrappers/framer-motion';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'CryptoTracker',
  description:
    'A Discord bot that notifies users when their cryptocurrency transactions confirm.'
};

export default function CryptoTrackerPage() {
  return (
    <MotionDiv
      className="m-auto flex max-w-sm flex-col items-center gap-3 pb-8 text-center"
      transition={{ type: 'tween' }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Image src="/images/coin.png" height={56} width={56} alt="Coin" />
      <h1 className="text-gradient text-3xl font-bold tracking-tight">
        CryptoTracker
      </h1>
      <Balancer className="leading-5 text-muted-foreground" as="p">
        A Discord bot that notifies users when their cryptocurrency transactions
        confirm.
      </Balancer>
      <div className="mt-2 flex gap-2">
        <Link
          className={cn(
            buttonVariants(),
            'bg-[#5865F2] hover:bg-[#4752C4] dark:text-primary'
          )}
          href="https://discord.com/api/oauth2/authorize?client_id=1132724830135922688&permissions=277025508352&scope=bot%20applications.commands"
          target="_blank"
        >
          <PlusCircleIcon className="mr-2" /> Invite
        </Link>
        <Link
          className={buttonVariants({ variant: 'secondary' })}
          href="https://github.com/aelew/cryptotracker"
          target="_blank"
        >
          <GitHubLogoIcon className="mr-2" /> GitHub
        </Link>
      </div>
    </MotionDiv>
  );
}
