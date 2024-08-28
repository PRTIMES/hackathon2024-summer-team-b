import Image from "next/image";

import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

export default function ReleaseItem() {
  return (
    <Card className="overflow-hidden relative">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <CardContent className="p-0">
          <div className="relative flex sm:block items-center">
            <Image
              src="https://prcdn.freetls.fastly.net/release_image/35640/162/35640-162-7b93f5eea56047041fc24bb9ff227bf3-768x473.png?format=jpeg&auto=webp&quality=85%2C65"
              alt="release"
              className="hidden sm:block"
              width={768}
              height={473}
            />
            <div className="sm:hidden">
              <Image
                src="https://prcdn.freetls.fastly.net/release_image/35640/162/35640-162-7b93f5eea56047041fc24bb9ff227bf3-768x473.png?format=jpeg&auto=webp&quality=85%2C65"
                alt="release"
                width={120}
                height={74}
              />
            </div>
            <h2 className="sm:absolute sm:font-bold tracking-wider py-1 px-3 rounded-br-xl left-0 text-white bg-gradient-to-r from-black/80 to-black/40 text-sm sm:text-xl sm:rounded-br-none sm:rounded-tr-xl top-0 sm:top-auto sm:bottom-0  absolute z-30 ">
              会社名
            </h2>
            <div className="sm:hidden py-1.5 px-1 space-y-1 flex-1">
              <h3 className="text-lg font-bold">タイトル</h3>
              <div className="flex gap-1 flex-wrap">
                <Badge className="bg-[#C24F4F]">キーワード</Badge>
                <Badge className="bg-[#C24F4F]">キーワード</Badge>
                <Badge className="bg-[#C24F4F]">キーワード</Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-3 pb-3 pt-1.5 hidden sm:flex flex-col items-start gap-1.5">
          <h3 className="text-xl font-bold mt-0.5">タイトル</h3>
          <p className="bg-black px-5 py-1 text-white text-sm rounded-sm">
            カテゴリ
          </p>
          <div className="flex gap-1">
            <Badge className="bg-[#C24F4F]">キーワード</Badge>
            <Badge className="bg-[#C24F4F]">キーワード</Badge>
            <Badge className="bg-[#C24F4F]">キーワード</Badge>
          </div>
          <p className="text-sm mt-0.5 text-muted-foreground text-right w-full">
            2024/08/26
          </p>
        </CardFooter>
      </a>
    </Card>
  );
}
