import { motion } from 'motion/react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                alt="Hotel Exterior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-beige rounded-full -z-10 hidden md:block"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif mb-6">A Legacy of Luxury in Chandigarh</h2>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              Founded with a vision to redefine hospitality in the City Beautiful, The Chandigarh Hotel stands as a beacon of elegance and comfort. Our journey began with a simple philosophy: to create a space where modern luxury meets warm, personalized service.
            </p>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              Every corner of our boutique hotel has been thoughtfully designed to reflect the architectural heritage of Chandigarh while offering state-of-the-art amenities. We believe that true luxury lies in the details—from the thread count of our linens to the curated art adorning our walls.
            </p>
            <div className="border-l-4 border-gold pl-6 italic text-lg font-serif text-charcoal/80">
              "We don't just offer a place to stay; we craft experiences that linger in your memory long after you've departed."
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-charcoal text-white p-12 rounded-3xl">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold mb-2">15+</p>
            <p className="text-sm uppercase tracking-widest text-white/70">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold mb-2">120</p>
            <p className="text-sm uppercase tracking-widest text-white/70">Luxury Rooms</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold mb-2">50k+</p>
            <p className="text-sm uppercase tracking-widest text-white/70">Happy Guests</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif text-gold mb-2">4.9</p>
            <p className="text-sm uppercase tracking-widest text-white/70">Average Rating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-serif mb-6">Our Hospitality Philosophy</h2>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              At the heart of our service is a deep-rooted commitment to anticipating our guests' needs. We embrace the traditional Indian ethos of "Atithi Devo Bhava" (The guest is equivalent to God), blending it seamlessly with contemporary global standards.
            </p>
            <ul className="space-y-4 text-charcoal/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                <span><strong>Personalized Attention:</strong> Tailoring every aspect of your stay to your preferences.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                <span><strong>Sustainable Luxury:</strong> Implementing eco-friendly practices without compromising on comfort.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                <span><strong>Culinary Excellence:</strong> Sourcing local ingredients to create world-class dining experiences.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c0d13c4a?q=80&w=2070&auto=format&fit=crop" 
                alt="Hospitality" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 border border-gold rounded-full -z-10 hidden md:block"></div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Core Values</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-beige p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-gold shadow-sm">
                <Award size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Excellence</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Striving for perfection in every detail of your stay.</p>
            </div>
            <div className="bg-beige p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-gold shadow-sm">
                <Users size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Community</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Fostering a welcoming environment for all our guests.</p>
            </div>
            <div className="bg-beige p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-gold shadow-sm">
                <Clock size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Timelessness</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Creating experiences that stand the test of time.</p>
            </div>
            <div className="bg-beige p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-gold shadow-sm">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Integrity</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">Operating with honesty, transparency, and respect.</p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
