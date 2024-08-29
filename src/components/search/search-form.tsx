"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?search=${searchQuery}`);
  };

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSearch}>
      <Input
        className="text-base text-black min-w-64"
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button className="bg-accent hover:bg-accent/70">
        プレスリリースを検索
      </Button>
    </form>
  );
}
