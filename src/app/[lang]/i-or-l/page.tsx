import { Locale } from "@/i18n.config";
import { getDictionary } from "@/src/lib/dictionary";
import { subtitle, title } from "../components/primitives";
import TextConverterI from '../components/TextConverterI'

export default async function IOrL({ params }: { params: { lang: Locale } }) {
  const { page, convert } = await getDictionary(params.lang);

  return (
    <div className=" flex flex-col gap-6 ">
      <div>
        <h1 className={title()}>
          {page.iorl.title} <span className={title({ color: "green" })}>{page.iorl.I}</span>{" "}
          {page.iorl.or} <span className={title({ color: "red" })}>{page.iorl.L}</span>{" "}
          {page.iorl.question}{" "}
        </h1>
        <h2 className={`${subtitle()} text-balance`}>{page.iorl.content}</h2>
      </div>
      <TextConverterI
        lang={params.lang}
        label={convert.label}
        placeholder={convert.placeholder}
        labelResult={convert.result}
      />
    </div>
  );
}
