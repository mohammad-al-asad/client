import { RichText } from "./home";

export interface FeaturesList {
  title: string;
  blog: string;
}
export interface FeaturesListProps {
  featuresListData: FeaturesList[];
}
export interface HeroSupportingTextProps {
  heroSupportingTextData: RichText[];
}
export interface ShowcaseButton {
  label: string;
  link: string;
}
export interface MobileShowcaseProps {
  mobileShowcaseData: {
    showcase_texts: RichText[];
    showcase_image: { url: string };
    showcase_banner: { url: string };
    position: string;
    showcase_buttons: ShowcaseButton[];
  };
}
