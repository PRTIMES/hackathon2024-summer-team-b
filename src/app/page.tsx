import SearchDrawer from "~/components/search/search-drawer";

import Header from "./components/header";
import { PaginationDemo } from "./components/pagination";
import ReleaseList from "./components/release-list";
import { SelectDemo } from "./components/select-list/select-list";

export default function Home() {
  return (
    <article>
      <Header />
      <SelectDemo />
      <ReleaseList />
      <SearchDrawer />
      <PaginationDemo />
    </article>
  );
}
