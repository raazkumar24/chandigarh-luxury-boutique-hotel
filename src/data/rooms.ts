export const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: '₹8,500',
    size: '350 sq ft',
    bed: 'King Size',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
    description: 'A perfect blend of comfort and elegance, featuring modern amenities and a serene ambiance. The Deluxe Room is designed for travelers seeking a peaceful retreat after a busy day in the city. Enjoy the plush bedding, a dedicated workspace, and a beautifully appointed en-suite bathroom.',
    amenities: ['Free WiFi', 'Smart TV', 'Mini Bar', 'Air Conditioning', 'Room Service', 'In-room Safe', 'Coffee Maker', 'Luxury Toiletries', 'Work Desk', 'Daily Housekeeping'],
    additionalImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop',
      // 'https://images.unsplash.com/photo-1522771730849-f25c86be2769?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop'
    ],
    reviews: [
      { author: "Amit Sharma", rating: 5, date: "October 12, 2023", text: "The Deluxe Room was incredibly comfortable. The bed was perfect and the room was spotless. Highly recommend for business travelers." },
      { author: "Priya Patel", rating: 4, date: "September 05, 2023", text: "Great room with excellent amenities. The Wi-Fi was fast and reliable. The only minor issue was the view from the window." }
    ]
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    price: '₹14,000',
    size: '550 sq ft',
    bed: 'Super King Size',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    description: 'Spacious and luxurious, offering a separate living area and premium bath amenities for the discerning traveler. The Executive Suite provides an elevated experience with panoramic city views, exclusive access to the Executive Lounge, and bespoke concierge services.',
    amenities: ['Free WiFi', 'Smart TV', 'Lounge Area', 'Premium Bath', 'Espresso Machine', 'Bathrobes & Slippers', 'Evening Turndown', 'Complimentary Breakfast', 'Executive Lounge Access', 'Welcome Fruit Basket'],
    additionalImages: [
      // 'https://images.unsplash.com/photo-1560185016-3c3e47cb0a49?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop'
    ],
    reviews: [
      { author: "Rahul Verma", rating: 5, date: "November 20, 2023", text: "Absolutely stunning suite. The separate living area was perfect for hosting a small meeting. The Executive Lounge access is a great perk." },
      { author: "Sneha Gupta", rating: 5, date: "August 15, 2023", text: "Luxury at its finest. The premium bath amenities and the espresso machine made my mornings delightful. Will definitely return." }
    ]
  },
  {
    id: 'family',
    name: 'Family Room',
    price: '₹12,500',
    size: '600 sq ft',
    bed: '2 Queen Size',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
    description: 'Ideal for families, providing ample space, comfortable bedding, and entertainment options for everyone. The Family Room ensures that both parents and children have a memorable stay, featuring connecting options, kid-friendly amenities, and plenty of room to relax.',
    amenities: ['Free WiFi', '2 Smart TVs', 'Connecting Doors', 'Kids Welcome Kit', 'Mini Fridge', 'Bathtub', 'Board Games on Request', 'Extra Bed Available', 'Baby Cot Available', '24/7 Room Service'],
    additionalImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      // 'https://images.unsplash.com/photo-1584622781867-1c113eb64e1d?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1663089627647-5b96918e680a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGx1eHVyeSUyMGhvdGVsJTIwcm9vbSUyMGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2001&auto=format&fit=crop'
    ],
    reviews: [
      { author: "Vikram Singh", rating: 5, date: "December 02, 2023", text: "Perfect for our family of four. The kids loved the welcome kit and the board games. The two smart TVs kept everyone entertained." },
      { author: "Neha Kapoor", rating: 4, date: "July 10, 2023", text: "Very spacious and comfortable. The bathtub was a hit with the kids. Room service was prompt and the food was delicious." }
    ]
  }
];
