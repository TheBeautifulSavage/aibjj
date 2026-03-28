export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 animate-pulse">
      {/* Welcome skeleton */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-7 w-64 rounded-md bg-zinc-800" />
          <div className="h-4 w-80 rounded-md bg-zinc-800/60" />
        </div>
        <div className="h-6 w-36 rounded-full bg-zinc-800 mt-2 sm:mt-0" />
      </div>

      {/* Stats row skeleton */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-zinc-800" />
              <div className="space-y-2">
                <div className="h-3 w-16 rounded bg-zinc-800" />
                <div className="h-6 w-12 rounded bg-zinc-800" />
              </div>
            </div>
            <div className="mt-2 h-3 w-20 rounded bg-zinc-800/60" />
          </div>
        ))}
      </div>

      {/* Chart + Sessions skeleton */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Chart skeleton */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 lg:col-span-3">
          <div className="p-6 pb-2 space-y-2">
            <div className="h-5 w-40 rounded bg-zinc-800" />
            <div className="h-3 w-56 rounded bg-zinc-800/60" />
          </div>
          <div className="p-6 pt-0">
            <div className="h-64 rounded-md bg-zinc-800/40" />
          </div>
        </div>

        {/* Recent sessions skeleton */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 lg:col-span-2">
          <div className="p-6 pb-2">
            <div className="h-5 w-32 rounded bg-zinc-800" />
          </div>
          <div className="p-6 pt-0 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-zinc-800/50 bg-zinc-800/20 p-3"
              >
                <div className="h-8 w-8 rounded-md bg-zinc-800 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded bg-zinc-800" />
                    <div className="h-3 w-8 rounded bg-zinc-800/60" />
                  </div>
                  <div className="h-3 w-20 rounded bg-zinc-800/60" />
                  <div className="h-3 w-full rounded bg-zinc-800/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Belt progress skeleton */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="h-4 w-28 rounded bg-zinc-800" />
            <div className="h-3 w-48 rounded bg-zinc-800/60" />
          </div>
          <div className="h-2.5 w-full sm:w-64 rounded-full bg-zinc-800" />
        </div>
      </div>

      {/* Quick actions skeleton */}
      <div>
        <div className="mb-3 h-4 w-24 rounded bg-zinc-800" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-5 flex flex-col items-center gap-3"
            >
              <div className="h-12 w-12 rounded-xl bg-zinc-800" />
              <div className="space-y-1.5 flex flex-col items-center">
                <div className="h-4 w-24 rounded bg-zinc-800" />
                <div className="h-3 w-32 rounded bg-zinc-800/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
