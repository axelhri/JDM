import { useState } from "react";
import axios from "axios";
import styles from "../../CSS/dashboard.module.css";

function ProductsForm() {
  // Initialiser avec un produit par défaut
  const [products, setProducts] = useState([{ name: "", price: 0 }]);

  // Ajouter un nouveau produit
  const addProduct = () => {
    setProducts([...products, { name: "", price: 0 }]);
  };

  // Supprimer un produit
  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  // Gérer les changements dans le formulaire
  const handleChange = (index, key, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][key] = value;
    setProducts(updatedProducts);
  };

  // Envoyer les produits à l'API
  const handleSendProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Aucun token trouvé. Veuillez vous connecter.");
      }

      const response = await axios.post(
        "http://localhost:5000/api/v1/products",
        products,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Produits créés avec succès :", response.data);
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi des produits :",
        error.response?.data || error.message
      );
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <form>
        <h2>Produits de saison</h2>
        {products.map((product, index) => (
          <div key={index} className={styles.productRow}>
            <input
              type="text"
              placeholder="Nom du produit"
              value={product.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className={styles.inputField}
            />
            <label htmlFor="number">Prix</label>
            <input
              type="number"
              name="number"
              placeholder="0"
              value={product.price}
              onFocus={(e) => (e.target.value = "")} // Efface la valeur actuelle lors du focus
              onChange={(e) =>
                handleChange(index, "price", parseFloat(e.target.value) || 0)
              }
              className={styles.inputField}
            />
            {products.length > 0 && (
              <button
                type="button"
                onClick={() => removeProduct(index)}
                className={styles.removeButton}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            )}
          </div>
        ))}{" "}
        <button type="button" onClick={addProduct} className={styles.addButton}>
          <i className="fa-solid fa-plus"></i> Ajouter un produit
        </button>
        <button
          type="button"
          onClick={handleSendProducts}
          className={styles.submitButton}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default ProductsForm;
