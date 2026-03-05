import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-beige min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            We are here to assist you. Reach out to us for reservations, inquiries, or any special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-sm"
          >
            <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-beige rounded-full text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Address</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    Sector 17, Chandigarh<br />
                    160017, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-beige rounded-full text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Phone</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    +91 98765 43210<br />
                    +91 172 1234567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-beige rounded-full text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Email</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    reservations@thechandigarh.com<br />
                    info@thechandigarh.com
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-beige rounded-full text-charcoal hover:bg-gold hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-beige rounded-full text-charcoal hover:bg-gold hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-beige rounded-full text-charcoal hover:bg-gold hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-sm"
          >
            <h2 className="text-3xl font-serif mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal/80 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal/80 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal/80 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/50"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/50 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-charcoal hover:bg-gold text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-3xl overflow-hidden h-[400px] bg-gray-200"
        >
          {/* Placeholder for Google Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.845353133333!2d76.77709331513123!3d30.73836398163456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be6673b15%3A0xc83b5d108ea8f8e5!2sSector%2017%2C%20Chandigarh%2C%20160017!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
}
