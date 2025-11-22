import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cart } = useCart();
  const [details, setDetails] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cod",
  });

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h2>Checkout</h2>

      {/* FORM */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginTop: "20px",
        }}
      >
        <h3>Shipping Details</h3>

        <input
          type="text"
          placeholder="Full Name"
          value={details.name}
          onChange={(e) =>
            setDetails({ ...details, name: e.target.value })
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Address"
          value={details.address}
          onChange={(e) =>
            setDetails({ ...details, address: e.target.value })
          }
          style={{ ...inputStyle, height: "80px" }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={details.phone}
          onChange={(e) =>
            setDetails({ ...details, phone: e.target.value })
          }
          style={inputStyle}
        />

        <h3>Payment Method</h3>

        <select
          value={details.payment}
          onChange={(e) =>
            setDetails({ ...details, payment: e.target.value })
          }
          style={inputStyle}
        >
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>

      {/* ORDER SUMMARY */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Order Summary</h3>

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <h2 style={{ textAlign: "right", marginTop: "20px" }}>
          Total: ₹{total}
        </h2>
      </div>

      {/* PROCEED BUTTON */}
      <button
        onClick={() =>
          alert("Order functionality will be implemented next (AMZ-29)")
        }
        style={{
          marginTop: "20px",
          padding: "15px",
          width: "100%",
          background: "#111",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Place Order →
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default Checkout;
