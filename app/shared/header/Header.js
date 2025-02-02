"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Prevent header hiding when the menu is open
    if (!isMenuOpen) {
      // Hide the header when scrolling down unless at the top
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    }

    setLastScrollY(currentScrollY);

    // Set isScrolled based on scroll position
    setScrolled(currentScrollY > 0);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""} ${
        isHeaderVisible ? "" : styles.hidden
      }`}
    >
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.branding}>
          <Link href="/" passHref>
            <Image
              src="https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737897009/HQWS-Logo-web_mhb0ic.svg"
              className={styles.logoImage}
              width={300}
              height={80}
              alt="HQWS-Logo"
              quality={100}
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Fullscreen Navbar */}
        <div
          className={`${styles.navbarMenu} ${
            isMenuOpen ? styles.active : styles.exit
          }`}
        >
          <Navbar
            isMenuOpen={isMenuOpen}
            onCloseMenu={() => setMenuOpen(false)}
          />
        </div>

        {/* Get in Touch Button */}
        <Link href="/quote">
          <button className={styles.quoteButton} aria-label="Get in Touch">
            Get in Touch
          </button>
        </Link>

        {/* Burger Menu */}
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
        >
          <span></span> {/* Burger icon */}
        </div>
      </div>
    </header>
  );
}
