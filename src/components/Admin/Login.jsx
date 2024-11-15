import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import styles from "../../CSS/login.module.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const navigate = useNavigate(); // Initialiser useNavigate

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        formData
      );
      console.log("Login successful", res.data);

      // Récupérer le token et l'ID de l'utilisateur
      const { token } = res.data;

      console.log(token);

      // Stocker le token et l'ID utilisateur dans le localStorage
      localStorage.setItem("token", token);

      // Rediriger vers une autre page dans le chemin /admin
      navigate("/admin/dashboard"); // Exemple : Rediriger vers /admin/dashboard
    } catch (error) {
      console.error("Login error", error.response.data);
    }
  };

  return (
    <main id={styles.loginMain}>
      <div className={styles.adminTitle}>
        <h1>Espace admin</h1>
      </div>
      <form onSubmit={onSubmit} className={styles.loginForm}>
        <h2>Connexion</h2>

        <div className={styles.formRow}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className={styles.formRow}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Mot de passe"
            required
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className={styles.submitBtn}>
          <button type="submit">connexion</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
