import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp = () => {
  const phoneNumber = '5493513468541'; // Format: country code + number without plus sign
  const defaultMessage = 'Hola! Me gustaría recibir información sobre el Complejo Legión Cordobesa.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatingBtn}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} color="#fff" />
    </a>
  );
};

export default FloatingWhatsApp;
