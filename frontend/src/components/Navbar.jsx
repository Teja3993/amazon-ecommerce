import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#111",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Amazon
      </Link>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
