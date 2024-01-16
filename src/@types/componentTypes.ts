export type ButtonType = {
  children: React.ReactNode;
  action?: () => void;
  to?: string;
  href?: string;
  download?: boolean;
  type?: string;
  full?: boolean;
};

export type CustomLinkType = {
  to: string;
  children: React.ReactNode;
};

export type NavbarType = {
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
  theme: null | string;
};

export type TitleType = {
  children: React.ReactNode;
};

export type SkillCardType = {
  name: string;
  icon: JSX.Element;
  items: string[];
};

export type ProjectCardType = {
  id: number;
  title: string;
  desc: string;
  image: string;
  github: string;
  preview: string;
  tags: string[];
  filter: string[];
};

export type ProjectType = {
  id: number;
  title: string;
  desc: string;
  image: string;
  github: string;
  preview: string;
  tags: string[];
  filter: string[];
  background: string;
  challenges: string;
  actionsOutcomes: string;
};

export type TagType = {
  children: React.ReactNode;
};

export type FooterType = {
  theme: string | null;
};

export type ProjectFilterButtonType = {
  children: string;
  selected: string;
  handleSelect: (name: string) => void;
};

export type ProjectPreviewType = {
  title: string;
  projects: ProjectType[];
};

export type ResumeSectionType = {
  title: string;
  children: React.ReactNode;
};

export type AppContextType = {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
};

export type AppProviderType = { children: React.ReactNode };
