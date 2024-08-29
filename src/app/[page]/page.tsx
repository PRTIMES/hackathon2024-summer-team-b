import SearchDrawer from "~/components/search/search-drawer";

import Header from "../components/header";
import { ReleaseListPagination } from "../components/pagination";
import ReleaseList from "../components/release-list";
import { SelectDemo } from "../components/select-list/select-list";

export default function Home({ params }: { params: { page: string } }) {
  return (
    <article>
      <Header />
      <div className="pt-14 sm:pt-20 pb-16 sm:pb-3">
        <ReleaseListPagination page={Number(params.page)} />
        <SelectDemo />
        <ReleaseList page={Number(params.page)} />
        <SearchDrawer />
        <ReleaseListPagination page={Number(params.page)} />
      </div>
    </article>
  );
}
