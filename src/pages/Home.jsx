import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Complejo Legión Cordobesa | Alquiler de Canchas y Quincho</title>
        <meta name="description" content="El mejor complejo deportivo de Córdoba. Canchas de fútbol 11 y 7 de césped natural, quincho para eventos y más. Reserva tu turno online." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/complejo_equipo.jpg" alt="Complejo Legión Cordobesa" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Legión Cordobesa: <br/>
            La pasión futbolera <span className={styles.highlight}>vive acá</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Complejo deportivo Legión Cordobesa. Canchas de césped natural, 
            estacionamiento privado y espacios para eventos inolvidables.
          </motion.p>
          
          <motion.div 
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/reservas" className="btn-accent">
              <CalendarDays size={20} />
              Reservar Cancha
            </Link>
            <Link to="/eventos-y-quincho" className="btn-outline">
              Ver Quincho
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className={`container ${styles.introGrid}`}>
          <motion.div 
            className={styles.introText}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Vive la verdadera experiencia del fútbol amateur</h2>
            <p className={styles.textMuted}>
              En Legión Cordobesa no solo alquilamos canchas; creamos el ambiente perfecto 
              para que tú y tu equipo se sientan como profesionales. Nuestras instalaciones 
              están diseñadas para brindar comodidad antes, durante y después del partido.
            </p>
            <ul className={styles.featuresList}>
              <li><CheckCircle2 className="text-red-detail" size={20} /> 3 canchas de Fútbol 11</li>
              <li><CheckCircle2 className="text-red-detail" size={20} /> 2 canchas de Fútbol 7</li>
              <li><CheckCircle2 className="text-red-detail" size={20} /> 100% Césped Natural de alta calidad</li>
              <li><CheckCircle2 className="text-red-detail" size={20} /> Estacionamiento para 150+ vehículos</li>
            </ul>
          </motion.div>
          <motion.div 
            className={styles.introImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/imegencesped.jpeg" alt="Experiencia Legión" className={styles.introBg} />
            <div className={`glass-card ${styles.experienceCard}`}>
              <h3>Organización Perfecta</h3>
              <p>Torneos, ligas, jornadas deportivas y partidos amistosos que se disfrutan</p>
              <Link to="/el-complejo" className={styles.linkWithIcon}>
                Conocer más <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quincho Highlight */}
      <section className={styles.quinchoSection}>
        <img src="/quincho_events.png" alt="Quincho para Eventos" className={styles.quinchoBg} />
        <div className={styles.quinchoOverlay}></div>
        <div className={`container ${styles.quinchoContent}`}>
          <motion.div 
            className={`glass-card ${styles.quinchoCard}`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className={styles.quinchoTitle}>El Tercer Tiempo Perfecto</h2>
            <p>
              Nuestro exclusivo Quincho para eventos cuenta con capacidad para grandes grupos, 
              asadores profesionales, y todas las comodidades para celebrar tu cumpleaños, 
              fiesta de fin de año o el tercer tiempo soñado.
            </p>
            <Link to="/eventos-y-quincho" className="btn-primary">
              Consultar Disponibilidad
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
