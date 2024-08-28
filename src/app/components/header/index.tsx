import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Header() {
  const handleSearch = async () => {};

  return (
    <header className="flex justify-between items-center shadow-2xl bg-accent/60 backdrop-blur py-2 px-4 text-primary-foreground text-sm fixed top-0 z-50 w-full">
      <div className="text-center font-bold">
        <h1 className="text-sm">strawberry carriers 🍓</h1>
      </div>
      <form className="flex gap-2">
        <Input className="text-base" />
        <Button>検索</Button>
      </form>
    </header>
  );
}
