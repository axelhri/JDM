import styles from "../CSS/header.module.css";

function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.imgContainer}>
        <h1>Bienvenue aux Jardins de Magotte !</h1>
        <p>
          Votre maraîcher bio situé à Vendegies-sur-Écaillon. Nous cultivons
          avec passion des légumes et fruits de saison bio{" "}
          <span>
            <i className="fa-brands fa-envira"></i>
          </span>{" "}
          pour vous offrir le meilleur de la nature !
        </p>
      </div>
    </header>
  );
}

export default Header;
