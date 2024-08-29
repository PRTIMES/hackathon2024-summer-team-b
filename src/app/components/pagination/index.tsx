import { getReleasesCount } from "~/app/data/releases";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export async function ReleaseListPagination({ page }: { page: number }) {
  const releaseCount = await getReleasesCount();
  const pageCount = Math.ceil(Number(releaseCount.data) / 12);

  return (
    <Pagination>
      <PaginationContent>
        {page > 5 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`/${page - 5}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {page > 2 && (
          <PaginationItem>
            <PaginationLink href={`/${page - 2}`}>{page - 2}</PaginationLink>
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink href={`/${page > 1 ? page - 1 : 1}`}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`/${page}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page + 1 <= pageCount && (
          <PaginationItem>
            <PaginationLink href={`/${page + 1}`}>{page + 1}</PaginationLink>
          </PaginationItem>
        )}
        {page + 2 <= pageCount && (
          <PaginationItem>
            <PaginationLink href={`/${page + 2}`}>{page + 2}</PaginationLink>
          </PaginationItem>
        )}
        {page + 5 < pageCount && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`/${page + 5}`} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
