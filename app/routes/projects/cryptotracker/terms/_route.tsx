import { MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

export const meta: MetaFunction = () => {
  return [{ title: 'CryptoTracker - Terms of Service | aelew' }];
};

export default function CryptoTrackerTermsOfServicePage() {
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
      <p className="text-lg leading-5 text-muted-foreground">
        Terms of Service
      </p>
      <ol className="grid gap-4 text-muted-foreground">
        <li>
          <strong>Introduction</strong>
          <p>
            These Terms and Conditions govern your use of the CryptoTracker
            (&quot;Bot&quot;) for Discord (&quot;Service&quot;). By accessing or
            using the Service, you agree to be bound by these Terms. If you
            disagree with any part of these Terms, then you may not access or
            use the Service.
          </p>
        </li>

        <li>
          <strong>Definitions</strong>
          <p>
            &quot;You&quot; means the individual accessing or using the Service,
            or the company, or other legal entity on behalf of which such
            individual is accessing or using the Service.
          </p>
        </li>

        <li>
          <strong>Privacy</strong>
          <p>
            Your use of the Service is subject to our Privacy Policy, which
            informs you about our data collection, use, and disclosure
            practices.
          </p>
        </li>

        <li>
          <strong>Service Provision</strong>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as
            available,&quot; without any warranties of any kind, either express
            or implied.
          </p>
        </li>

        <li>
          <strong>User Conduct</strong>
          <p>
            You may not use the Service in any way that is unlawful, harmful,
            threatening, abusive, harassing, tortious, defamatory, vulgar,
            obscene, libelous, invasive of another&apos;s privacy, hateful, or
            otherwise objectionable.
          </p>
        </li>

        <li>
          <strong>Limitation of Liability</strong>
          <p>
            In no event shall the author, Andre Lew, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use the Service.
          </p>
        </li>

        <li>
          <strong>Termination</strong>
          <p>
            We may terminate or suspend your access to the Service immediately,
            without prior notice or liability, under our sole discretion, for
            any reason whatsoever and without limitation.
          </p>
        </li>

        <li>
          <strong>Changes to Terms</strong>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time.
          </p>
        </li>

        <li>
          <strong>Governing Law</strong>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the United States of America, without regard to its conflict of law provisions.
          </p>
        </li>

        <li>
          <strong>Contact Us</strong>
          <p>
            If you have any questions about these Terms, please contact us at
            cryptotracker@aelew.com.
          </p>
        </li>
      </ol>
    </motion.div>
  );
}
