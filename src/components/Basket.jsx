import styles from "../CSS/basket.module.css";
import axios from "axios";
import basketImg from "../images/basket.png";
import { useEffect, useState } from "react";
import basketImg1 from "../images/basket1.jpg";
import basketImg2 from "../images/basket2.jpg";
import basketImg3 from "../images/basket3.jpg";
import basketImg4 from "../images/basket4.jpg";

function Basket() {
  const [basket, setBasket] = useState(null); // Changez en null pour attendre un objet complet
  const [error, setError] = useState(null);

  useEffect(() => {
    // Requête pour récupérer les paniers avec le prix
    axios
      .get("http://localhost:5000/api/v1/basket") // Remplacez par l'URL de votre API
      .then((response) => {
        // Mise à jour avec les paniers et prix
        setBasket(response.data.baskets); // Utilisez la clé "baskets" dans la réponse
      })
      .catch((err) => {
        // Gérer les erreurs
        setError("Erreur lors de la récupération des paniers");
        console.error(err);
      });
  }, []);

  return (
    <section id={styles.basket}>
      <h4>Nos paniers</h4>
      <div className={styles.basketContainer}>
        <p className={styles.monthlyBasket}>Panier du mois :</p>
        <article>
          <div className={styles.basketImg}>
            <img src={basketImg} alt="Image du panier" />
          </div>
          <div>
            {/* Affichage de l'erreur s'il y en a */}
            {error && <p className={styles.error}>{error}</p>}

            {/* Vérification que le panier est disponible */}
            {basket ? (
              basket.map((item, index) => (
                <div key={index} className={styles.basketItem}>
                  <ul className={styles.basketList}>
                    {/* Affichage des produits */}
                    {item.baskets.map((product, idx) => (
                      <li key={idx}>{product.name}</li>
                    ))}
                  </ul>
                  {/* Affichage du prix du panier */}
                  <p className={styles.basketPrice}>
                    Prix du panier : {item.price}€
                  </p>
                </div>
              ))
            ) : (
              <p>Aucun panier disponible.</p>
            )}
          </div>
        </article>
      </div>

      <div className={styles.otherBaskets}>
        <p>
          Nous avons d&apos;autres paniers disponible tout au long de
          l&apos;année n&apos;hésitez pas a nous suivre sur notre{" "}
          <a href="https://www.facebook.com/FermierMagotte" target="_blank">
            facebook
          </a>{" "}
          pour en savoir plus.
        </p>
        <div className={styles.basketImgsContainer}>
          <div className={styles.basketImgBox}>
            <img src={basketImg1} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg2} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg3} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Basket;