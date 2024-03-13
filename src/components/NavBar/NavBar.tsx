import { Link } from "react-router-dom";

export const NavBar = () => {
  const navItems = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "services" },
  ];
  return (
    <nav className="bg-white text-light-brown shadow-lg rounded-md w-full flex justify-around items-center px-10 py-3">
      <p className="text-center font-protest text-light-brown">
        Online <br />
        store
      </p>
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={`/${item.name}`}
          className=" hover:text-red-400 duration-100"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
