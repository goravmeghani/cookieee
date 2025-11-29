import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-3 font-bold rounded-full shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-opacity-90 focus:ring-primary",
    secondary: "bg-accent text-white hover:bg-opacity-90 focus:ring-accent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary focus:ring-primary",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
};

export default Button;
