function ProductCard({ product }) {
  return (
    <article class="product-card">
      <img
      className="product-image"
      src = {product.image}
      alt = {product.name}
      />
      <div class="product-info">
       <h2>{product.name}</h2>
       <p class= "product-price">
        ₹{product.price}
       </p>
       <p class ="product-rating">
        ⭐ {product.rating}
       </p>
       <button>View Product</button>
      </div>
      
    </article>
  );
}

export default ProductCard;