"use client";
import { i18n } from "@/i18n.config";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ToggleLaguage() {
  const pathname = usePathname();
  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className=" flex flex-row gap-4 ">
      {i18n.locales.map(locale => {
        return (
          <Link key={locale} href={redirectedPathname(locale)}>
            <Button
              disableRipple
              className="bg-transparent p-0 hover:border-[#f67373] hover:text-[#f67373] data-[hover=true]:bg-transparent"
              radius="sm"
              size="sm"
              variant="bordered"
            >
              {locale}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
