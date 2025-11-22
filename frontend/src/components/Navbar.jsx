import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // Get user from browser storage
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav
      style={{
        background: "#111",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* LEFT SIDE – Logo */}
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Amazon Clone
        </Link>
      </div>

      {/* RIGHT SIDE – Links */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white", marginRight: "20px" }}>
          Products
        </Link>

        <Link to="/test-api" style={{ color: "white", marginRight: "20px" }}>
          API Tester
        </Link>

        {/* AUTH SECTION */}
        {user ? (
          <>
            <span style={{ marginRight: "15px" }}>
              Hello, {user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "1px solid white",
                color: "white",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ color: "white", marginRight: "15px" }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{ color: "white", marginRight: "15px" }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
