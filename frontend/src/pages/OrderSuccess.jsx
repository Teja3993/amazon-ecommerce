import { useParams, Link } from "react-router-dom";

function OrderSuccess() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Order Placed Successfully!</h1>
      <h2>Order ID: {id}</h2>

      <p style={{ marginTop: "20px" }}>
        Thank you for shopping with us.
      </p>

      <Link to="/products">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#111",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;
