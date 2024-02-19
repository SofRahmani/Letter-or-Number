import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";
import TextConverter from "../components/TextConverter";
import { subtitle, title } from "../components/primitives";

export default async function BlogPage({ params }: { params: { lang: Locale } }) {
  const { page, convert } = await getDictionary(params.lang);

  return (
    <div className=' flex flex-col gap-6 '>
      <div>
        <h1 className={title()}>
          {page.Ooro.title} <span className={title({ color: "green" })}>{page.Ooro.O}</span>{" "}
          {page.Ooro.or} <span className={title({ color: "red" })}>{page.Ooro[0]}</span>{" "}
          {page.Ooro.question}{" "}
        </h1>
        <h2 className={`${subtitle()} text-pretty`}>{page.Ooro.content}</h2>
      </div>
      <TextConverter lang={params.lang} label={convert.label} placeholder={convert.placeholder} labelResult={convert.result} />
    </div>
  );
}
