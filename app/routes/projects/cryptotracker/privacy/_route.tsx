import { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

export const meta: MetaFunction = () => {
  return [{ title: 'CryptoTracker - Privacy Policy | aelew' }];
};

export default function CryptoTrackerPrivacyPolicyPage() {
  return (
    <motion.div
      className="my-auto flex flex-col items-center gap-3 pt-8"
      transition={{ type: 'tween' }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link to="/projects/cryptotracker">
        <img
          src="/images/cryptotracker/coin.png"
          className="drop-shadow-lg"
          height={56}
          width={56}
          alt="Coin"
        />
      </Link>
      <h1 className="text-gradient text-center text-3xl font-bold tracking-tight">
        CryptoTracker
      </h1>
      <p className="text-lg leading-5 text-muted-foreground">Privacy Policy</p>
      <ol className="grid gap-4 text-muted-foreground">
        <li>
          <strong>Introduction</strong>
          <p>
            This text outlines the privacy policy for CryptoTracker
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We respect your
            privacy and are committed to protecting your personal data. This
            Privacy Policy will inform you about how we look after your personal
            data when you use our service and tell you about your privacy rights
            and how the law protects you.
          </p>
        </li>

        <li>
          <strong>What Data Do We Collect?</strong>
          <p>
            We log cryptocurrency transaction IDs that pass through our
            confirmation-tracking queue to our server console. These logs are
            not permanently stored and may be automatically deleted at any time.
          </p>
        </li>

        <li>
          <strong>How Do We Use Your Data?</strong>
          <p>
            We log transaction IDs to our server console to ensure
            confirmation-tracking operations are working as expected. We do not
            store or process any other data inputted by our users.
          </p>
        </li>

        <li>
          <strong>Your Legal Rights</strong>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data including the right to
            receive a copy of the personal data we hold about you and the right
            to make a complaint at any time to your country&apos;s Data
            Protection Authority. However, we would appreciate the chance to
            deal with your concerns before you approach your country&apos;s Data
            Protection Authority. We do not knowingly collect personal data from
            our users and do not sell, rent, or otherwise transfer personal data
            to third parties.
          </p>
        </li>

        <li>
          <strong>Updates To This Policy</strong>
          <p>
            We may update this Privacy Policy from time to time in response to
            changing legal, technical or business developments. When we update
            our Privacy Policy, we will take appropriate measures to inform you,
            consistent with the significance of the changes we make.
          </p>
        </li>

        <li>
          <strong>Contact Us</strong>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at cryptotracker@aelew.com.
          </p>
        </li>
      </ol>
    </motion.div>
  );
}
