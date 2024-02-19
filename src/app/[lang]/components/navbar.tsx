import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from "@nextui-org/navbar";
import NavItems from "./navbar/NavItems";

import NextLink from "next/link";
import { siteConfig } from "../../../config/site";

import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";
import Logo from "./navbar/Logo";
import NavMenuItems from "./navbar/NavMenuItems";
import { ToggleLaguage } from "./navbar/ToggleLaguage";

export const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBordered
      shouldHideOnScroll
      className="bg-[#f6f6f7] dark:bg-[#161618]"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href={`/${lang}/`}>
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          <NavItems lang={lang} path="/" content={navigation.home} />
          <NavItems lang={lang} path="/o-or-0" content={navigation.Ooro} />
          <NavItems lang={lang} path="/i-or-l" content={navigation.iorl} />
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden basis-1/5 sm:flex sm:basis-full" justify="end">
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <ToggleLaguage />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavMenuItems lang={lang} path="/" content={navigation.home} />
          <NavMenuItems lang={lang} path="/o-or-0" content={navigation.Ooro} />
          <NavMenuItems lang={lang} path="/i-or-l" content={navigation.iorl} />
          <NavbarMenuItem>
            <ToggleLaguage />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
