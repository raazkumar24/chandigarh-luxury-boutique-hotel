import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wifi, Coffee, Dumbbell, Car, Maximize, Users, Star } from 'lucide-react';

const heroImages = [
  // "https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1661416415130-2e6cf748dff2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBjaGVjayUyMGlufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={heroImages[currentImageIndex]}
              alt="Luxury Hotel"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-gold font-medium">Welcome to The Chandigarh</span>
            <div className="h-[1px] w-12 bg-gold"></div>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight drop-shadow-lg"
          >
            Experience Luxury <br className="hidden md:block" /> & Comfort
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl font-light tracking-wide mb-12 text-white/90 max-w-2xl mx-auto"
          >
            A premium stay experience in the heart of the City Beautiful.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/booking" className="bg-gold hover:bg-gold-hover text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(201,169,106,0.3)] hover:shadow-[0_0_30px_rgba(201,169,106,0.5)]">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 w-full sm:w-auto">
              Explore Rooms
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs uppercase tracking-[0.2em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-linear-to-b from-gold to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Signature Rooms</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'deluxe', name: 'Deluxe Room', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop', price: '₹8,500', size: '350 sq ft', guests: '2 Guests' },
              { id: 'executive', name: 'Executive Suite', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop', price: '₹14,000', size: '550 sq ft', guests: '2 Guests' },
              { id: 'family', name: 'Family Room', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop', price: '₹12,500', size: '600 sq ft', guests: '4 Guests' }
            ].map((room, idx) => (
              <motion.div 
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white text-sm flex items-center gap-1"><Maximize size={14} /> {room.size}</span>
                    <span className="text-white text-sm flex items-center gap-1"><Users size={14} /> {room.guests}</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif">{room.name}</h3>
                  </div>
                  <p className="text-gold font-medium mb-6 text-lg">{room.price} <span className="text-sm text-charcoal/50 font-sans">/ night</span></p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-charcoal/10">
                    <Link to={`/rooms/${room.id}`} className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors font-medium">
                      Details
                    </Link>
                    <Link to={`/booking?room=${room.id}`} className="bg-charcoal hover:bg-gold text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-colors duration-300">
                      Book
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Unmatched Amenities</h2>
              <p className="text-charcoal/70 mb-10 leading-relaxed">
                Experience world-class facilities designed for your ultimate comfort. From our state-of-the-art fitness center to our serene spa, every detail is crafted to elevate your stay.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beige rounded-full text-gold">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Free High-Speed WiFi</h4>
                    <p className="text-sm text-charcoal/60">Stay connected everywhere.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beige rounded-full text-gold">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Fine Dining</h4>
                    <p className="text-sm text-charcoal/60">Exquisite culinary experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beige rounded-full text-gold">
                    <Dumbbell size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Fitness Center</h4>
                    <p className="text-sm text-charcoal/60">Modern equipment 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-beige rounded-full text-gold">
                    <Car size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Valet Parking</h4>
                    <p className="text-sm text-charcoal/60">Secure and convenient.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/amenities" className="inline-block border border-charcoal px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors">
                  View All Amenities
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop" alt="Hotel Amenities" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" alt="Spa" className="w-48 h-48 object-cover rounded-xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gold blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">What Our Guests Say</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">Discover why our guests choose to return to The Chandigarh Hotel time and time again.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "An absolute oasis in Chandigarh. The attention to detail and level of service is unmatched.", author: "Priya S.", rating: 5, role: "Business Traveler" },
              { text: "The Executive Suite was breathtaking. We loved the dining experience and the serene atmosphere.", author: "Rahul M.", rating: 5, role: "Anniversary Stay" },
              { text: "Perfect location, beautiful interiors, and the most accommodating staff I've ever encountered.", author: "Sarah W.", rating: 5, role: "Family Vacation" }
            ].map((review, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                key={idx} 
                className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 relative group hover:bg-white/10 transition-colors duration-500"
              >
                <div className="absolute top-8 right-8 text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.09 14.067C16.246 13.55 16.333 13.017 16.333 12.467V7H21.667V14.067L19.593 21H14.017ZM5.01667 21L7.09 14.067C7.24667 13.55 7.33333 13.017 7.33333 12.467V7H12.667V14.067L10.593 21H5.01667Z" />
                  </svg>
                </div>
                
                <div className="flex text-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>
                
                <p className="text-white/90 italic mb-8 leading-relaxed text-lg">"{review.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-xl border border-gold/30">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif text-white text-lg">{review.author}</p>
                    <p className="text-xs text-white/50 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-beige relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1551882547-ff40c0d13c4a?q=80&w=2070&auto=format&fit=crop" alt="Pattern" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to Experience True Luxury?</h2>
          <p className="text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Book your stay directly with us to enjoy exclusive benefits, best rate guarantees, and personalized service.
          </p>
          <Link to="/booking" className="bg-gold hover:bg-gold-hover text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-colors inline-block shadow-lg">
            Reserve Your Stay
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
