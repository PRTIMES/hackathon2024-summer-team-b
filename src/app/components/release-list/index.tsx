import { getReleases } from "~/app/data/releases";

import ReleaseItem from "./release-item";

export default async function ReleaseList({
  page,
  search,
}: {
  page?: number;
  search?: string;
}) {
  const releases = await getReleases({
    offset: Number(page) * 12 - 12,
    search,
  });

  if (!releases.success) {
    return (
      <main>
        <div className="text-center">
          <p className="text-gray-600 text-lg">データの取得に失敗しました。</p>
          <p className="text-gray-600 text-lg">
            時間をおいて再度お試しください。
          </p>
        </div>
      </main>
    );
  }

  if (releases.data!.length === 0) {
    return (
      <p className="text-center">プレスリリースが見つかりませんでした。</p>
    );
  }

  return (
    <main className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-3">
      {releases.data!.map((release: any) => {
        return <ReleaseItem key={release.id} {...release} />;
      })}
    </main>
  );
}
