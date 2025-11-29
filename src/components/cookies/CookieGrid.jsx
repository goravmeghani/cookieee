import { AnimatePresence } from 'framer-motion';
import CookieCard from './CookieCard';

const CookieGrid = ({ cookies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <AnimatePresence>
        {cookies.map(cookie => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CookieGrid;
