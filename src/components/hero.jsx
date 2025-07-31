import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; 

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Explore the World with Flyobo
      </h1>
      <p style={{ fontSize: "1.25rem", margin: "1rem 0" }}>
        Unforgettable journeys await you.
      </p>
      <Link
        to="/packages"
        style={{
          padding: "0.75rem 2rem",
          backgroundColor: "#ff5722",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        View Packages
      </Link>
    </section>
  );
}
