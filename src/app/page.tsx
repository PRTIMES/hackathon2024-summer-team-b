import SearchDrawer from "~/components/search/search-drawer";

import Header from "./components/header";
import ReleaseList from "./components/release-list";
import { PaginationDemo } from "./components/pagination";
export default function Home() {
  return (
    <article>
      <Header />
      <ReleaseList />
      <SearchDrawer />
      <PaginationDemo/>

    </article>
  );
}
