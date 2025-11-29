import { useState } from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import Button from '../components/common/Button';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary">Get In Touch</h1>
          <p className="text-xl mt-2">We'd love to hear from you!</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="font-bold text-2xl mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Email:</strong> hello@crumblecreations.com</p>
            <p className="mb-2"><strong>Phone:</strong> (555) BAKE-NOW</p>
            <p className="mb-4"><strong>Press Inquiries:</strong> press@crumblecreations.com</p>
            <p>For custom orders, please use our <a href="/custom-orders" className="text-primary font-bold hover:underline">custom order form</a>.</p>
          </div>
          
          {submitted ? (
            <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
              <FaCheckCircle className="text-accent text-5xl mb-4" />
              <h3 className="font-bold text-2xl">Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-lg space-y-4">
              <input type="text" placeholder="Your Name" required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Your Email" required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Your Message" rows="5" required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              <Button type="submit" variant="primary" className="w-full">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
