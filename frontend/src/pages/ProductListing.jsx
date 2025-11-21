import { products } from "../data/products";
import { Link } from "react-router-dom";

function ProductListing() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div key={item.id} style={{
            width: "200px", padding: "10px",
            border: "1px solid #ccc", borderRadius: "8px"
          }}>
            <img src={item.image} width="200" height="200" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <Link to={`/product/${item.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
