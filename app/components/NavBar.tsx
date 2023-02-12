import Link from "next/link";


export default function NavBar() {
  return (
    <nav className="flex justify-between p-2 bg-white">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <button className="p-2 px-4 bg-[#6a67b3] rounded border text-white">Log in</button>
          <button className="ml-3 p-2 px-3 rounded border">Log out</button>
        </div>
      </div>
    </nav>
  );
}
