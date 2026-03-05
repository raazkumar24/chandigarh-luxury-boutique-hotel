import { motion } from 'motion/react';
import { Waves, Wifi, Utensils, Car, Dumbbell, Clock } from 'lucide-react';

const amenitiesList = [
  {
    icon: <Waves size={32} />,
    title: 'Swimming Pool',
    description: 'Relax in our temperature-controlled infinity pool overlooking the city skyline.'
  },
  {
    icon: <Wifi size={32} />,
    title: 'Free High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet access throughout the hotel.'
  },
  {
    icon: <Utensils size={32} />,
    title: 'Fine Dining Restaurant',
    description: 'Experience culinary excellence with our award-winning chefs and diverse menu.'
  },
  {
    icon: <Car size={32} />,
    title: 'Valet Parking',
    description: 'Secure and convenient valet parking service available 24/7 for all our guests.'
  },
  {
    icon: <Dumbbell size={32} />,
    title: 'Modern Gym',
    description: 'Keep up with your fitness routine in our fully equipped, state-of-the-art gym.'
  },
  {
    icon: <Clock size={32} />,
    title: '24/7 Reception',
    description: 'Our dedicated staff is available around the clock to assist you with any needs.'
  }
];

export default function Amenities() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Hotel Amenities</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Discover a world of luxury and convenience. Our premium facilities are designed to make your stay truly unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-beige p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-gold mb-6 shadow-sm">
                {amenity.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{amenity.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 relative rounded-3xl overflow-hidden h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Serenity Spa</h2>
            <p className="text-white/80 max-w-xl mb-8">Rejuvenate your mind, body, and soul with our exclusive spa treatments and therapies.</p>
            <button className="bg-gold hover:bg-gold-hover text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-colors">
              Explore Spa Menu
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
