import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";
import { subtitle, title } from "./components/primitives";
import { Spotlight } from './components/ui/Spotlight'

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(params.lang);

  return (
    <section className="flex flex-col items-center justify-center gap-12 py-8 md:py-10">
      <div className="inline-block max-w-4xl justify-center text-center">
        <h1 className={title()}>
          {page.home.title}
          <span className={title({ color: "red" })}>{page.home.title2}</span>
        </h1>
        <Spotlight className='-top-40 left-0 md:left-80 md:-top-64' fill='white' />
        <br />
        <h2 className={`${subtitle({ class: "mt-4" })} text-pretty `}>{page.home.content}</h2>
      </div>
      <div className=" flex h-full max-w-4xl flex-col items-center justify-center gap-4 rounded-xl bg-[#f4f4f5] p-6 dark:bg-[#27272a] ">
        <h3 className={`${subtitle()} text-center text-slate-950 dark:text-white`}>
          {page.home.why}
        </h3>
        <p className={` text-center text-slate-950 dark:text-white `}>{page.home.whyContent}</p>
        <p className={` text-center text-slate-950 dark:text-white `}>{page.home.star}⭐</p>
      </div>
    </section>
  );
}
