import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Criar Conta", path: "/cadastrar" },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-xl font-bold">Uni-Tutoria</div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:flex md:items-center absolute md:static top-16 left-0 w-full bg-gray-800 md:w-auto ${isOpen ? "block" : "hidden"}`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${
                  location.pathname === link.path ? "bg-gray-900" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
