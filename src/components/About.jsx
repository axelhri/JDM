import styles from "../CSS/about.module.css";
import aboutImg from "../images/img1.jpg";

function About() {
  return (
    <div id={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h1>Un engagement bio pour la nature et le goût</h1>
          <p>
            Depuis plusieurs années, Les Jardins de Magotte, situés à
            Vendegies-sur-Écaillon, cultivent avec passion des fruits et légumes
            bio. Animés par l’amour de la nature et le respect de la terre, nous
            travaillons en harmonie avec l’écosystème local. Nos méthodes
            naturelles, comme le lombricompostage avec nos amis les vers de
            terre, enrichissent le sol et garantissent des produits sains,
            savoureux, et riches en nutriments. Nous croyons qu’une agriculture
            respectueuse est essentielle pour préserver notre planète et offrir
            à nos clients des produits authentiques, du champ à l’assiette.
            Venez découvrir nos récoltes de saison et partagez notre passion
            pour une alimentation bio et locale !
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
