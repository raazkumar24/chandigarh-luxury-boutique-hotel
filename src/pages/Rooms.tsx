import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function Rooms() {
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
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Rooms & Suites</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Experience unparalleled comfort in our meticulously designed rooms, where every detail is tailored to your relaxation.
          </p>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500`}
            >
              <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden group">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-3xl font-serif">{room.name}</h2>
                  <p className="text-gold font-medium text-xl">{room.price} <span className="text-sm text-charcoal/50 font-sans">/ night</span></p>
                </div>
                <p className="text-charcoal/70 mb-8 leading-relaxed line-clamp-3">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm text-charcoal/80">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    <span>Size: {room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    <span>Bed: {room.bed}</span>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="font-serif text-lg mb-4">Room Amenities</h4>
                  <div className="flex flex-wrap gap-4">
                    {room.amenities.slice(0, 4).map(amenity => (
                      <span key={amenity} className="bg-beige px-4 py-2 rounded-full text-xs uppercase tracking-wider text-charcoal/80">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="bg-beige px-4 py-2 rounded-full text-xs uppercase tracking-wider text-charcoal/80">
                        +{room.amenities.length - 4} More
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  <Link 
                    to={`/rooms/${room.id}`}
                    className="inline-block border border-charcoal hover:bg-charcoal hover:text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-colors duration-300"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/booking?room=${room.id}`}
                    className="inline-block bg-gold hover:bg-gold-hover text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-colors duration-300 shadow-sm"
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
