import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Public Navigation */}
      <nav className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg">Invoicing App</span>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/public/login" className="hover:underline">Login</Link>
          <Link href="/public/register" className="hover:underline">Register</Link>
        </div>
      </nav>

      {/* Public Landing Content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold">Welcome to Invoicing App</h1>
        <p className="text-lg text-center max-w-xl">
          Manage your invoices, customize designs, and keep records securely. Please log in to access your dashboard.
        </p>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Register</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t text-center text-sm">
        © 2025 Invoicing App. All rights reserved.
      </footer>
    </div>
  );
}