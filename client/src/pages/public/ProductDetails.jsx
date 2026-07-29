import { useParams } from "react-router-dom";
import  products  from "../../data/products";

function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>❌ Product Not Found</h1>
    }


  return (
    <div>
        <h1>{product.name}</h1>

        <img
          src={product.image}
          alt= {product.name}
          width="250"
        />

        <h2>₹ {product.price}</h2>

        <p>⭐ {product.rating}</p>

        <p>{product.description}</p>
    
    </div>
  );
}

export default ProductDetails;