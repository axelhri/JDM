import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // Vérifie si le token existe dans le localStorage
  const token = localStorage.getItem("token");

  if (!token) {
    // Si aucun token n'est trouvé, redirige vers la page de connexion
    return <Navigate to="/admin" />;
  }

  return children; // Si l'utilisateur est connecté, rendre le composant enfant
}

export default PrivateRoute;
