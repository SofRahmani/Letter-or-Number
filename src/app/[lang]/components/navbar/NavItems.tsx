"use client";
import { Locale } from "@/i18n.config";
import { NavbarItem } from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface NavItemsProps {
  lang: Locale;
  content: string;
  path: string;
}

export default function NavItems({ lang, content, path }: NavItemsProps) {
  const pathname = usePathname();

  const [active, setActive] = useState("");
  useEffect(() => {
    if (pathname === `/${lang}${path}`) {
      setActive("text-[#f67373]");
    } else {
      setActive("");
    }
  }, [pathname, lang, path]);

  return (
    <NavbarItem>
      <Link
        className={clsx(
          linkStyles({ color: "foreground" }),
          `hover:text-[#f67373] data-[active=true]:font-medium data-[active=true]:text-primary ${active} `
        )}
        color="foreground"
        href={`/${lang}${path}`}
      >
        {content}
      </Link>
    </NavbarItem>
  );
}
