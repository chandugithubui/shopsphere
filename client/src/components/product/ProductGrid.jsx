import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <section className="products-section">
      <h2>Featured Products</h2>
      <p>Discover our AI recommended products.</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;