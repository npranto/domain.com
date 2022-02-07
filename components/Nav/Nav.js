import Image from "next/image";
import styles from "./Nav.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar({ cart = [] }) {
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

      <a href="#" role="button" className="relative flex">
        <AiOutlineShoppingCart size="1.75em" />
        {cart.length === 0 ? null : (
          <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            {cart.length}
          </span>
        )}
      </a>
    </nav>
  );
}
