import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Basket from "./components/Basket.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Terms from "./components/Terms.jsx";
import Login from "./components/Admin/Login.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx"; // Composant Dashboard
import PrivateRoute from "./components/Admin/PrivateRoute.jsx"; // Importer PrivateRoute

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <div id="aboutSection">
                  <About />
                </div>
                <div id="productsSection">
                  <Products />
                </div>
                <div id="basketSection">
                  <Basket />
                </div>
                <div id="contactSection">
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />

          <Route
            path="/terms"
            element={
              <>
                <Terms />
              </>
            }
          />
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
