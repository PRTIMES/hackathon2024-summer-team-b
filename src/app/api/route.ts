import type { Keyword, Release } from "~/libs/types/prtimes";

function getYesterdayDate(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split("T")[0];
}

export async function GET() {
  const yesterdayDate = getYesterdayDate();

  const releasesRes = await fetch(
    `${process.env.PRTIMES_API_URL}/releases?from_date=${yesterdayDate}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        Authorization: `Bearer ${process.env.PRTIMES_API_TOKEN}`,
      },
    },
  );

  const releases = (await releasesRes.json()) as Release[];
  const releasesWithKeywords = await Promise.all(
    releases.map(async (release) => {
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
