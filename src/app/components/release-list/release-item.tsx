import lineClamp from "@tailwindcss/line-clamp";
import Image from "next/image";

import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import type { Keyword, Release } from "~/libs/types/prtimes";

type Props = {
  id: string;
  company_name: string;
  title: string;
  category_name: string;
  image_url: string;
  url: string;
  created_at: string;
  keywords: {
    keyword: {
      name: string;
    } | null;
  }[];
};

export default function ReleaseItem({
  company_name,
  title,
  category_name,
  image_url,
  url,
  created_at,
}: Props) {
  return (
    <Card className="overflow-hidden relative">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CardContent className="p-0">
          <div className="relative flex sm:block items-center px-4 pt-6">
            <Image
              src={image_url}
              alt="release"
              className="hidden sm:block"
              width={768}
              height={473}
            />
            <div className="sm:hidden">
              <Image src={image_url} alt="release" width={120} height={74} />
            </div>
            <h2 className="sm:absolute sm:font-bold tracking-wider py-1 px-3 rounded-br-xl left-0 text-white bg-gradient-to-r from-black/80 to-black/40 text-sm sm:text-xl sm:rounded-br-none sm:rounded-tr-xl top-0 sm:top-auto sm:bottom-0  absolute z-30 ">
              {company_name}
            </h2>
            <div className="sm:hidden py-1.5 px-1 space-y-1 flex-1">
              <h3 className="text-lg font-bold line-clamp-3">{title}</h3>
              <div className="flex gap-1 flex-wrap">
                <Badge className="bg-[#C24F4F]">キーワード</Badge>
                <Badge className="bg-[#C24F4F]">キーワード</Badge>
                <Badge className="bg-[#C24F4F]">キーワード</Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-3 pb-3 pt-1.5 hidden sm:flex flex-col items-start gap-1.5">
          <h3 className="text-xl font-bold mt-0.5">{title}</h3>
          <p className="bg-black px-5 py-1 text-white text-sm rounded-sm">
            {category_name}
          </p>
          <div className="flex gap-1">
            <Badge className="bg-[#C24F4F]">キーワード</Badge>
            <Badge className="bg-[#C24F4F]">キーワード</Badge>
            <Badge className="bg-[#C24F4F]">キーワード</Badge>
          </div>
          <p className="text-sm mt-0.5 text-muted-foreground text-right w-full">
            {created_at}
          </p>
        </CardFooter>
      </a>
    </Card>
  );
}
