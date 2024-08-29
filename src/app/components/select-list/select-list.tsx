"use client";

import { useRouter } from "next/navigation";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function SelectDemo() {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    // クエリパラメータを更新
    router.push(`?category=${value}`);
    console.log("Selected category:", value);
  };

  return (
    <div className="flex justify-end items-center px-4">
      <p className="text-black">カテゴリー&nbsp;:&nbsp;</p>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px] ml-4">
          <SelectValue placeholder="カテゴリーを選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
