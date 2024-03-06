"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] p-10 gap-10">
      <header className="flex items-center justify-center4">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
            Uh oh! Something went wrong.
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Don&apos;t worry, we&apos;re on it. Please try again in a moment.
          </p>
        </div>
      </header>
      <div className="flex flex-col justify-content items-center">
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center mt-8">
          <button
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            onClick={() => window.location.replace("/")}
          >
            Return to Home
          </button>
          <button
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
