import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-red-600">
          PixelPDF
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/jpg-to-pdf" className="hover:text-red-600">JPG to PDF</Link>
          <Link href="/compress-pdf" className="hover:text-red-600">Compress PDF</Link>
          <Link href="/jpg-to-png" className="hover:text-red-600">JPG to PNG</Link>
        </div>
      </nav>
    </header>
  );
}