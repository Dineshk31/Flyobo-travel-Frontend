import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Clock, 
  DollarSign, 
  Map, 
  Utensils, 
  Home, 
  Plane, 
  Check,
  Heart,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';
import { Package } from '../types';
import { useSavedItems } from '../context/SavedItemsContext';

// Mock package data with itinerary - updated with Excel data
const packageData: Package = {
  id: '1',
  title: '7N Fixed Departure (Without Flights): 4N Singapore + 1N Cruise + 2N Malaysia',
  destination: 'Singapore & Malaysia',
  duration: '8 Days / 7 Nights',
  price: 65999,
  description: 'Experience the perfect blend of modern city exploration and cultural immersion in this carefully crafted Singapore & Malaysia adventure. Begin in vibrant Singapore with its iconic skylines and multicultural cuisine before embarking on a luxury cruise and ending in Malaysia to explore its rich heritage and natural beauty.',
  image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  featured: true,
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Singapore',
      description: 'Welcome to Singapore! Upon arrival at Changi International Airport, you\'ll be met by your guide and transferred to your hotel. Rest and relax before exploring the famous Gardens by the Bay and Marina Bay Sands area.'
    },
    {
      day: 2,
      title: 'Singapore City Tour',
      description: 'Explore Singapore\'s most famous attractions including Merlion Park, Raffles Hotel, Little India, and Chinatown. Afternoon visit to Sentosa Island with cable car ride and leisure time at Universal Studios.'
    },
    {
      day: 3,
      title: 'Singapore Cultural Experience',
      description: 'Discover Singapore\'s multicultural heritage with visits to ethnic quarters, local markets, and hawker centers. Evening at Clarke Quay for dinner and riverside entertainment.'
    },
    {
      day: 4,
      title: 'Singapore Free Day',
      description: 'Enjoy a free day for shopping at Orchard Road, visiting the Singapore Zoo, or exploring the city at your own pace. Prepare for your cruise departure in the evening.'
    },
    {
      day: 5,
      title: 'Cruise Experience',
      description: 'Board your luxury cruise ship and enjoy world-class amenities, entertainment, and dining options. Relax on deck while sailing through the beautiful waters of Southeast Asia.'
    },
    {
      day: 6,
      title: 'Arrival in Malaysia - Kuala Lumpur',
      description: 'Disembark and transfer to Kuala Lumpur. Check in to your hotel and enjoy a welcome dinner featuring authentic Malaysian cuisine. Evening visit to the iconic Petronas Twin Towers.'
    },
    {
      day: 7,
      title: 'Kuala Lumpur City Tour',
      description: 'Explore Kuala Lumpur\'s highlights including Batu Caves, National Mosque, Independence Square, and Central Market. Visit the bustling Petaling Street in Chinatown for shopping and local delicacies.'
    },
    {
      day: 8,
      title: 'Departure',
      description: 'Transfer to Kuala Lumpur International Airport for your departure flight. End of services with unforgettable memories of Singapore and Malaysia.'
    }
  ]
};

