import { cookies } from '../../data/cookies';
import CookieCard from '../cookies/CookieCard';
import Button from '../common/Button';

const FeaturedCookies = () => {
  const featured = cookies.filter(cookie => cookie.featured);

  return (
    <section className="py-16 bg-background-alt bg-cookie-texture">
      <div className="container-padding mx-auto text-center">
        <h2 className="font-heading text-4xl text-primary mb-4">Our Fan Favorites</h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg">
          These are the cookies that our customers can't get enough of. Give them a try!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map(cookie => (
            <CookieCard key={cookie.id} cookie={cookie} />
          ))}
        </div>
        <Button to="/cookies" variant="outline">
          View All Cookies
        </Button>
      </div>
    </section>
  );
};

export default FeaturedCookies;
