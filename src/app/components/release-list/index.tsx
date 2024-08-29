import { getReleases } from "~/app/data/releases";

import ReleaseItem from "./release-item";

export default async function ReleaseList() {
  const releases = await getReleases();

  if (!releases.success || !releases.data) {
    return (
      <main className="pt-14 sm:pt-16 pb-16 sm:pb-3">
        <div className="text-center">
          <p className="text-gray-600 text-lg">データの取得に失敗しました。</p>
          <p className="text-gray-600 text-lg">
            時間をおいて再度お試しください。
          </p>
        </div>
      </main>
    );
  }

  console.log(JSON.stringify(releases.data, null, 2));

  return (
    <main className="pt-14 sm:pt-16 pb-16 sm:pb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-3">
      {releases.data!.map((release) => {
        return <ReleaseItem key={release.id} {...release} />;
      })}
    </main>
  );
}
