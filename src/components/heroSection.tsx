const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-[500px] flex items-center justify-center text-white" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')` }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the World with Flyobo</h1>
        <p className="text-lg mb-6">Find the best deals and destinations for your next adventure.</p>
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Start Exploring</button>
      </div>
    </div>
  );
};

export default HeroSection;
