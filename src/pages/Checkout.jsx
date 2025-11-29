import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/common/AnimatedPage';
import Button from '../components/common/Button';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
  const { cartState, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '', email: '', address: '', city: '', zip: ''
  });

  if (cartState.items.length === 0) {
    navigate('/cookies');
    return null;
  }
  
  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process payment.
    console.log("Processing order for:", form);
    clearCart();
    navigate('/confirmation');
  };

  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <h1 className="font-heading text-5xl text-primary text-center mb-12">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="font-bold text-2xl mb-6 border-b border-primary/20 pb-4">Shipping Information</h2>
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" name="address" placeholder="Street Address" onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
              <div className="flex gap-4">
                <input type="text" name="city" placeholder="City" onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="text" name="zip" placeholder="ZIP Code" onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </form>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="font-bold text-2xl mb-6 border-b border-primary/20 pb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {cartState.items.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-primary/20 pt-4 space-y-2">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-2 text-primary">
                <span>Total</span>
                <span>${(cartTotal + 5.00).toFixed(2)}</span>
              </div>
            </div>
            <Button type="submit" form="checkout-form" variant="secondary" className="w-full mt-8 text-lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Checkout;
