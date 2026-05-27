import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import styles from './Complejo.module.css';

const Complejo = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>El Complejo | Legión Cordobesa</title>
        <meta name="description" content="Conoce las instalaciones del Complejo Legión Cordobesa. Predio deportivo de primer nivel en Córdoba." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/complejo_equipo.jpg" alt="Vista del Complejo y Equipo" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Donde se Respira <span className="text-red-detail">Fútbol</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Más de 5 hectáreas dedicadas al deporte y al encuentro social,
            diseñadas para brindarte la mejor experiencia en cada partido.
          </motion.p>
        </div>
      </section>

      {/* Historia y Visión */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.historyGrid}>
            <motion.div 
              className={styles.textColumn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Nuestra Historia</h2>
              <p className="text-muted">
                Nacimos con la pasión de brindar un espacio donde el fútbol amateur se sienta profesional. 
                Desde el primer día, nos enfocamos en la calidad de nuestro césped natural y en la atención 
                personalizada, creando una comunidad donde todos son bienvenidos.
              </p>
              <br/>
              <p className="text-muted">
                Hoy, el <strong>Complejo Legión Cordobesa</strong> es un punto de referencia en Córdoba para 
                torneos, entrenamientos, eventos corporativos y reuniones sociales.
              </p>
            </motion.div>

            <motion.div 
              className={styles.statsGrid}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div className={`glass-card ${styles.statCard}`} variants={fadeIn}>
                <h3>5</h3>
                <p>3 canchas F11 + 2 canchas F7</p>
              </motion.div>
              <motion.div className={`glass-card ${styles.statCard}`} variants={fadeIn}>
                <h3>150+</h3>
                <p>Plazas de estacionamiento</p>
              </motion.div>
              <motion.div className={`glass-card ${styles.statCard}`} variants={fadeIn}>
                <h3>100%</h3>
                <p>Césped natural</p>
              </motion.div>
              <motion.div className={`glass-card ${styles.statCard}`} variants={fadeIn}>
                <h3>365</h3>
                <p>Días de pasión</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className={styles.facilitiesSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Instalaciones Premium
          </motion.h2>

          <div className={styles.facilitiesGrid}>
            {[
              { title: "Estacionamiento Privado", desc: "Seguridad y comodidad para más de 150 vehículos." },
              { title: "Buffet & Cantina", desc: "Bebidas frías, snacks y todo lo que necesitas." },
              { title: "Quincho y Asadores", desc: "Sector de eventos completamente equipado." },
              { title: "Iluminación LED", desc: "Visibilidad perfecta en partidos nocturnos." },
              { title: "Cámaras de Seguridad", desc: "Tranquilidad durante tu estadía en el predio." },
            ].map((facility, index) => (
              <motion.div 
                key={index} 
                className={styles.facilityCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="text-red-detail" size={24} />
                <div>
                  <h4>{facility.title}</h4>
                  <p className="text-muted">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.ctaWrapper}>
             <Link to="/canchas" className="btn-outline">
                Ver Canchas <ChevronRight size={18} />
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Complejo;
