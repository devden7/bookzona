import Image from "next/image";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <form className="flex-center w-72 flex-none rounded-lg bg-slate-100 pl-2">
      <Image src="/assets/search.svg" alt="search" width={20} height={20} />

      <Input
        type="text"
        placeholder="Search Book"
        className="ml-2 border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </form>
  );
};

export default Search;
