import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import Button from '../common/Button';
import { FaCheck } from 'react-icons/fa';

const AddToCartButton = ({ cookie, quantity = 1, className='' }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(cookie, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button onClick={handleAddToCart} variant="primary" className={`w-full ${className}`} disabled={added}>
      {added ? (
        <span className="flex items-center justify-center">
          <FaCheck className="mr-2" /> Added!
        </span>
      ) : (
        'Add to Cart'
      )}
    </Button>
  );
};

export default AddToCartButton;
