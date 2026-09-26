import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
      className="product-image"
      src = {product.image}
      alt = {product.name}
      />
      <div className="product-info">
       <h2>{product.name}</h2>
       <p className= "product-price">
        ₹{product.price}
       </p>
       <p className="product-rating">
        ⭐ {product.rating}
       </p>
       <Link to={`/products/${product.id}`}>
         <button>View Product</button>
       </Link>
       
      </div>
      
    </article>
  );
}

export default ProductCard;