import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

import type { Keyword, Release } from "~/libs/types/prtimes";

function getYesterdayDate(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split("T")[0];
}

export async function GET(req: Request) {
  try {
    const yesterdayDate = getYesterdayDate();

    const releasesRes = await fetch(
      `${process.env.PRTIMES_API_URL}/releases?from_date=2024-06-01?to_date=2024-06-30`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PRTIMES_API_TOKEN}`,
        },
      },
    );

    if (!releasesRes.ok) {
      throw new Error(`Failed to fetch releases: ${releasesRes.statusText}`);
    }

    const releases = (await releasesRes.json()) as Release[];
    console.log(`Fetched ${releases.length} releases`);

    const releasesWithKeywords: (Release & { keywords: Keyword[] })[] = [];

    await Promise.all(
      releases.map(async (release) => {
        try {
          const keywordsRes = await fetch(
            `${process.env.PRTIMES_API_URL}/companies/${release.company_id}/releases/${release.release_id}/keywords`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.PRTIMES_API_TOKEN}`,
              },
            },
          );

          if (!keywordsRes.ok) {
            throw new Error(
              `Failed to fetch keywords for release ${release.release_id}: ${keywordsRes.statusText}`,
            );
          }

          const keywords = (await keywordsRes.json()) as Keyword[];
          console.log(
            `Fetched ${keywords.length} keywords for release ${release.release_id}`,
          );

          const systemPrompt = `
以下の基準に従って、入力されたキーワードが学生や就職活動に関連するかどうかを判断し、true または false を返してください：

1. 学生生活に直接関係するキーワード（例：大学、学生、キャンパスライフ）
2. 就職活動や進路選択に関するキーワード（例：就活、インターンシップ、採用）
3. 若者の関心事や流行に関するキーワード（例：SNS、ファッション、アプリ）
4. 教育や学習に関するキーワード（例：オンライン授業、資格取得、留学）

上記のいずれかに当てはまる場合は true、それ以外の場合は false を返してください。
結果は result キーの値として返してください。
`;

          const result = await generateObject({
            model: openai("gpt-4-turbo"),
            schema: z.object({
              result: z.boolean(),
            }),
            messages: [
              { role: "system", content: systemPrompt },
              {
                role: "user",
                content: `分析するキーワード: ${keywords.map((k) => k.name).join(", ")}`,
              },
            ],
          });

          console.log(
            `AI analysis result for release ${release.release_id}:`,
            result,
          );

          if (result.object.result) {
            releasesWithKeywords.push({ ...release, keywords });
          }
        } catch (error) {
          console.error(
            `Error processing release ${release.release_id}:`,
            error,
          );
        }
      }),
    );

    console.log(
      `Filtered ${releasesWithKeywords.length} releases with relevant keywords`,
    );
    return Response.json({ data: releasesWithKeywords });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in GET function:", error);
      return Response.json(
        { error: "Internal Server Error", details: error.message },
        { status: 500 },
      );
    } else {
      return Response.json(
        {
          error: "Internal Server Error",
          details: "An unknown error occurred",
        },
        { status: 500 },
      );
    }
  }
}
