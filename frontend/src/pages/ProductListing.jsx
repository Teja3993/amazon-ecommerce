import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductListing() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Our Products</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">

            {/* ADD TO CART BUTTON (FIXED) */}
            <button
              onClick={() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login to add items to cart.");
    return;
  }

  addToCart({
    id: item.id,
    title: item.name,
    price: item.price,
    image: item.image,
  });
}}

              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#111",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <img
              src={item.image}
              style={{ width: "200px", height: "200px", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "15px", fontSize: "20px" }}>{item.name}</h3>

            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
              ₹{item.price}
            </p>

            <Link to={`/product/${item.id}`}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  background: "#111",
                  color: "white",
                  border: "none",
                  fontSize: "14px",
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
