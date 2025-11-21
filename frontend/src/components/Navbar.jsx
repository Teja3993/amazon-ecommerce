import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
  style={{
    padding: "15px 25px",
    background: "#232f3e",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  }}
>

      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Amazon
      </Link>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Products</Link>
      </div>
      <Link to="/register" style={{ color: "white", marginRight: "15px" }}>
  Register
</Link>
<Link to="/login" style={{ color: "white", marginRight: "15px" }}>
  Login
</Link>

    </nav>
  );
}

export default Navbar;
