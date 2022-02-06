import Image from "next/image";
import styles from "./Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo.svg"
          width={160}
          height={42}
          alt="Logo"
        />
      </div>
      <button type="button" className={styles["cart-btn"]}>
        <AiOutlineShoppingCart size="1.75em" />
      </button>
    </nav>
  );
}
