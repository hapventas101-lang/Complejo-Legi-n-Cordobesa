import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import styles from './Canchas.module.css';

const Canchas = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Nuestras Canchas | Legión Cordobesa</title>
        <meta name="description" content="Canchas de Fútbol 11 y Fútbol 7 de césped natural. El mejor campo de juego de Córdoba para tu equipo." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/pitch_closeup.png" alt="Césped Natural Legión Cordobesa" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Siente el <span className="text-red-detail">Césped</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Canchas de Fútbol 11 y Fútbol 7 con mantenimiento profesional diario.
            Juega como los grandes, en el mejor predio de la ciudad.
          </motion.p>
        </div>
      </section>

      {/* Pitch Types Section */}
      <section className="section-padding">
        <div className="container">
          
          <div className={styles.pitchTypeCard}>
            <motion.div 
              className={styles.pitchInfo}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Fútbol 11</h2>
              <div className={styles.pitchSpecs}>
                <span className={styles.specBadge}>3 Canchas Disponibles</span>
                <span className={styles.specBadge}>Medidas Reglamentarias</span>
              </div>
              <p className="text-muted">
                Nuestras canchas principales son el orgullo del complejo. Con césped natural 
                de alta densidad y dimensiones oficiales, ofrecen la experiencia definitiva 
                para ligas amateurs, torneos corporativos y amistosos de alto nivel.
              </p>
              <ul className={styles.featureList}>
                <li><ShieldCheck size={18} className="text-red-detail" /> Iluminación LED de alta potencia</li>
                <li><ShieldCheck size={18} className="text-red-detail" /> Redes y banderines profesionales</li>
                <li><ShieldCheck size={18} className="text-red-detail" /> Bancos de suplentes techados</li>
              </ul>
              <Link to="/reservas" className={`btn-accent ${styles.ctaBtn}`}>
                <CalendarDays size={18} /> Reservar Cancha 11
              </Link>
            </motion.div>
            <motion.div 
              className={styles.pitchImageWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/line1.jpeg" alt="Cancha de Fútbol 11" className={styles.pitchImageReal} />
            </motion.div>
          </div>

          <div className={`${styles.pitchTypeCard} ${styles.reversed}`}>
            <motion.div 
              className={styles.pitchInfo}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Fútbol 7</h2>
              <div className={styles.pitchSpecs}>
                <span className={styles.specBadge}>2 Canchas Disponibles</span>
                <span className={styles.specBadge}>Césped Natural</span>
              </div>
              <p className="text-muted">
                Ideales para partidos rápidos, entrenamientos o encuentros más íntimos. 
                Nuestras canchas de Fútbol 7 mantienen la misma calidad de césped natural 
                que las canchas grandes, permitiendo un juego dinámico y fluido.
              </p>
              <ul className={styles.featureList}>
                <li><ShieldCheck size={18} className="text-red-detail" /> Terreno perfectamente nivelado</li>
                <li><ShieldCheck size={18} className="text-red-detail" /> Arcos seguros y reglamentarios</li>
                <li><ShieldCheck size={18} className="text-red-detail" /> Cercanía al área de buffet</li>
              </ul>
              <Link to="/reservas" className={`btn-accent ${styles.ctaBtn}`}>
                <CalendarDays size={18} /> Reservar Cancha 7
              </Link>
            </motion.div>
            <motion.div 
              className={styles.pitchImageWrapper}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
               <img src="/imagenf7.jpeg" alt="Cancha de Fútbol 7" className={styles.pitchImageReal} />
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Canchas;
