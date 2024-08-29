"use client";

import React, { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export function PaginationDemo() {
  const [currentPage, setCurrntPage] = useState(1)
  const handlePageClick = (page: number) => {
    setCurrntPage(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : 1)}
            />
        </PaginationItem>
            <PaginationItem>
          <PaginationLink
                href="#"
                isActive = {currentPage === 1}
                onClick={() => handlePageClick(1)}
            > 1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
                href="#"
                isActive = {currentPage === 2}
                onClick={() => handlePageClick(2)}
            > 2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive = {currentPage === 3}
            onClick={() => handlePageClick(3)}
          > 3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
          href="#"
          onClick={() => handlePageClick(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
