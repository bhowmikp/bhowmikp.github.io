import * as React from "react";
import Link from "next/link";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

const Header = () => {
  const isAmp = useAmp();

  return (
    <header>
      {isAmp ? (
        <Link href="/index?amp=1">
          <a>Home</a>
        </Link>
      ) : (
        <Link href="/">
          <a>Home</a>
        </Link>
      )}

      {isAmp ? (
        <Link href="/experience?amp=1">
          <a>Experience</a>
        </Link>
      ) : (
        <Link href="/experience">
          <a>Experience</a>
        </Link>
      )}

      {isAmp ? (
        <Link href="/projects?amp=1">
          <a>Projects</a>
        </Link>
      ) : (
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      )}
    </header>
  );
};

export default Header;
