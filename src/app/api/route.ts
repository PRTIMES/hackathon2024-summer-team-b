export async function GET(request: Request) {
  const res =  await fetch("https://hackathon.stg-prtimes.net/api/releases", {
    method: "GET",
    headers: {
      'Content-Type': 'aplication/json',
      'Authorization': 'Bearer 37aaaf2e5398eec3521ca0408f9e0817999d81e014c000a3e65b55e6a807060c'
    }
    })

  const data = await res.json();
  const articleData = await Promise.all(
    data.map(async (e: any) => {
      // 各データに基づいて新しいリクエストを送信
      const categoryRes = await fetch(`https://hackathon.stg-prtimes.net/api/companies/${e.company_id}/releases/${e.release_id}/keywords`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 37aaaf2e5398eec3521ca0408f9e0817999d81e014c000a3e65b55e6a807060c' // 必要に応じて認証トークンを置き換えてください
        }
      });
      const {} = e
      const data = await categoryRes.json()
      const margeData = Object.assign(e, data)
      return margeData; // 各レスポンスをJSONに変換して返す
    })
  );

  return Response.json({articleData})
}