import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { subtitle, title } from "./components/primitives";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(params.lang);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center text-center">
        <h1 className={title()}>{page.home.title}</h1>
        <h1 className={title({ color: "red" })}>{page.home.title2}</h1>
        <br />
        <h2 className={`${subtitle({ class: "mt-4" })} text-pretty `}>{page.home.content}</h2>
      </div>
      <Image src={Logo} alt="Logo Letter or Number" className=' scale-150 hover:scale-[155%] transition-all ' />
    </section>
  );
}
