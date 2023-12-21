import { NavLink, useNavigate } from "react-router-dom";

import { LogoSvg } from "../../svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10">
      <LogoSvg />
      <NavLink to="/">Home</NavLink>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
};
