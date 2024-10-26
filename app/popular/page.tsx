"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "../Utilities/HeaderMenu";
import Paginasi from "../Utilities/Paginasi";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeftCircle, ChevronLeftIcon } from "lucide-react";
import { getAnimeResponse } from "@/lib/api-libs";
import { Pagination } from "@/components/ui/pagination";

type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
};

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime]: any = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Link href={"/"}>
        <ChevronLeftIcon size={40} />
      </Link>
      <HeaderMenu title={`Popular Anime #${page}`} />
      <ItemCard api={topAnime} />
      <Paginasi
        page={page}
        lastPage={topAnime.pagination?.last_visible_page ?? 1}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
