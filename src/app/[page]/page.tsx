import { Suspense } from "react";

import SearchDrawer from "~/components/search/search-drawer";

import Header from "../components/header";
import { ReleaseListPagination } from "../components/pagination";
import ReleaseListPaginationLoading from "../components/pagination/loading";
import ReleaseList from "../components/release-list";
import ReleaseListLoading from "../components/release-list/loading";

export default function Home({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { search: string };
}) {
  return (
    <article>
      <Header />
      <div className="pt-14 sm:pt-20 pb-16 sm:pb-3">
        <Suspense fallback={<ReleaseListPaginationLoading />}>
          <ReleaseListPagination
            page={Number(params.page)}
            search={searchParams.search}
          />
        </Suspense>
        <Suspense fallback={<ReleaseListLoading />}>
          <ReleaseList
            page={Number(params.page)}
            search={searchParams.search}
          />
        </Suspense>
        <Suspense fallback={<ReleaseListPaginationLoading />}>
          <ReleaseListPagination
            page={Number(params.page)}
            search={searchParams.search}
          />
        </Suspense>
        <SearchDrawer />
      </div>
    </article>
  );
}
