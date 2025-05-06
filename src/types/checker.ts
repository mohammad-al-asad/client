import { LinkButton, Nav } from "./components/home";
import { Blog } from "./components/career";

export function isOfType<T>(
  obj: unknown,
  typeGuard: (obj: unknown) => obj is T
): obj is T {
  return typeGuard(obj);
}

export function isNavArray(data: unknown): data is Nav[] {
  return (
    typeof data === "object" &&
    data !== null &&
    Array.isArray(data) &&
    data.every(
      (item: Nav) =>
        typeof item === "object" &&
        item !== null &&
        "label" in item &&
        typeof item.label === "string" &&
        "link" in item &&
        typeof item.link === "string"
    )
  );
}

export function isString(data: unknown): data is string {
  return data !== null && typeof data == "string" && data !== "";
}

export function isLinkButton(data: unknown): data is LinkButton {
  return (
    typeof data === "object" &&
    data !== null &&
    "label" in data &&
    typeof data.label === "string" &&
    "link" in data &&
    typeof data.link === "string"
  );
}

export function isBlog(data: unknown): data is Blog {
  return (
    typeof data === "object" &&
    data !== null &&
    "card_title" in data &&
    typeof data.card_title === "string" &&
    "card_description" in data &&
    typeof data.card_description === "string"
  );
}
