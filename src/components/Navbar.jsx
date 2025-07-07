import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-50 border-b border-b-zinc-300">
      <div className=" flex py-4 u-main-container">
        <Link href="/" className="mr-2 text-zinc-900">
          AXORIA
        </Link>
        <Link href="/categories" className="mx-2 text-zinc-900 mr-auto">
          Categories
        </Link>
        <Link href="/dashboard/create" className="mx-2 text-zinc-900">
          Add an article
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
