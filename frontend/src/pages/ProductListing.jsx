import { products } from "../data/products";
import { Link } from "react-router-dom";

function ProductListing() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Products</h1>

      <div
        className="product-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="product-card"
            style={{
              width: "220px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              width="200"
              height="200"
              style={{ borderRadius: "5px" }}
            />

            <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>₹{item.price}</p>

            <Link to={`/product/${item.id}`}>
              <button
                style={{
                  padding: "8px 12px",
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
