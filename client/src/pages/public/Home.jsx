import ProductGrid from "../../components/product/ProductGrid";
import products from "../../data/products";

function Home() {
  return (
    <main>
      <h1>Welcome to ShopSphere AI</h1>

      <p>AI-powered intelligent shopping experience.</p>

      <ProductGrid products={products} />
    </main>
  );
}

export default Home;