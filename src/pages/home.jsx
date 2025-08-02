import Hero from "../components/hero.jsx";
import Button from "../components/Button.jsx"

export default function Home() {
  return (
    <div>
      <Button onClick={() => alert("Booking started!")}>Book Now</Button>
      <Hero />
    </div>
  );
}
