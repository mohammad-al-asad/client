"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TiWorld } from "react-icons/ti";
import { Langueage } from "@/types/components/home";

export default function LanSelector({
  languages,
}: {
  languages: Langueage[];

}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [languageCode, setLanguageCode] = React.useState("en");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const url = new URL(location?.href);
  const locale_language = url.searchParams.get("locale_language");

  const handleChangeLanguage = (code: string) => {
    if (languageCode == code) return;
    if (languageCode == "en" && code == "en") return;
    setLanguageCode(code);
    url.searchParams.set("locale_language", code);
    history.pushState({}, "", url);

    location?.reload();
  };

  React.useEffect(() => {
    if (locale_language) setLanguageCode(locale_language);
  }, [locale_language]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!font-bold  !uppercase"
      >
        <TiWorld className="w-4 h-4" /> {languageCode}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="bg-[#3C095D] rounded-sm">
          {languages.map((lan) => (
            <MenuItem
              key={lan.documentId}
              onClick={() => handleChangeLanguage(lan.code)}
              className="!text-white hover:text-[#3C095D]/90"
            >
              {lan.name}
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}
