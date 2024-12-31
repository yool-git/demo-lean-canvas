import { useState } from 'react';
import {
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import Button from './Button';

export default function Header() {
  // const navigate = useNavigate();
  const menus = [
    { id: 'home', label: 'Home', path: '/', icon: <FaHome /> },
    { id: 'about', label: 'About', path: '/about', icon: <FaInfoCircle /> },
    { id: 'contact', label: 'contact', path: '/contact', icon: <FaEnvelope /> },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-800 text-white px-4 z-30">
      <div className="sticky top-0 container mx-auto flex justify-between items-center h-14">
        <Link to="/">Lean canvas</Link>
        <nav className="hidden md:flex space-x-4">
          {menus.map(menu => (
            <NavLink key={menu.id} to={menu.path}>
              {menu.label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars />
        </button>
        <Button className="hidden md:block">짐코딩강의</Button>
      </div>

      {/* mobile 좌측 메뉴 */}
      <aside
        className={`
        fixed top-0 left-0 w-64 h-full bg-gray-800 z-50
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden 
        transform transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {menus.map(menu => (
            <NavLink key={menu.id} to={menu.path}>
              {menu.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}
