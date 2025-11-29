import AnimatedPage from '../components/common/AnimatedPage';
import Button from '../components/common/Button';
import { FaCookieBite } from 'react-icons/fa';

const OrderConfirmation = () => {
  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-24 text-center flex flex-col items-center">
        <FaCookieBite className="text-accent text-7xl mb-6" />
        <h1 className="font-heading text-5xl text-primary mb-4">Order Confirmed!</h1>
        <p className="text-xl max-w-lg mx-auto mb-8">
          Thank you for your purchase! Your delicious cookies are being prepared and will be on their way to you soon.
        </p>
        <Button to="/cookies" variant="primary">
          Continue Shopping
        </Button>
      </div>
    </AnimatedPage>
  );
};

export default OrderConfirmation;
