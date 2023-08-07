import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

// Navbar component for site navigation
const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.navbar}>
        {/* Logo and site title */}
        <div className={styles.titleLogo}>
          <Image src="/vercel.png" width={50} height={50} alt="logo" />
          <h2>
            <a href="./" className={styles.title}>
              Living_Logos
            </a>
          </h2>
        </div>
        {/* Navigation links */}
        <div className={styles.nav_link}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/logos">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
