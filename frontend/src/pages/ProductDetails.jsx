import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 style={{ padding: "20px" }}>Product not found</h2>;

  return (
    <div style={{
  padding: "20px",
  maxWidth: "800px",
  margin: "40px auto",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
}}>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          width="300"
          height="300"
          style={{ borderRadius: "10px" }}
        />

        <div style={{ flex: 1 }}>
          <h1>{product.name}</h1>

          <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>
            ₹{product.price}
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            {product.description}
          </p>

          <button
            style={{
              padding: "10px 15px",
              marginTop: "20px",
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => alert("Add to cart (implemented later)")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
