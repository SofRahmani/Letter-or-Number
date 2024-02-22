"use client";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";

export interface TextConverterProps {
  lang: string;
  label: string;
  labelResult: string;
  placeholder: string;
}

export default function TextConverterO({
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
        if (letter === "o" || letter === "O") {
          return (
            <span key={index} className="text-green-500">
              {letter}
            </span>
          );
        } else if (letter === "0") {
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
        maxLength={2000}
        minRows={10}
        onChange={e => setValue(e.target.value)}
      />
      <div className=" max-h-[500px] min-h-[236px] w-full overflow-hidden text-wrap rounded-md bg-[#f4f4f5] px-3 py-2 text-justify dark:bg-[#27272a] md:w-[50%] ">
        <div className=" flex h-full w-full flex-wrap content-start gap-1 overflow-x-hidden overflow-y-auto text-wrap text-justify ">
          {changeColor(value)}
        </div>
      </div>
    </section>
  );
}
