import Navbar from "../src/components/Navbar.jsx";
import Header from "../src/components/Header.jsx";
import About from "../src/components/About.jsx";
import Products from "../src/components/Products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Products />
      </main>
    </>
  );
}

export default App;
