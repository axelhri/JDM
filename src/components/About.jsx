import styles from "../CSS/about.module.css";
import aboutImg1 from "../images/img1.jpg";
import aboutImg2 from "../images/img3.jpg";
import bgleaf1 from "../images/bgleaf1.png";
import bgleaf2 from "../images/bgleaf2.png";

function About() {
  return (
    <section id={styles.about}>
      <img src={bgleaf1} alt="" className={styles.bgleaf1} />
      <img src={bgleaf2} alt="" className={styles.bgleaf2} />
      <h2>A propos de nous</h2>
      <article>
        <div className={styles.aboutText}>
          <p>
            Au cœur de nos terres, nous cultivons avec soin et respect la
            richesse que la nature nous offre. Chaque saison nous rappelle
            l'importance de travailler en harmonie avec l'environnement pour
            obtenir des produits frais et pleins de saveurs. Grâce aux méthodes
            biologiques, nos sols sont vivants et en bonne santé, et nos
            cultures en profitent. Chez aux Jardins de Magotte, nous croyons que
            la qualité commence dans la terre et dans chaque geste que nous y
            mettons.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img src={aboutImg1} alt="" />
        </div>
      </article>

      <article>
        <div className={styles.aboutText}>
          <p>
            Derrière chaque légume, il y a une équipe de passionnés qui
            s’investit chaque jour pour cultiver des produits d'exception. De la
            préparation des sols à la récolte, chaque étape est réalisée avec
            attention et savoir-faire. Notre engagement va bien au-delà de la
            culture biologique : il s'agit pour nous de préserver l’authenticité
            et la fraîcheur des saveurs tout en respectant la biodiversité et
            l’écosystème de nos terres.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img src={aboutImg2} alt="" style={{ filter: "brightness(0.7)" }} />
        </div>
      </article>
    </section>
  );
}

export default About;
