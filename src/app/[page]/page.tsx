import SearchDrawer from "~/components/search/search-drawer";

import Header from "../components/header";
import { ReleaseListPagination } from "../components/pagination";
import ReleaseList from "../components/release-list";
import { SelectDemo } from "../components/select-list/select-list";

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
        <ReleaseListPagination
          page={Number(params.page)}
          search={searchParams.search}
        />
        <SelectDemo />
        <ReleaseList page={Number(params.page)} search={searchParams.search} />
        <SearchDrawer />
        <ReleaseListPagination
          page={Number(params.page)}
          search={searchParams.search}
        />
      </div>
    </article>
  );
}
