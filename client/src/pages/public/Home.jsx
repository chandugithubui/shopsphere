import Hero from "../../components/home/Hero";
import ProductGrid from "../../components/product/ProductGrid";
import products from "../../data/products";

function Home() {
  return (
      <main>
        <Hero />

        <section className="products-section">
           <ProductGrid products={products} />
        </section>
      </main>
  );
}

export default Home;