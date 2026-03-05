import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-beige text-charcoal">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled || location.pathname !== '/'
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-wide">
            <span className={cn("transition-colors duration-300", isScrolled || location.pathname !== '/' ? "text-charcoal" : "text-white")}>
              THE CHANDIGARH
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest hover:text-gold transition-colors duration-200',
                  isScrolled || location.pathname !== '/' ? 'text-charcoal' : 'text-white/90',
                  location.pathname === link.path && 'text-gold'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gold hover:bg-gold-hover text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-colors duration-200 shadow-sm"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn(isScrolled || location.pathname !== '/' ? 'text-charcoal' : 'text-white')} />
            ) : (
              <Menu className={cn(isScrolled || location.pathname !== '/' ? 'text-charcoal' : 'text-white')} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6 text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-serif text-charcoal hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-gold text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest inline-block mx-auto mt-4"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-white/80 py-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif text-white mb-4">The Chandigarh</h3>
            <p className="max-w-md text-sm leading-relaxed mb-6">
              A premium stay experience in the heart of Chandigarh. Discover luxury, comfort, and impeccable hospitality.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rooms" className="hover:text-gold transition-colors">Our Rooms</Link></li>
              <li><Link to="/amenities" className="hover:text-gold transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Sector 17, Chandigarh, India</li>
              <li>+91 98765 43210</li>
              <li>info@thechandigarh.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 text-sm text-center">
          &copy; {new Date().getFullYear()} The Chandigarh Hotel. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
