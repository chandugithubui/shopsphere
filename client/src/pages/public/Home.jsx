import ProductGrid from "../../components/product/ProductGrid";

function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 1499,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
  ];

  return (
    <main>
      <h1>Welcome to ShopSphere AI</h1>

      <p>AI-powered intelligent shopping experience.</p>

      <ProductGrid products={products}/>
    </main>
  );
}

export default Home;