import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  page: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Paginasi = ({ page, lastPage, setPage }: PaginationProps) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNextPage = () => {
    setPage((prev: number) => prev + 1);
    scrollTop();
  };

  const handlePreviousPage = () => {
    setPage((prev: number) => prev - 1);
    scrollTop();
  };
  return (
    <Pagination className="mb-5">
      <PaginationContent>
        {page <= 1 ? null : (
          <PaginationItem>
            <PaginationPrevious onClick={handlePreviousPage} />
          </PaginationItem>
        )}
        <PaginationItem className="flex text-center items-center gap-1">
          <PaginationLink>{page === lastPage ? lastPage : page}</PaginationLink>
          <p>of {lastPage}</p>
        </PaginationItem>
        {page >= lastPage ? null : (
          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default Paginasi;
