"use client";
import { Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

const WAIT_INTERVAL = 500;

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, WAIT_INTERVAL);

  return (
    <Input
      className="w-full"
      classNames={{
        input: "text-lg",
      }}
      placeholder="Search by name..."
      startContent={<IconSearch size={20} />}
      size="sm"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("search")?.toString()}
    />
  );
}
