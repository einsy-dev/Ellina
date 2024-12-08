"use client";
import { useState } from "react";
import { qaData } from "@/shared/const/data";
import ListItem from "./listItem/ListItem";

export default function Qa() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="flex flex-col gap-[--gap-sm]">
      {qaData.map((item, index) => (
        <ListItem
          key={index}
          open={open === index}
          setOpen={setOpen}
          el={item}
          text={item.text}
          index={index}
        />
      ))}
    </ul>
  );
}
