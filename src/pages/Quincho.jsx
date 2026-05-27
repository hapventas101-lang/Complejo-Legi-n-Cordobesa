import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays, Users, Flame, Utensils, Music, CheckCircle2 } from 'lucide-react';
import styles from './Quincho.module.css';

const Quincho = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const comodidades = [
    { icon: <Users size={24} />, title: "Gran Capacidad", desc: "Espacio amplio para grupos, equipos y familias." },
    { icon: <Flame size={24} />, title: "Asadores", desc: "Equipamiento profesional para los mejores asados." },
    { icon: <Utensils size={24} />, title: "Buffet Cercano", desc: "Servicio de bebidas y snacks a pasos del quincho." },
    { icon: <Music size={24} />, title: "Ambiente Social", desc: "El lugar ideal para festejos y el tercer tiempo." }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Quincho & Eventos | Complejo Legión Cordobesa</title>
        <meta name="description" content="Reserva nuestro quincho premium para cumpleaños, fiestas, tercer tiempo y eventos deportivos en Córdoba." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/quincho_events.png" alt="Quincho Legión Cordobesa" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            El Espacio Perfecto <br /> para tu <span className="text-red-detail">Evento</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Más que un quincho, un lugar de encuentro. Celebra tus victorias, 
            cumpleaños y reuniones en un ambiente inmejorable.
          </motion.p>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.gridContainer}>
            
            <motion.div 
              className={styles.textColumn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2>Un Tercer Tiempo Inolvidable</h2>
              <p className="text-muted">
                Sabemos que el partido no termina en la cancha. Nuestro quincho está diseñado 
                para brindar comodidad y un ambiente social inigualable. Ya sea que busques 
                festejar un cumpleaños deportivo o simplemente compartir un asado con amigos, 
                nuestras instalaciones premium están a tu disposición.
              </p>
              
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <CheckCircle2 className="text-red-detail" size={20} />
                  <span>Mesas y sillas incluidas</span>
                </div>
                <div className={styles.benefitItem}>
                  <CheckCircle2 className="text-red-detail" size={20} />
                  <span>Estacionamiento seguro</span>
                </div>
                <div className={styles.benefitItem}>
                  <CheckCircle2 className="text-red-detail" size={20} />
                  <span>Vista a las canchas</span>
                </div>
              </div>

              <div className={styles.ctaWrapper}>
                <Link to="/reservas" className="btn-accent">
                  <CalendarDays size={20} />
                  Consultar Disponibilidad
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className={styles.featuresGrid}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {comodidades.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`glass-card ${styles.featureCard}`}
                  variants={fadeIn}
                >
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section className={styles.eventsSection}>
        <div className="container">
          <motion.div 
            className={styles.eventsHeader}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Ideal para todo tipo de reuniones</h2>
          </motion.div>
          
          <div className={styles.eventsTags}>
            {['Cumpleaños', 'Fiestas Familiares', 'Tercer Tiempo', 'Eventos Deportivos', 'Despedidas de Año', 'Festejos de Equipos'].map((tag, index) => (
              <motion.span 
                key={index} 
                className={styles.eventTag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quincho;
