import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, Users, BedDouble, Check, ArrowRight, ArrowLeft, CreditCard } from 'lucide-react';
import { rooms } from '../data/rooms';

export default function Booking() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'deluxe',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const room = params.get('room');
    if (room) {
      setFormData(prev => ({ ...prev, roomType: room }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const selectedRoom = rooms.find(r => r.id === formData.roomType) || rooms[0];

  // Calculate nights (mock calculation for UI)
  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    }
    return 1;
  };

  const nights = calculateNights();
  const basePrice = parseInt(selectedRoom.price.replace(/[^0-9]/g, ''));
  const totalRoomPrice = basePrice * nights;
  const taxes = totalRoomPrice * 0.18; // 18% tax
  const total = totalRoomPrice + taxes;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-beige min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Reserve Your Stay</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-charcoal/70">
            Experience unparalleled luxury and comfort at The Chandigarh Hotel.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-charcoal/10 -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gold -z-10 transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg transition-colors duration-300 ${
                  step >= num ? 'bg-gold text-white shadow-md' : 'bg-white text-charcoal/40 border-2 border-charcoal/10'
                }`}>
                  {step > num ? <Check size={20} /> : num}
                </div>
                <span className={`text-xs uppercase tracking-widest mt-3 font-medium ${
                  step >= num ? 'text-charcoal' : 'text-charcoal/40'
                }`}>
                  {num === 1 ? 'Dates' : num === 2 ? 'Details' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-charcoal/5 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {/* Step 1: Dates & Room */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-2xl font-serif mb-6">Select Dates & Room</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2 flex items-center gap-2">
                          <Calendar size={16} className="text-gold" /> Check-in Date
                        </label>
                        <input 
                          type="date" 
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2 flex items-center gap-2">
                          <Calendar size={16} className="text-gold" /> Check-out Date
                        </label>
                        <input 
                          type="date" 
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2 flex items-center gap-2">
                          <Users size={16} className="text-gold" /> Guests
                        </label>
                        <select 
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30 appearance-none"
                        >
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">2 Adults, 1 Child</option>
                          <option value="4">2 Adults, 2 Children</option>
                          <option value="5">3 Adults</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2 flex items-center gap-2">
                          <BedDouble size={16} className="text-gold" /> Room Type
                        </label>
                        <select 
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30 appearance-none"
                        >
                          {rooms.map(room => (
                            <option key={room.id} value={room.id}>{room.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button 
                        onClick={nextStep}
                        className="bg-charcoal hover:bg-gold text-white px-8 py-3 rounded-xl text-sm uppercase tracking-widest transition-colors duration-300 font-medium flex items-center gap-2"
                      >
                        Next Step <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-2xl font-serif mb-6">Guest Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal/80 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal/80 mb-2">Special Requests (Optional)</label>
                      <textarea 
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-beige/30 resize-none"
                        placeholder="Any special requests or dietary requirements..."
                      ></textarea>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button 
                        onClick={prevStep}
                        className="text-charcoal/60 hover:text-charcoal px-6 py-3 rounded-xl text-sm uppercase tracking-widest transition-colors duration-300 font-medium flex items-center gap-2"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button 
                        onClick={nextStep}
                        className="bg-charcoal hover:bg-gold text-white px-8 py-3 rounded-xl text-sm uppercase tracking-widest transition-colors duration-300 font-medium flex items-center gap-2"
                      >
                        Review Booking <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={40} />
                    </div>
                    <h2 className="text-3xl font-serif mb-4">Booking Confirmed!</h2>
                    <p className="text-charcoal/70 max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you for choosing The Chandigarh Hotel, {formData.firstName || 'Guest'}. Your reservation for the {selectedRoom.name} has been successfully placed. We have sent a confirmation email to {formData.email || 'your email'}.
                    </p>
                    
                    <div className="bg-beige p-6 rounded-2xl max-w-sm mx-auto mb-8 text-left">
                      <p className="text-sm text-charcoal/60 mb-1">Booking Reference</p>
                      <p className="font-mono text-lg font-medium text-charcoal">CH-{Math.floor(100000 + Math.random() * 900000)}</p>
                    </div>

                    <Link 
                      to="/"
                      className="inline-block bg-charcoal hover:bg-gold text-white px-8 py-3 rounded-xl text-sm uppercase tracking-widest transition-colors duration-300 font-medium"
                    >
                      Return to Home
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-charcoal text-white p-8 rounded-3xl shadow-xl sticky top-32">
              <h3 className="text-2xl font-serif mb-6">Booking Summary</h3>
              
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-white/60 text-sm mb-1">Room</p>
                  <p className="font-serif text-lg">{selectedRoom.name}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Check-in</p>
                    <p className="font-medium">{formData.checkIn ? new Date(formData.checkIn).toLocaleDateString() : 'Select date'}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Check-out</p>
                    <p className="font-medium">{formData.checkOut ? new Date(formData.checkOut).toLocaleDateString() : 'Select date'}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-sm mb-1">Guests</p>
                  <p className="font-medium">{formData.guests} Guest(s)</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">{formatCurrency(basePrice)} x {nights} night(s)</span>
                  <span>{formatCurrency(totalRoomPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Taxes & Fees (18%)</span>
                  <span>{formatCurrency(taxes)}</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-xl text-gold">{formatCurrency(total)}</span>
                </div>
              </div>

              {step < 3 && (
                <div className="flex items-center gap-3 text-white/50 text-xs">
                  <CreditCard size={16} />
                  <p>No payment required today. Pay at the property.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
