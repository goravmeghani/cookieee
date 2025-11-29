import { testimonials } from '../../data/testimonials';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-padding mx-auto text-center">
        <h2 className="font-heading text-4xl text-primary mb-12">Sweet Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-primary/50 text-4xl mb-4 mx-auto" />
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-text">{testimonial.name}</p>
              <p className="text-sm text-text/70">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
