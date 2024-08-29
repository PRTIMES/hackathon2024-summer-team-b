import { Skeleton } from "~/components/ui/skeleton";

export default function ReleaseListPaginationLoading() {
  return (
    <div className="flex justify-center gap-1.5">
      <Skeleton className="w-[34px] h-[42px]" />
      <Skeleton className="w-[35px] h-[42px]" />
      <Skeleton className="w-[35px] h-[42px]" />
    </div>
  );
}
