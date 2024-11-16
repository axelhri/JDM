import { useState } from "react";
import axios from "axios";
import styles from "../../CSS/dashboard.module.css";

function BasketForm() {
  const [products, setProducts] = useState([{ name: "" }]); // Initialisation avec un produit vide
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState(null); // Message pour succès ou erreur

  const handleProductChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].name = event.target.value;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: "" }]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Récupération du token dans le local storage
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage({
        type: "error",
        text: "Token non trouvé. Veuillez vous connecter.",
      });
      return;
    }

    const basketData = {
      baskets: products,
      price: parseFloat(price), // Assurez-vous que le prix est un nombre
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/basket",
        basketData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // En-tête Authorization avec le token
          },
        }
      );
    } catch (error) {
      // Gérer les erreurs, y compris les erreurs d'authentification
      console.error(error);
    }
  };

  return (
    <section className={styles.basketForm}>
      {message && (
        <p
          className={message.type === "success" ? styles.success : styles.error}
        >
          {message.text}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <h3>Panier du mois</h3>
        <div className={styles.formGroup}>
          {products.map((product, index) => (
            <div key={index} className={styles.productRow}>
              <input
                type="text"
                placeholder={`Produit ${index + 1}`}
                value={product.name}
                onChange={(e) => handleProductChange(index, e)}
                required
              />
              {products.length > 0 && (
                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => handleRemoveProduct(index)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddProduct}
          >
            <i className="fa-solid fa-plus"></i>Ajouter un produit
          </button>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Prix du panier (€)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Créer le panier
        </button>
      </form>

      <div className={styles.backHome}>
        <a href="/">Retour vers l&apos;acceuil</a>
      </div>
    </section>
  );
}

export default BasketForm;
