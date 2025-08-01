const services = [
  { title: "Flight Booking", description: "Book affordable flights to any destination." },
  { title: "Hotel Stays", description: "Find and book hotels at the best rates." },
  { title: "Tour Packages", description: "Explore pre-planned tours with expert guides." },
];

const Services = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
