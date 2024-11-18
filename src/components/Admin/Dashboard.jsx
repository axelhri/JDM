import ProductsForm from "./ProductsForm";
import BasketForm from "./BasketForm";
import styles from "../../CSS/dashboard.module.css";

function Dashboard() {
  return (
    <main id={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.dashFlex}>
        <ProductsForm />
        <BasketForm />
      </div>
    </main>
  );
}

export default Dashboard;
