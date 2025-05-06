export interface Nav {
  label: string;
  link: string;
}

export interface LinkButton {
  label: string;
  link: string;
}

export interface HeroButton {
  label: string;
  link: string;
  type: string;
}

export interface HeaderProps {
  brand: string;
  nav: Nav[];
  button: LinkButton;
}

export interface RichText {
  type: string;
  level: number;
  children: [{ text: string }];
}
export interface Content {
  icon: string;
  text: string;
  heading?: string;
}
export interface Checkbox {
  label: string;
}
export interface HeroProps {
  hero_texts: RichText[];
  hero_image: { url: string };
  hero_buttons: HeroButton[];
  checkbox: Checkbox[];
}
export interface ContentPairPrimaryProps {
  content_headings: RichText[];
  content_image: { url: string };
  content_buttons: HeroButton[];
  orientation: string;
  content: Content[];
}
export interface ReviewSectionProps {
  blog: string;
  profile: { url: string };
  author_name: string;
}
// Tool-Section
export interface Tool {
  tool_image: { url: string };
  tool_information: {
    headerTitle: string;
    footerTitle: string;
    footerTag: string;
  };
}

export interface ToolSectionProps {
  heading: string;
  description: string;
  tool: Tool[];
}
// FooterData
export interface Link {
  text: string;
  redirect: string;
}
export interface Data {
  title: string;
  links: Link[];
}

export interface Langueage {
  id: number;
  documentId: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isDefault: boolean;
}

interface FooterLink {
  text: string;
  redirect: string;
}

interface FooterNavSection {
  title: string;
  link: FooterLink[];
}

interface SocialMedia {
  id: number;
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface FooterMainData {
  id: number;
  nav: FooterNavSection[];
  socail_media: SocialMedia;
}
export interface FooterProps {
  languages: Langueage[];
  footerMain: FooterMainData;
}
