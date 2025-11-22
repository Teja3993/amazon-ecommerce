import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            padding: "20px",
            margin: "15px 0",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              marginRight: "20px",
            }}
          />

          {/* Details */}
          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>

            {/* Quantity Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity - 1)
                }
                style={{
                  padding: "5px 10px",
                  background: "#ddd",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                -
              </button>

              <span style={{ fontSize: "18px" }}>{item.quantity}</span>

              <button
                onClick={() =>
                  updateQuantity(item.id, item.quantity + 1)
                }
                style={{
                  padding: "5px 10px",
                  background: "#ddd",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                +
              </button>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: "20px",
                  padding: "5px 10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      <div
        style={{
          marginTop: "30px",
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "right",
        }}
      >
        Total: ₹{total.toFixed(2)}
      </div>

      {/* Checkout Button */}
      <button
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
        onClick={() => alert("Checkout will be done in AMZ-11")}
      >
        Proceed to Checkout →
      </button>
    </div>
  );
}

export default Cart;
