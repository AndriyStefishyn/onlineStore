import { LogoSvg } from "../../svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navItems = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id:3,name: "services" },
  ];
  return (
    <nav className="bg-blue-400 text-white rounded-md w-full flex justify-around items-center px-10">
      <LogoSvg />
      {navItems.map((item) => (
        <Link key={item.id} to={`/${item.name}`} className="uppercase">{item.name}</Link>
      ))}
    </nav>
  );
};
