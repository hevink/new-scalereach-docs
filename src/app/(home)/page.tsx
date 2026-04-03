import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4 px-4">
      <h1 className="text-4xl font-bold">ScaleReach API</h1>
      <p className="text-lg text-fd-muted-foreground max-w-xl mx-auto">
        Turn any YouTube video into viral short-form clips — programmatically.
      </p>
      <div className="flex gap-3 justify-center mt-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-6 py-2.5 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
        >
          Read the Docs
        </Link>
        <Link
          href="/docs/quickstart"
          className="inline-flex items-center justify-center rounded-lg border border-fd-border px-6 py-2.5 text-sm font-medium hover:bg-fd-accent transition-colors"
        >
          Quickstart
        </Link>
      </div>
    </div>
  );
}
