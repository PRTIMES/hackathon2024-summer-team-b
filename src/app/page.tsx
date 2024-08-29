import Link from "next/link";

import SearchDrawer from "~/components/search/search-drawer";
import { ScrollToTopButton } from "~/components/ui/scrollToTopButton";

import Header from "./components/header";
import { PaginationDemo } from "./components/pagination";
import ReleaseList from "./components/release-list";
import { SelectDemo } from "./components/select-list/select-list";

export default function Home() {
  return (
    <article id="top">
      <Header />
      <SelectDemo />
      <ReleaseList />
      <SearchDrawer />
      <PaginationDemo />
    </article>
  );
}
