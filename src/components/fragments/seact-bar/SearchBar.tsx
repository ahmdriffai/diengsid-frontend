import { Search } from "lucide-react";
import type React from "react";

export default function SearchBar(): React.ReactNode {
  return (
    <form className="w-full max-w-xl ">
      <div className="flex items-center justify-center rounded-full border border-gray-300 px-4 py-4 shadow-custom-sm focus-within:border-gray-400">
        <Search className="h-4 w-4 text-gray-500 mr-2" strokeWidth={3} />
        <input
          placeholder="Mulai pencarian"
          className="w-full bg-transparent outline-none text-sm font-medium"
        />
      </div>
    </form>
  );
}
