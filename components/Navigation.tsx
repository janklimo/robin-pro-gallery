import Link from "next/link";

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex justify-center">
      <Link href="/">
        <a className="text-gray-600 dark:text-white pr-8 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-600 dark:text-white py-4">About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
