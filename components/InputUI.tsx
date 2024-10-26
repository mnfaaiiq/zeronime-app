"use client";

import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

const InputUI = () => {
  const searchRef: any = useRef();
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const keyword = searchRef.current?.value;
    if (!keyword) return;
    router.push(`/search/${keyword}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyword = searchRef.current?.value;
    if (event.key === "Enter") {
      event.preventDefault();
      if (!keyword) return;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex p-3 items-center justify-center mt-16">
      <div className="flex w-[570px] items-center space-x-2">
        <CiSearch size={28} className="absolute ml-3" color="white" />
        <Input
          type="email"
          placeholder="Search..."
          className="pl-10"
          ref={searchRef}
          onKeyDown={handleKeyDown}
        />
        <Button
          type="submit"
          className="p-4 rounded-full"
          variant={"secondary"}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default InputUI;
