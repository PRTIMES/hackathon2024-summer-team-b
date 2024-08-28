import type { Keyword, Release } from "~/libs/types/prtimes";

export async function GET(request: Request) {
  const res = await fetch("https://hackathon.stg-prtimes.net/api/releases", {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json",
      Authorization: `Bearer ${process.env.PRTIMES_API_TOKEN}`,
    },
  });

  const data = (await res.json()) as Release[];
  const articleData = await Promise.all(
    data.map(async (e) => {
      // 各データに基づいて新しいリクエストを送信
      const categoryRes = await fetch(
        `https://hackathon.stg-prtimes.net/api/companies/${e.company_id}/releases/${e.release_id}/keywords`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.PRTIMES_API_TOKEN}`,
          },
        },
      );

      const data = (await categoryRes.json()) as Keyword[];
      const margeData = Object.assign(e, { category: data });
      return margeData; // 各レスポンスをJSONに変換して返す
    }),
  );

  return Response.json({ articleData });
}
