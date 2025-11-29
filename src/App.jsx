import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cookies from './pages/Cookies';
import CookieDetail from './pages/CookieDetail';
import CustomOrders from './pages/CustomOrders';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import StoreLocator from './pages/StoreLocator';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/cookies/:id" element={<CookieDetail />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
          <Route path="/stores" element={<StoreLocator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
