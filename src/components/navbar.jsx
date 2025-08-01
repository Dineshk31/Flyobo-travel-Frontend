import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-blue-600">TravelBuddy</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Packages</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-gray-700 font-medium md:hidden">
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#" onClick={toggleMenu}>Packages</a></li>
          <li><a href="#" onClick={toggleMenu}>Services</a></li>
          <li><a href="#" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
