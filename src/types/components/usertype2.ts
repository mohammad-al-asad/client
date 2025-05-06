import { RichText } from "./home";

export interface CardButton {
  label: string;
  link: string;
}
export interface ContentCardProps {
  contentCardData: {
    card_texts: RichText[];
    card: { url: string };
    card_buttons: CardButton[];
  };
}
