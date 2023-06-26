import Link from "next/link";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/dogs"}>Dogs</Link>
        </li>
        <li>
          <Link href={"/cats"}>Cats</Link>
        </li>
        <li>
          <Link href={"/favorites"}>My Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
