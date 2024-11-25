type SocialMediaProfile = {
  icon: any;
  href: string;
};

type Experience = {
  organization: string;
  title: string;
  href: string;
  date: string;
  active: boolean;
  logo: {
    rounded: boolean;
    data: ImageMetadata;
  };
};

type Project = {
  name: string;
  description: string;
  link: { type: string; href: string };
  cover: ImageMetadata;
  openSource: boolean;
  icons: any[];
};

type Gem = {
  title: string;
  description: string;
  href: string;
};

type GemGroup = {
  icon: any;
  title: string;
  slug: string;
  items: Gem[];
};

export type { SocialMediaProfile, Experience, Project, GemGroup };
