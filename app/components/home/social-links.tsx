import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiX
} from '@icons-pack/react-simple-icons';
import { Link } from '@remix-run/react';

const socials = [
  { icon: SiDiscord, href: 'https://discord.dog/204594797812383744' },
  { icon: SiGithub, href: 'https://github.com/aelew' },
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/aelew' },
  { icon: SiX, href: 'https://x.com/aelew_' },
  { icon: EmailIcon, href: 'mailto:me@aelew.com' }
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <Link
          key={social.href}
          to={social.href}
          target="_blank"
          rel="noreferrer"
        >
          <social.icon className="h-6 w-6 text-foreground transition-opacity hover:opacity-75" />
        </Link>
      ))}
    </div>
  );
}

function EmailIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
    >
      <title>Email</title>
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  );
}
