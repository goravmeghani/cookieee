import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddToCartButton from '../cart/AddToCartButton';

const CookieCard = ({ cookie }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col p-4 group"
    >
      <Link to={`/cookies/${cookie.id}`} className="block">
        <div className="relative aspect-square">
          <img
            src={cookie.image}
            alt={cookie.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="py-4 text-center">
          <h3 className="font-heading text-xl text-primary">{cookie.name}</h3>
          <p className="text-text font-semibold mt-1">${cookie.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="mt-auto">
        <AddToCartButton cookie={cookie} />
      </div>
    </motion.div>
  );
};

export default CookieCard;
