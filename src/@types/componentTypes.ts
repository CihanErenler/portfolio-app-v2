import { IconType } from "react-icons";

export type ButtonType = {
  children: React.ReactNode;
  action?: () => void;
  to?: string;
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
};

export type TagType = {
  children: React.ReactNode;
};
