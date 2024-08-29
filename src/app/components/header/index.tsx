import Link from "next/link";

import SearchForm from "~/components/search/search-form";

export default function Header() {
  return (
    <header className="flex justify-between items-center shadow bg-accent/50 backdrop-blur py-2 px-4 text-primary-foreground text-sm fixed top-0 z-50 w-full">
      <div className="text-center font-bold">
        <Link href="/1">
          <h1 className="text-sm sm:text-sm">PR Carriers 🍓</h1>
        </Link>
      </div>
      <div className="hidden sm:block">
        <SearchForm />
      </div>
    </header>
  );
}
