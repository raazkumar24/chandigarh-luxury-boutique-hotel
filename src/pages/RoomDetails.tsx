import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { rooms } from '../data/rooms';
import { Check, ArrowLeft, Maximize, BedDouble, X, Star } from 'lucide-react';

export default function RoomDetails() {
  const { roomId } = useParams();
  const room = rooms.find(r => r.id === roomId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-24 bg-beige min-h-screen"
    >
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent text-white">
          <div className="container mx-auto">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 uppercase tracking-widest text-xs transition-colors">
              <ArrowLeft size={16} /> Back to Rooms
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{room.name}</h1>
            <p className="text-2xl font-light text-gold">{room.price} <span className="text-sm text-white/70 font-sans">/ night</span></p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif mb-6">About This Room</h2>
              <p className="text-charcoal/80 leading-relaxed text-lg">
                {room.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-6">Room Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                  <div className="p-3 bg-beige rounded-full text-gold">
                    <Maximize size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60 uppercase tracking-wider">Size</p>
                    <p className="font-serif text-xl">{room.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
                  <div className="p-3 bg-beige rounded-full text-gold">
                    <BedDouble size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60 uppercase tracking-wider">Bed Type</p>
                    <p className="font-serif text-xl">{room.bed}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-6">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3">
                    <div className="text-gold">
                      <Check size={20} />
                    </div>
                    <span className="text-charcoal/80">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Customer Reviews */}
            {room.reviews && room.reviews.length > 0 && (
              <section className="pt-8 border-t border-charcoal/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <h2 className="text-3xl font-serif">Guest Reviews</h2>
                  <button className="bg-charcoal hover:bg-gold text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-colors duration-300">
                    Write a Review
                  </button>
                </div>
                <div className="space-y-6">
                  {room.reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-serif text-lg">{review.author}</p>
                          <p className="text-sm text-charcoal/50">{review.date}</p>
                        </div>
                        <div className="flex text-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className={i < review.rating ? "fill-current" : "text-gray-300"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-charcoal/80 leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Additional Images Gallery */}
            {room.additionalImages && room.additionalImages.length > 0 && (
              <section className="pt-8 border-t border-charcoal/10">
                <h2 className="text-3xl font-serif mb-6">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {room.additionalImages.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${room.name} view ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize className="text-white" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-charcoal/5 sticky top-32">
              <h3 className="text-2xl font-serif mb-2">Reserve {room.name}</h3>
              <p className="text-charcoal/60 mb-8">Best rate guaranteed when you book directly with us.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="text-charcoal/70">Price per night</span>
                  <span className="font-serif text-xl">{room.price}</span>
                </div>
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="text-charcoal/70">Taxes & Fees</span>
                  <span className="text-charcoal/70">Calculated at checkout</span>
                </div>
              </div>

              <Link 
                to={`/booking?room=${room.id}`}
                className="block w-full text-center bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-colors duration-300 font-medium shadow-md"
              >
                Book Now
              </Link>
              
              <p className="text-center text-xs text-charcoal/50 mt-4">
                Free cancellation up to 48 hours before check-in.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
