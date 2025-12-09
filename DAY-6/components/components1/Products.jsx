
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Products() {
  return (
    <>
      <Navbar />
      <section>
        <h2>Our Products</h2>

        <div>
          <h3>Product 1</h3>
          <p>This is a sample product description.</p>
        </div>

        <div>
          <h3>Product 2</h3>
          <p>This is another product description.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}


