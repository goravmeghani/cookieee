import AnimatedPage from '../components/common/AnimatedPage';
import Hero from '../components/home/Hero';
import FeaturedCookies from '../components/home/FeaturedCookies';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <AnimatedPage>
      <Hero />
      <FeaturedCookies />
      <Testimonials />
    </AnimatedPage>
  );
};

export default Home;
