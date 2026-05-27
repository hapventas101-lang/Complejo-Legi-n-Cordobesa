import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Brand */}
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>COMPLEJO LEGIÓN <span className="text-red-detail">CORDOBESA</span></span>
          </Link>
          <p className={styles.description}>
            Complejo deportivo Legión Cordobesa. Canchas de césped natural, quincho para eventos y el mejor ambiente para disfrutar de tu pasión.
          </p>
        </div>

        {/* Links */}
        <div className={styles.linksCol}>
          <h3>Accesos Rápidos</h3>
          <ul>
            <li><Link to="/el-complejo">El Complejo</Link></li>
            <li><Link to="/canchas">Canchas de Fútbol</Link></li>
            <li><Link to="/eventos-y-quincho">Quincho & Eventos</Link></li>
            <li><Link to="/colegios-escuelitas">Colegios y Escuelitas</Link></li>
            <li><Link to="/galeria">Galería Visual</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h3>Contacto</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className="text-red-detail" />
              <span>Córdoba Capital, Argentina</span>
            </li>
            <li>
              <Phone size={20} className="text-red-detail" />
              <span>+54 9 351 346-8541</span>
            </li>
            <li>
              <MessageCircle size={20} className="text-red-detail" />
              <a href="https://wa.me/5493513468541" target="_blank" rel="noreferrer">WhatsApp Oficial</a>
            </li>
          </ul>
        </div>

      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Complejo Legión Cordobesa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
