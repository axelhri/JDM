import styles from "../CSS/contact.module.css";

function Contact() {
  return (
    <section id={styles.contact}>
      {" "}
      <h5>Contactez-nous</h5>
      <div className={styles.formMap}>
        <form>
          <span>Envoyez-nous un message</span>
          <div className={styles.nameContainer}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Nom*" required />
            </div>
            <div className={styles.formRow}>
              <input type="text" placeholder="Prénom" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <input type="email" placeholder="E-mail*" required />
          </div>
          <div className={styles.formRow}>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Téléphone"
            />
          </div>
          <div className={styles.formMsg}>
            <label htmlFor="formmsg">Message *</label>
            <textarea name="formmsg" placeholder="Votre message"></textarea>
          </div>
          <div className={styles.submitBtn}>
            <button type="submit">Envoyer</button>
          </div>
        </form>

        <div className={styles.mapContainer}>
          <span>Localisation</span>
          <address>263 Rue André Bracq, Vendegies-sur-Écaillon.</address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.7911734093295!2d3.4988750769231047!3d50.258484401166804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c292f9ef4d3141%3A0x619447fae7a30ffb!2s263%20Rue%20Andr%C3%A9%20Bracq%2C%2059213%20Vendegies-sur-%C3%89caillon!5e0!3m2!1sen!2sfr!4v1731368602858!5m2!1sen!2sfr"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
