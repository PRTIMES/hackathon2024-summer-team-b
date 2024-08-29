import React from "react";

import { cn } from "~/libs/classes";

export function Pagination({ children }: { children: React.ReactNode }) {
  return (
    <nav aria-label="Pagination" className="flex justify-center">
      <ul className="flex list-none p-10 m-0">{children}</ul>
    </nav>
  );
}

export function PaginationContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function PaginationItem({ children }: { children: React.ReactNode }) {
  return <li className="mx-1">{children}</li>;
}

export function PaginationLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-white",
        isActive ? "bg-blue-500" : "bg-[#C24F4F] hover:bg-destructive/80",
      )}
    >
      {children}
    </a>
  );
}

export function PaginationPrevious({ href }: { href: string }) {
  return (
    <a
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-white bg-[#C24F4F] hover:bg-destructive/80",
      )}
    >
      &lt;
    </a>
  );
}

export function PaginationNext({ href }: { href: string }) {
  return (
    <a
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-white bg-[#C24F4F] hover:bg-destructive/80",
      )}
    >
      &gt;
    </a>
  );
}

export function PaginationEllipsis() {
  return <span className="px-3 py-2">...</span>;
}
