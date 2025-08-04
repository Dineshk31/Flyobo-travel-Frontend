export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav",
      feedback: "Amazing service! The trip was well planned and budget-friendly.",
    },
    {
      name: "Sneha",
      feedback: "Loved the experience! Definitely booking again!",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <p className="text-gray-700 italic">“{r.feedback}”</p>
              <p className="text-right mt-4 font-semibold">- {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
