import Hero from "../components/hero.jsx";
import Button from "../components/Button.jsx"
import SectionTitle from "../componenets/SectionTitle.jsx"

export default function Home() {
  return (
    <div>
      <SectionTitle
  title="Our Services"
  subtitle="We offer amazing travel experiences across the globe"
/>
      <Button onClick={() => alert("Booking started!")}>Book Now</Button>
      <Hero />
    </div>
  );
}
