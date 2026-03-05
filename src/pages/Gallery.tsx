import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const categories = ['All', 'Rooms', 'Interior', 'Restaurant', 'Outdoor'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop', category: 'Rooms', alt: 'Deluxe Room' },
  { id: 2, src: 'https://plus.unsplash.com/premium_photo-1678297270232-14029a42a3f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Outdoor', alt: 'Hotel Exterior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', category: 'Restaurant', alt: 'Fine Dining' },
  { id: 4, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop', category: 'Rooms', alt: 'Executive Suite' },
  { id: 5, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop', category: 'Interior', alt: 'Lobby' },
  { id: 6, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop', category: 'Interior', alt: 'Spa' },
  { id: 7, src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop', category: 'Rooms', alt: 'Family Room' },
  { id: 8, src: 'https://images.unsplash.com/photo-1677129663116-9ee340fb9797?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Restaurant', alt: 'Breakfast Buffet' },
  { id: 9, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop', category: 'Outdoor', alt: 'Pool Area' },
  { id: 10, src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', category: 'Rooms', alt: 'Premium Bathroom' },
  { id: 11, src: 'https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWwlMjBMb3VuZ2UlMjBBcmVhfGVufDB8fDB8fHww', category: 'Interior', alt: 'Lounge Area' },
  { id: 12, src: 'https://images.unsplash.com/photo-1674654659450-728117e26859?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Restaurant', alt: 'Cocktail Bar' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedIndex((selectedIndex + 1) % filteredImages.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredImages.length]);

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
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-10">
            Take a visual journey through our luxurious spaces, designed to inspire and relax.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category 
                    ? 'bg-charcoal border-charcoal text-white shadow-md' 
                    : 'bg-transparent border-charcoal/20 text-charcoal hover:border-gold hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500"
                onClick={() => setSelectedIndex(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                  <span className="text-gold text-xs uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.category}</span>
                  <span className="text-white font-serif text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 bg-black/20 p-2 rounded-full backdrop-blur-md"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>

            {filteredImages.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-black/20 p-3 rounded-full backdrop-blur-md hover:bg-black/40"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-black/20 p-3 rounded-full backdrop-blur-md hover:bg-black/40"
                  onClick={handleNext}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white/70">
                <p className="font-serif text-lg text-white mb-1">{filteredImages[selectedIndex].alt}</p>
                <p className="text-sm tracking-widest uppercase">{selectedIndex + 1} / {filteredImages.length}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
