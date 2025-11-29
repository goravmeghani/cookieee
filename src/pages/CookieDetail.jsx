import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { cookies } from '../data/cookies';
import AnimatedPage from '../components/common/AnimatedPage';
import NotFound from './NotFound';
import { useCart } from '../hooks/useCart';
import { FaCheck } from 'react-icons/fa';
import Button from '../components/common/Button';

const CookieDetail = () => {
  const { id } = useParams();
  const cookie = cookies.find(c => c.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!cookie) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    addItem(cookie, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedCookies = cookies.filter(c => c.category === cookie.category && c.id !== cookie.id).slice(0, 3);

  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src={cookie.image} alt={cookie.name} className="w-full h-auto object-contain rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-5xl text-primary mb-4">{cookie.name}</h1>
            <p className="text-2xl font-semibold text-text mb-4">${cookie.price.toFixed(2)}</p>
            <p className="text-lg mb-8">{cookie.description}</p>
            
            <div className="flex items-center space-x-4 mb-8">
              <label htmlFor="quantity" className="font-bold">Quantity:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 p-2 text-center bg-secondary rounded-md border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button onClick={handleAddToCart} variant="primary" className="w-full md:w-auto" disabled={added}>
              {added ? (
                <span className="flex items-center justify-center">
                  <FaCheck className="mr-2" /> Added to Cart!
                </span>
              ) : (
                'Add to Cart'
              )}
            </Button>
          </div>
        </div>
        
        {relatedCookies.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-3xl text-primary mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCookies.map(related => (
                <Link key={related.id} to={`/cookies/${related.id}`} className="bg-secondary rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow text-center">
                   <img src={related.image} alt={related.name} className="w-full h-40 object-contain mb-4" />
                   <h3 className="font-bold text-lg">{related.name}</h3>
                   <p className="text-primary font-semibold">${related.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default CookieDetail;