// Mock related packages - updated with Excel data
const relatedPackages: Package[] = [
  {
    id: '2',
    title: '6N Bali Fixed Departure (Flights Included)',
    destination: 'Bali',
    duration: '7 Days / 6 Nights',
    price: 70399,
    description: 'Discover the enchanting island of Bali with its beautiful temples, stunning beaches, and rich cultural heritage.',
    image: 'https://images.pexels.com/photos/7245483/pexels-photo-7245483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '3',
    title: '5N Mauritius Fixed Departure (With Flights)',
    destination: 'Mauritius',
    duration: '6 Days / 5 Nights',
    price: 117699,
    description: 'Experience the tropical paradise of Mauritius with pristine beaches, luxury resorts, and crystal-clear lagoons.',
    image: 'https://images.pexels.com/photos/5993162/pexels-photo-5993162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const { isSaved, addToSaved, removeFromSaved } = useSavedItems();
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // In a real app, this would fetch from an API based on id
    setSelectedPackage(packageData);
  }, [id]);
  
  const handleWhatsApp = () => {
    if (!selectedPackage) return;
    
    const message = `Hi, I'm interested in the ${selectedPackage.title} package. Can you provide more information?`;
    const waLink = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };
  
  const toggleSave = () => {
    if (!selectedPackage) return;
    
    if (isSaved(selectedPackage.id)) {
      removeFromSaved(selectedPackage.id);
    } else {
      addToSaved(selectedPackage);
    }
  };
  
  if (!selectedPackage) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">Loading package details...</p>
          </div>
        </div>
      </div>
    );
  }
  
  const saved = isSaved(selectedPackage.id);

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div 
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedPackage.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                {selectedPackage.title}
              </h1>
              <div className="flex items-center text-lg mb-6">
                <Map size={20} className="mr-2" />
                {selectedPackage.destination}
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Calendar size={18} className="mr-2" />
                  {selectedPackage.duration}
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Users size={18} className="mr-2" />
                  Max 12 travelers
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <DollarSign size={18} className="mr-2" />
                  ₹{selectedPackage.price.toLocaleString()}/person
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container-custom py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs */}
            <div className="border-b mb-8">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 font-medium border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`py-4 px-1 font-medium border-b-2 ${
                    activeTab === 'itinerary'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('includes')}
                  className={`py-4 px-1 font-medium border-b-2 ${
                    activeTab === 'includes'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  What's Included
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="mb-10">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                    Package Overview
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedPackage.description}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Immerse yourself in the dynamic cities of Singapore and Malaysia, from exploring modern architectural marvels to experiencing rich cultural traditions. Witness the perfect harmony of East and West in Singapore before enjoying a luxury cruise experience and discovering Malaysia's diverse heritage.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    This carefully crafted itinerary balances guided excursions with free time, allowing you to explore at your own pace. Whether you're seeking cultural insights, culinary adventures, or simply relaxation, this Singapore & Malaysia package offers the perfect blend of experiences.
                  </p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Trip Highlights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Singapore city tour including Marina Bay Sands and Gardens by the Bay</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Authentic multicultural dining experiences</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Luxury cruise experience with world-class amenities</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Kuala Lumpur highlights including Petronas Twin Towers</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Visit to iconic Batu Caves and National Mosque</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Shopping at Orchard Road and Petaling Street</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                    Day-by-Day Itinerary
                  </h2>
                  
                  <div className="space-y-6">
                    {selectedPackage.itinerary?.map((day) => (
                      <div key={day.day} className="border-l-4 border-primary pl-6 relative">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2 pt-1">
                          {day.title}
                        </h3>
                        <p className="text-gray-700">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'includes' && (
                <div>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                    What's Included
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Plane size={20} className="text-primary mr-2" />
                        Transportation
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Airport transfers in Singapore and Malaysia</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Air-conditioned transportation for all tours</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Cruise transportation and transfers</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Cable car rides and local transport</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Home size={20} className="text-primary mr-2" />
                        Accommodation
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>4 nights in 4-star hotel in Singapore</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>1 night luxury cruise accommodation</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>2 nights in 4-star hotel in Malaysia</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Daily breakfast at all accommodations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Users size={20} className="text-primary mr-2" />
                        Guide & Activities
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>English-speaking local guides</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>All entrance fees as per itinerary</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Sightseeing as per itinerary</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Private airport transfers</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Utensils size={20} className="text-primary mr-2" />
                        Meals
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Daily breakfast in hotel</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>All meals during cruise</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Welcome dinner in Malaysia</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Local food experiences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <h3 className="font-medium text-gray-900 mb-4">
                      Not Included
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>International flights (available on request)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Travel insurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Optional activities and personal expenses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Meals not mentioned in the itinerary</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Tips for guides and drivers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Related Packages */}
            <div>
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPackages.map((pkg) => (
                  <Link key={pkg.id} to={`/packages/${pkg.id}`} className="group">
                    <div className="card overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={pkg.image} 
                          alt={pkg.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                          {pkg.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{pkg.destination}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary font-medium">₹{pkg.price.toLocaleString()}/person</span>
                          <span className="text-sm text-gray-500">{pkg.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-xl font-medium mb-2">Book This Package</h3>
                  <p className="text-white/80">
                    Contact us via WhatsApp for the latest availability and pricing
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Starting From</span>
                    <span className="text-xl font-medium text-primary">₹{selectedPackage.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{selectedPackage.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-medium">Max 12 people</span>
                  </div>
                  <div className="flex justify-between items-center py-3 mb-6">
                    <span className="text-gray-600">Tour Type</span>
                    <span className="font-medium">International, Cultural</span>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleWhatsApp}
                      className="btn w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Enquire via WhatsApp
                    </button>
                    
                    <button 
                      onClick={toggleSave}
                      className={`btn w-full flex justify-center items-center ${
                        saved
                          ? 'bg-secondary/10 text-secondary border border-secondary hover:bg-secondary/20'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Heart 
                        size={18} 
                        className={`mr-2 ${saved ? 'fill-secondary text-secondary' : ''}`} 
                      />
                      {saved ? 'Saved to Wishlist' : 'Save to Wishlist'}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our travel experts are ready to assist you with any questions about this package.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="tel:+1234567890" 
                      className="flex items-center text-gray-700 hover:text-primary"
                    >
                      <Phone size={18} className="mr-2" />
                      +1 (234) 567-8910
                    </a>
                    <a 
                      href="mailto:bookings@flyobo.com" 
                      className="flex items-center text-gray-700 hover:text-primary"
                    >
                      <Mail size={18} className="mr-2" />
                      bookings@flyobo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="container-custom mb-16">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/packages" className="hover:text-primary">Packages</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-gray-700">{selectedPackage.title}</span>
        </div>
      </div>
    </>
  );
};

export default PackageDetail;