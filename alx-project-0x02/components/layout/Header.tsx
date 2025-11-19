import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="w-full bg-blue-500 text-white p-4 flex gap-6">
        <h1 className="p-6">This is the header section</h1>
        <Link href="/home">
          <span className="cursor-pointer hover:underline">Home </span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer hover:underline">About </span>
        </Link>
        <Link href="/posts">
          <span className="cursor-pointer hover:underline">Posts </span>
        </Link>
      </header>
    </div>
  );
};
export default Header;
