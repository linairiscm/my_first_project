
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav id="custom_navbar">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
}
