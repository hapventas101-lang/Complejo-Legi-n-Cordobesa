import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Trophy, CalendarDays, CheckCircle2 } from 'lucide-react';
import styles from './Colegios.module.css';

const Colegios = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const beneficios = [
    { icon: <ShieldCheck size={28} />, title: "Entorno Seguro", desc: "Instalaciones cerradas y seguras, ideales para menores." },
    { icon: <Trophy size={28} />, title: "Calidad Profesional", desc: "Césped natural mantenido, fomentando el buen juego." },
    { icon: <CalendarDays size={28} />, title: "Reservas Fijas", desc: "Organización de horarios fijos anuales o semestrales." }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Escuelitas & Colegios | Complejo Legión Cordobesa</title>
        <meta name="description" content="Espacios deportivos seguros y premium para colegios y escuelitas de fútbol en Córdoba." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img src="/kids_football.png" alt="Niños jugando al fútbol" className={styles.heroBg} />
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap size={20} />
            Sector Institucional
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ayudamos a formar con los <br /> valores del <span className="text-red-detail">deporte</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Alianzas estratégicas con colegios y academias deportivas. 
            Brindamos un entorno seguro y profesional para el desarrollo de los más jóvenes.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
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
              <h2>Programa Institucional</h2>
              <p className="text-muted">
                En el Complejo Legión Cordobesa entendemos la importancia de contar con instalaciones 
                deportivas de primer nivel para el desarrollo educativo y físico. Nuestro programa institucional 
                está diseñado específicamente para:
              </p>
              
              <ul className={styles.targetList}>
                <li><CheckCircle2 className="text-red-detail" size={20} /> Encuentros intercolegiales</li>
                <li><CheckCircle2 className="text-red-detail" size={20} /> Clases de Educación Física</li>
                <li><CheckCircle2 className="text-red-detail" size={20} /> Entrenamientos de Escuelitas de Fútbol</li>
                <li><CheckCircle2 className="text-red-detail" size={20} /> Jornadas deportivas y recreativas</li>
              </ul>

              <div className={styles.ctaWrapper}>
                <a 
                  href="https://wa.me/5493513468541?text=Quiero%20info%20para%20reservar%20una%20jornada%20deportiva%20con%20mi%20escuela" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-accent"
                >
                  Hacé click y contactanos por whatsapp para reservar tu jornada deportiva
                </a>
              </div>
            </motion.div>

            <motion.div 
              className={styles.benefitsGrid}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              {beneficios.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`glass-card ${styles.benefitCard}`}
                  variants={fadeIn}
                >
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div className={styles.benefitText}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Colegios;
