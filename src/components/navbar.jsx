import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/packages" style={{ margin: '0 1rem' }}>Packages</Link>
      <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
      <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
    </nav>
  );
}
