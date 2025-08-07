import React from 'react';

// Simplified data using previous rich testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    feedback: 'My trip to Bali was absolutely incredible! The Flyobo team took care of everything, from accommodation to activities.',
  },
  {
    name: 'Michael Chen',
    feedback: 'The safari package exceeded all my expectations. Our guide was knowledgeable and friendly. Would definitely book again!',
  },
  {
    name: 'Emma Rodriguez',
    feedback: 'Japan during cherry blossom season was magical. The itinerary was perfectly balanced. Absolutely recommend!',
  },
  {
    name: 'James Wilson',
    feedback: 'Our family trip to Thailand was the best vacation we\'ve ever had. The kids loved the elephant sanctuary!',
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“{t.feedback}”</p>
              <p className="text-right mt-4 font-semibold text-gray-900">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
