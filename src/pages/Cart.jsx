import AnimatedPage from '../components/common/AnimatedPage';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/cart/CartItem';
import Button from '../components/common/Button';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cartState, cartTotal } = useCart();
  const { items } = cartState;

  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary">Your Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center bg-secondary p-8 rounded-lg">
            <FaShoppingCart className="text-primary/50 text-6xl mx-auto mb-4" />
            <p className="text-xl mb-6">Your cart is empty. Time to add some cookies!</p>
            <Button to="/cookies" variant="primary">Shop Cookies</Button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary p-6 rounded-lg shadow-lg">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="flex justify-end items-center mt-6 pt-4 border-t border-primary/20">
                <span className="text-xl font-bold">Subtotal:</span>
                <span className="text-2xl font-bold text-primary ml-4">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <Button to="/checkout" variant="secondary" className="text-lg">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Cart;
