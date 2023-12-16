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
