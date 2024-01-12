import { LogoSvg } from "../../svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navItems = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id:3,name: "services" },
  ];
  return (
    <nav className="bg-blue-400 text-white bg-opacity-50 rounded-md w-full flex justify-around items-center px-10 fixed top-0 left-0 backdrop-filter backdrop-blur-md">
      <LogoSvg />
      {navItems.map((item) => (
        <Link key={item.id} to={`/${item.name}`} className="uppercase">
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
