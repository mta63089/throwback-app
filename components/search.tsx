import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Search() {
  return (
    <>
      <Input
        type="search"
        placeholder="Search for anything"
        className="w-[300px] md:w-[600px]"
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-1 overflow-hidden p-5 rounded-full top-1"
      >
        <SearchIcon className="size-6 text-muted" />
      </Button>
    </>
  );
}
