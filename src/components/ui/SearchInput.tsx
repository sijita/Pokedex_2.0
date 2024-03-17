"use client";
import { Button, Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full">
      <Input
        className="w-full"
        variant="flat"
        placeholder="Search by name..."
        size="sm"
        classNames={{
          inputWrapper: "rounded-r-none",
          mainWrapper: "rounded-r-none",
        }}
        isClearable
        onClear={handleClear}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // onChange={(e) => {
        //   handleSearch(e.target.value);
        // }}
        // defaultValue={searchParams.get("search")?.toString()}
      />
      <Button
        className="h-12 rounded-l-none"
        type="submit"
        variant="flat"
        radius="sm"
      >
        Search
        <IconSearch />
      </Button>
    </form>
  );
}
