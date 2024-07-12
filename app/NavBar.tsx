"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBugs } from "react-icons/fa6";
import { GiSpottedBug } from "react-icons/gi";

// for complex classnames
import classnames from "classnames";

const NavBar = () => {
  // for actie path
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiSpottedBug size="30" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={` hover:text-zinc-800 transition-colors ${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
