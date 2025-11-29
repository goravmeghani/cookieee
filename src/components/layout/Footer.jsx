import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
  ];

  return (
    <footer className="bg-secondary mt-16 py-8">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-heading text-2xl text-primary mb-2">Crumble Creations</h3>
            <p className="text-sm">Baking moments of joy, one cookie at a time.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-text">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/cookies" className="hover:text-primary transition-colors">Our Cookies</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-text">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-text hover:text-primary transition-colors text-xl">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Crumble Creations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
