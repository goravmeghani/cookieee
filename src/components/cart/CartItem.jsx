import { FaTrash } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-primary/20">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-md" />
        <div>
          <h3 className="font-bold text-lg">{item.name}</h3>
          <p className="text-sm text-text/80">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 p-2 text-center bg-secondary rounded-md border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeItem(item.id)} className="text-text/60 hover:text-accent transition-colors">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
