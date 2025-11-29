import { Link, NavLink } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/cookies', text: 'Cookies' },
    { to: '/custom-orders', text: 'Custom Orders' },
    { to: '/about', text: 'About' },
    { to: '/stores', text: 'Find Us' },
    { to: '/contact', text: 'Contact' },
  ];

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeInOut' } },
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <nav className="container-padding mx-auto flex items-center justify-between py-4">
        <Link to="/" className="z-50">
          <img src="/assets/images/logo.svg" alt="Crumble Creations Logo" className="h-10 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-semibold text-text hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform ${
                  isActive ? 'text-primary after:scale-x-100' : 'after:hover:scale-x-100'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <CartIcon />
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-primary transition-colors">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-background/95 backdrop-blur-sm md:hidden z-40 pt-24"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
