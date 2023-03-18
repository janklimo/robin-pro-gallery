import Link from "next/link";

const Navigation = (): JSX.Element => {
  return (
    <nav className="flex justify-center">
      <Link href="/">
        <a className="text-gray-400 dark:text-white pr-8 py-4">Home</a>
      </Link>
      <Link href="/whats-new">
        <a className="text-gray-400 dark:text-white py-4">What's New</a>
      </Link>
    </nav>
  );
};

export default Navigation;
