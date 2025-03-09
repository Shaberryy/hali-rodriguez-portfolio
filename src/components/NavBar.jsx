/** @format */

import { Link } from "react-router-dom";
import About from "./About";

export default function NavBar() {
  // element.scrollTo([]);
  return (
    <div className="links">
      <Link to="/hali-rodriguez-portfolio">Home </Link>
      <Link to="/hali-rodriguez-portfolio/Portfolio">Portfolio </Link>
      {/* <Link to="/About">About </Link> */}
      {/* <Link to="/Contact">Contact</Link> */}
    </div>
  );
}
