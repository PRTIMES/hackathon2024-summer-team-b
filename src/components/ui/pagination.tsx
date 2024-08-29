import React from "react";
import { cn } from "~/libs/classes";

const Pagination = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav ref={ref} aria-label="Pagination" className={cn("flex justify-center", className)} {...props}>
    <ul className="flex list-none p-10 m-0">{props.children}</ul>
  </nav>
));
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className="flex")} {...props} />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("mx-1", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
  }

  const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
    ({ href, className, isActive, children, ...props }, ref) => (
      <a
        ref={ref}
        href={href}
        className={cn(
          "px-3 py-2 rounded-md text-white",
          isActive ? "bg-blue-500" : "bg-[#C24F4F] hover:bg-destructive/80",
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  );

  PaginationLink.displayName = "PaginationLink";


const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, className, ...props }, ref) => (
  <a
    ref={ref}
    href={href}
    className={cn("px-3 py-2 rounded-md text-white bg-[#C24F4F] hover:bg-destructive/80", className)}
    {...props}
  >
    &lt;
  </a>
));
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, className, ...props }, ref) => (
  <a
    ref={ref}
    href={href}
    className={cn("px-3 py-2 rounded-md text-white bg-[#C24F4F] hover:bg-destructive/80", className)}
    {...props}
  >
    &gt;
  </a>
));
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("px-3 py-2", className)} {...props}>
    ...
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};