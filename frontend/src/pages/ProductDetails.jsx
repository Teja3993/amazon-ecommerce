import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} width="300" height="300" />
      <h1>{product.name}</h1>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
