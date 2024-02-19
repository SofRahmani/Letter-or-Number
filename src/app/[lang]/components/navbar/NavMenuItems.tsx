"use client";
import { Locale } from "@/i18n.config";
import { Link } from "@nextui-org/link";
import { NavbarMenuItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface NavMenuItemsProps {
  lang: Locale;
  content: string;
  path: string;
}

export default function NavMenuItems({ lang, content, path }: NavMenuItemsProps) {
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
    <NavbarMenuItem className=" flex h-16 flex-col items-center justify-center bg-[#f6f6f7] dark:bg-[#1b1b1f] ">
      <Link
        color={`foreground`}
        href={`/${lang}${path}`}
        size="lg"
        className={`${active} flex h-full w-full flex-col items-center justify-center text-2xl`}
      >
        {content}
      </Link>
    </NavbarMenuItem>
  );
}
