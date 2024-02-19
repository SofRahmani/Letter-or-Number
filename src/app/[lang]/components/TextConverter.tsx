"use client";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";

export interface TextConverterProps {
  lang: string;
  label: string;
  labelResult: string;
  placeholder: string;
}

export default function TextConverter({
  lang,
  label,
  labelResult,
  placeholder
}: TextConverterProps) {
  const [value, setValue] = useState("");

  const changeColor = (text: string) => {
    return text.split("").map((letter, index) => {
      if (letter === "o" || letter === "O") {
        return (
          <span key={index} className="text-green-500">
            {letter}
          </span>
        );
      } else if (letter === "0") {
        return (
          <span key={index} className="text-red-500">
            {letter}
          </span>
        );
      }
      return letter;
    });
  };

  return (
    <section className=" flex gap-6 md:flex-row ">
      <Textarea
        label={label}
        placeholder={placeholder}
        className="max-w-[50%]"
        lang={lang}
        size="lg"
        radius="sm"
        minRows={10}
        onChange={e => setValue(e.target.value)}
      />
      <div className=" max-h-[236px] w-[50%] overflow-scroll rounded-md bg-[#27272a] px-3 py-2 text-justify ">
        {changeColor(value)}
      </div>
    </section>
  );
}
