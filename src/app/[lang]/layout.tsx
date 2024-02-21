import { Locale, i18n } from "@/i18n.config";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Metadata } from "next";
import { fontSans } from "../../config/fonts";
import { siteConfig } from "../../config/site";
import "../../styles/globals.css";
import { Navbar } from "./components/navbar";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import { getDictionary } from "@/src/lib/dictionary";
import ToolTips from "./components/ui/ToolTips";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  }
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { footer } = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col dark:bg-[#1b1b1f]">
            <Navbar lang={params.lang} />
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">{children}</main>
            <footer className="flex w-full items-center justify-center py-3">
              <ToolTips content={footer.tooltip} placement="top">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/SofRahmani"
                  title="Github Repository"
                >
                  <span className="text-default-600">{footer.content}</span>
                  <p className="text-[#f67373]">Sofiane Rahmani</p>
                </Link>
              </ToolTips>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
