import { useState } from "react";
import styles from "../CSS/navbar.module.css";
import { useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add or remove no-scroll class on body when menu is opened/closed
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      // Clean up when the component unmounts
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen]);

  return (
    <nav>
      <header>
        <span className={styles.logoContainer}>Les Jardins de Magotte</span>
        <div
          className={`${styles.linksContainer} ${
            isOpen ? styles.active : styles.notActive
          }`}
        >
          <ul>
            <li>
              <a href="">A propos</a>
            </li>
            <li>
              <a href="">Nos produits</a>
            </li>
            <li>
              <a href="">Panier secret</a>
            </li>
            <li>
              <a href="">Nous contactez</a>
            </li>
          </ul>
        </div>

        <div className={styles.burgerMenu}>
          <div
            className={styles.burgerContainer}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div
              className={`${styles.burgerBar} ${styles.topBar} ${
                isOpen ? styles.open : ""
              }`}
            ></div>
            <div
              className={`${styles.burgerBar} ${styles.middleBar} ${
                isOpen ? styles.open : ""
              }`}
            ></div>
            <div
              className={`${styles.burgerBar} ${styles.bottomBar} ${
                isOpen ? styles.open : ""
              }`}
            ></div>
          </div>
        </div>

        <div className={styles.facebookLink}>
          <div className={styles.facebookContainer}>
            <a href="https://www.facebook.com/FermierMagotte" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
