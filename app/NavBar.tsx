import Link from "next/link";
import AuthCheck from "@/components/AuthCheck";
import { SignInButton, SignOutButton } from "@/components/Buttons";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/dog"}>Dogs</Link>
        </li>
        <li>
          <Link href={"/cat"}>Cats</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
