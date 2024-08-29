import type { Keyword, Release } from "~/libs/types/prtimes";

export async function GET() {
  const releasesRes = await fetch(`${process.env.PRTIMES_API_URL}/releases`, {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json",
      Authorization: `Bearer ${process.env.PRTIMES_API_TOKEN}`,
    },
  });

  const releases = (await releasesRes.json()) as Release[];
  const releasesWithKeywords = await Promise.all(
    releases.map(async (release) => {
      // 各データに基づいて新しいリクエストを送信
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

      const keywords = (await keywordsRes.json()) as Keyword[];
      const releasesWithKeywords = Object.assign(release, { keywords });
      return releasesWithKeywords;
    }),
  );

  return Response.json({ data: releasesWithKeywords });
}
