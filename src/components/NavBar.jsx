import { Link } from "react-router-dom";
import About from "./About";

export default function NavBar() {
  // element.scrollTo([]);
  return (
    <div className="links">
      <Link to="/">Home </Link>
      <Link to="/Portfolio">Portfolio </Link>
      {/* <Link to="/About">About </Link> */}
      {/* <Link to="/Contact">Contact</Link> */}
    </div>
  );
}
