import Link from "next/link";

const Header = () => (
  <>
    <Link href="/">
      <a>Home</a>
    </Link>{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
  </>
);

export default Header;
