import SearchDrawer from "~/components/search/search-drawer";

import Header from "./components/header";
import { PaginationDemo } from "./components/pagination";
import ReleaseList from "./components/release-list";

export default function Home() {
  return (
    <article>
      <Header />
      <ReleaseList />
      <SearchDrawer />
      <PaginationDemo />
    </article>
  );
}
