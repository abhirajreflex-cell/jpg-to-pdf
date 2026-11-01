import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata = {
  title: "Free Online PDF & Image Tools",
  description: "JPG to PDF, Compress PDF, JPG to PNG sab free mein.",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Free PDF aur Image Tools</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className="rounded-xl bg-white p-6 shadow hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{tool.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}