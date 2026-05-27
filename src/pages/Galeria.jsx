import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Galeria.module.css';

const Galeria = () => {
  const images = [
    { src: '/complejo_equipo.jpg', alt: '3 canchas de futbol 11' },
    { src: '/quincho_events.png', alt: 'Quincho y asadores de noche' },
    { src: '/kids_football.png', alt: 'Escuelitas y colegios tienen su espacio propio' },
    { src: '/pitch_closeup.png', alt: 'Detalle del césped natural' }
  ];

  const testimonios = [
    {
      name: "Martín López",
      role: "Organizador de Torneos",
      text: "Excelentes canchas y atención. El césped está impecable siempre y la iluminación es de primera. Mis torneos no se juegan en otro lado.",
      stars: 5
    },
    {
      name: "Julieta G.",
      role: "Festejo de Cumpleaños",
      text: "Hermoso lugar. Alquilamos el quincho para el cumple de mi marido y todo salió de 10. Muy buena atención y comodidad.",
      stars: 5
    },
    {
      name: "Carlos",
      role: "Jugador Amateur",
      text: "Se respira fútbol en este predio. El tercer tiempo en la cantina es un clásico de los jueves.",
      stars: 5
    },
    {
      name: "Profe Dani",
      role: "Escuelita de Fútbol",
      text: "Ideal para eventos con los más chicos. El entorno es muy seguro y el estacionamiento amplio nos facilita muchísimo la logística con los padres.",
      stars: 4
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Galería y Testimonios | Legión Cordobesa</title>
        <meta name="description" content="Mira las fotos de nuestras instalaciones y lee lo que dicen nuestros clientes." />
      </Helmet>

      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            La Experiencia <span className="text-red-detail">Legión</span>
          </motion.h1>
          <motion.p 
            className="text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Un recorrido visual por nuestras instalaciones y la opinión de quienes ya nos eligen.
          </motion.p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.masonryGrid}>
            {images.map((img, index) => (
              <motion.div 
                key={index} 
                className={styles.imageCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className={styles.imageOverlay}>
                  <span>{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <div className={styles.testHeader}>
            <h2>Lo que dicen nuestros <span className="text-red-detail">Jugadores</span></h2>
          </div>
          
          <div className={styles.testGrid}>
            {testimonios.map((test, index) => (
              <motion.div 
                key={index} 
                className={`glass-card ${styles.testCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < test.stars ? "var(--color-accent-gold)" : "transparent"} 
                      color={i < test.stars ? "var(--color-accent-gold)" : "var(--color-text-muted)"} 
                    />
                  ))}
                </div>
                <p className={styles.testText}>"{test.text}"</p>
                <div className={styles.testAuthor}>
                  <div className={styles.avatar}>
                    {test.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                  <div>
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Galeria;
