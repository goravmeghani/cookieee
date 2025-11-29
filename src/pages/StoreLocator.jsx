import AnimatedPage from '../components/common/AnimatedPage';
import { storeLocations } from '../data/storeLocations';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const StoreLocator = () => {
  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary">Find Our Stores</h1>
          <p className="text-xl mt-2">Come say hi and grab a fresh cookie!</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {storeLocations.map(store => (
              <div key={store.id} className="bg-secondary p-6 rounded-lg shadow-md">
                <h2 className="font-bold text-2xl text-primary mb-2">{store.name}</h2>
                <p className="flex items-center mb-1"><FaMapMarkerAlt className="mr-2 text-accent" /> {store.address}</p>
                <p className="flex items-center mb-1"><FaPhone className="mr-2 text-accent" /> {store.phone}</p>
                <p className="flex items-center"><FaClock className="mr-2 text-accent" /> {store.hours}</p>
              </div>
            ))}
          </div>
          
          <div className="h-96 md:h-full w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39673.7299105151!2d-122.4194156!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620925290853!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Store Locations Map"
            ></iframe>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default StoreLocator;
