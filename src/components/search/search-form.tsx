import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function SearchForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3">
      <Input className="text-base text-black min-w-64" autoFocus />
      <Button className="bg-accent hover:bg-accent/70">
        プレスリリースを検索
      </Button>
    </form>
  );
}
