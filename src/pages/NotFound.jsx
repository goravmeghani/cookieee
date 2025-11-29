import AnimatedPage from '../components/common/AnimatedPage';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-24 text-center flex flex-col items-center">
        <h1 className="font-heading text-7xl text-primary mb-2">404</h1>
        <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-lg max-w-md mx-auto mb-8">
          Looks like you've found a stray crumb. The page you're looking for doesn't exist.
        </p>
        <Button to="/" variant="primary">
          Go Back Home
        </Button>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
