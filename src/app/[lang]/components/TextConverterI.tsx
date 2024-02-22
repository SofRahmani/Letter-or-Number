"use client";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";

export interface TextConverterProps {
  lang: string;
  label: string;
  labelResult: string;
  placeholder: string;
}

export default function TextConverterI({
  lang,
  label,
  labelResult,
  placeholder
}: TextConverterProps) {
  const [value, setValue] = useState("");

  const changeColor = (text: string) => {
    const words = text.split(" ");

    const coloredWords = words.map((word, wordIndex) => {
      const letters = word.split("").map((letter, index) => {
        if (letter === "i" || letter === "I") {
          return (
            <span key={index} className="text-green-500">
              {letter}
            </span>
          );
        } else if (letter === "l" || letter === "L") {
          return (
            <span key={index} className="text-[#f67373]">
              {letter}
            </span>
          );
        }
        return <span key={index}>{letter}</span>;
      });

      return <div key={wordIndex}>{letters}</div>;
    });

    return coloredWords;
  };

  return (
    <section className=" flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch ">
      <Textarea
        label={label}
        placeholder={placeholder}
        className="md:max-w-[50%]"
        lang={lang}
        size="lg"
        radius="sm"
        minRows={10}
        onChange={e => setValue(e.target.value)}
      />
      <div className=" max-h-[500px] min-h-[236px] w-full overflow-scroll text-wrap rounded-md bg-[#f4f4f5] px-3 py-2 text-justify dark:bg-[#27272a] md:w-[50%] overscroll-none ">
        <div className=" flex h-full w-full flex-wrap content-start gap-1 overflow-x-hidden overflow-y-scroll text-wrap text-justify ">
          {changeColor(value)}
        </div>
      </div>
    </section>
  );
}
