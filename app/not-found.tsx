import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-bt flex flex-col items-center justify-center py-32 text-center">
      <span className="eyebrow text-gold-600">404</span>
      <h1 className="mt-4 font-serif text-3xl text-navy-900 sm:text-4xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-stone-500">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link href="/" className="btn-primary mt-7">
        Back to Home
      </Link>
    </section>
  );
}
