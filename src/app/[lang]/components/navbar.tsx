import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from "@nextui-org/navbar";
import NavItems from "./navbar/NavItems";

import NextLink from "next/link";
import { siteConfig } from "../../../config/site";

import { DiscordIcon, GithubIcon, HeartFilledIcon, SearchIcon, TwitterIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";
import { Logo } from "./icons";
import NavMenuItems from "./navbar/NavMenuItems";

export const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm"
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder={navigation.search}
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered shouldHideOnScroll className='bg-[#161618]'>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
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
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="bg-default-100 text-sm font-normal text-default-600"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
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
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
