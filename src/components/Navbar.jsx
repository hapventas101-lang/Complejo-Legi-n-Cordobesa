import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarDays } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'El Complejo', path: '/el-complejo' },
    { name: 'Canchas', path: '/canchas' },
    { name: 'Eventos & Quincho', path: '/eventos-y-quincho' },
    { name: 'Escuelitas', path: '/colegios-escuelitas' },
    { name: 'Galería', path: '/galeria' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>COMPLEJO LEGIÓN <span className="text-red-detail">CORDOBESA</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservas" className="btn-accent">
            <CalendarDays size={18} />
            Reservar Ahora
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={styles.mobileNavLink}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservas" className={`btn-accent ${styles.mobileCta}`}>
            <CalendarDays size={18} />
            Reservar Ahora
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
