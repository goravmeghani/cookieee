import { useState } from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import Button from '../components/common/Button';
import { FaUpload, FaCheckCircle } from 'react-icons/fa';

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    quantity: '12',
    flavor: '',
    message: '',
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    // Here, we'll just simulate success.
    console.log({ ...formData, image });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AnimatedPage>
        <div className="container-padding mx-auto py-24 text-center">
          <FaCheckCircle className="text-accent text-6xl mx-auto mb-4" />
          <h1 className="font-heading text-4xl text-primary mb-2">Thank You!</h1>
          <p className="text-lg max-w-md mx-auto">
            Your custom order request has been sent. We'll review the details and get back to you at {formData.email} within 2 business days.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="mt-8">Place Another Inquiry</Button>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary">Custom Cookie Orders</h1>
          <p className="text-xl mt-2">Bring your sweet vision to life!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 font-semibold">Event Date</label>
            <input id="date" type="date" name="date" value={formData.date} onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <select name="quantity" value={formData.quantity} onChange={handleInputChange} className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="12">1 Dozen</option>
              <option value="24">2 Dozen</option>
              <option value="48">4 Dozen</option>
              <option value="100+">100+</option>
            </select>
             <input type="text" name="flavor" placeholder="Desired Flavor(s)" value={formData.flavor} onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="image-upload" className="w-full inline-flex items-center justify-center p-3 bg-background rounded-md border-2 border-dashed border-primary/50 cursor-pointer hover:bg-primary/10 transition-colors">
              <FaUpload className="mr-2" />
              <span>Upload Design Inspiration</span>
            </label>
            <input id="image-upload" type="file" onChange={handleImageChange} accept="image/*" className="hidden" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 max-h-40 rounded-lg mx-auto" />}
          </div>
          <textarea name="message" placeholder="Describe your design, colors, text, etc." rows="4" value={formData.message} onChange={handleInputChange} required className="p-3 bg-background rounded-md border border-primary/30 w-full focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          <Button type="submit" variant="primary" className="w-full">Submit Inquiry</Button>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default CustomOrders;
