import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CartIcon = () => {
  const { cartCount } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <Link to="/cart" className="relative text-text hover:text-primary transition-colors">
      <motion.div
        animate={isAnimating ? 'bump' : 'rest'}
        variants={{
          bump: { scale: [1, 1.4, 1] },
          rest: { scale: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <FaShoppingCart size={24} />
      </motion.div>
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.span
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="absolute -top-2 -right-3 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {cartCount}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default CartIcon;
