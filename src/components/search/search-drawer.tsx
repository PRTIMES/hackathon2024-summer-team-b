import { SearchIcon } from "lucide-react";

import SearchForm from "~/components/search/search-form";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

export default function SearchDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="sm:hidden fixed z-50 bottom-3 right-3 shadow bg-accent/70 backdrop-blur rounded-full p-3">
        <SearchIcon className="w-6 h-6 text-white" />
      </DrawerTrigger>
      <DrawerContent className="text-left">
        <DrawerHeader>
          <DrawerTitle>プレスリリースを検索</DrawerTitle>
          <DrawerDescription>
            キーワードを入力し、プレスリリースを検索できます。
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <SearchForm />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" className="w-full">
              やめる
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
