"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex items-center justify-center"
        onClick={toggleMobileMenu}
      >
        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 z-20 flex h-screen w-screen bg-white flex-col items-center justify-center gap-8 lg:hidden">
          {/* Close Button */}
          <button className="absolute top-5 right-5" onClick={toggleMobileMenu}>
            <Image src="/menu.svg" alt="Close" width={24} height={24} />
            <Image src="/close.svg" alt="Close" width={24} height={24} />{" "}
          </button>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
                onClick={toggleMobileMenu} // Close the menu when a link is clicked
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
