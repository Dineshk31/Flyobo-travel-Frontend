import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Packages from "./pages/packages";
import About from "./pages/about";
import Contact from "./pages/contact";
import HeroSection from "./components/heroSection.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx"
import NotFound from "./components/NotFound.jsx"

function App() {
  return (
    <>
    <Route path="*" element={<NotFound />} />
      <Router>
        <Footer />
        <Services />
        <HeroSection />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
