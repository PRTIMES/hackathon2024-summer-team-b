import { Skeleton } from "~/components/ui/skeleton";

export default function ReleaseListLoading() {
  return (
    <div className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-3">
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
    </div>
  );
}
