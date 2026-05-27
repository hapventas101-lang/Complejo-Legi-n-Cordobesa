import { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarDays, CreditCard, MessageCircle, Info, ChevronRight } from 'lucide-react';
import styles from './Reservas.module.css';

const Reservas = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    servicio: 'Fútbol 11',
    fecha: new Date(),
    horario: '',
    nombre: '',
    telefono: '',
    observaciones: ''
  });
  
  // State to hold local reservations
  const [reservations, setReservations] = useState([]);

  // Load reservations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('legion_reservas');
    if (saved) {
      setReservations(JSON.parse(saved));
    }
  }, []);

  const todosLosHorarios = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', 
    '21:00', '22:00', '23:00'
  ];

  // Determine available times based on selected date and service
  const horariosDisponibles = useMemo(() => {
    const fechaString = formData.fecha.toLocaleDateString('es-AR');
    
    // Helper to get max capacity based on service and time
    const getCapacidad = (servicio, time) => {
      // time is format "HH:00", we can extract the hour
      const hour = parseInt(time.split(':')[0], 10);
      const isDaytime = hour <= 17; // 09:00 to 17:00

      if (servicio === 'Fútbol 11') {
        return isDaytime ? 3 : 1; // 3 pitches until 17:00, then 1 pitch
      }
      if (servicio === 'Fútbol 7') {
        return isDaytime ? 2 : 0; // 2 pitches until 17:00, then 0 pitches
      }
      
      // Default capacity for Quincho and Colegios
      return 1; 
    };

    // Find all bookings for this exact date and service
    const ocupados = reservations.filter(r => r.fecha === fechaString && r.servicio === formData.servicio);
      
    // Filter out the times that have reached their capacity
    return todosLosHorarios.filter(time => {
      const reservasEnEsteHorario = ocupados.filter(r => r.horario === time).length;
      const capacidadMaxima = getCapacidad(formData.servicio, time);
      
      // Only keep the time if there is still capacity, and capacity is > 0
      return capacidadMaxima > 0 && reservasEnEsteHorario < capacidadMaxima;
    });
  }, [formData.fecha, formData.servicio, reservations]);

  // Determine Category based on service
  const getCategoria = (servicio) => {
    if (servicio === 'Fútbol 11' || servicio === 'Fútbol 7') return 'Fútbol';
    if (servicio === 'Colegios' || servicio === 'Escuelitas') return 'Institucional';
    if (servicio === 'Quincho / Eventos' || servicio === 'Eventos') return 'Eventos';
    return 'Reserva';
  };

  const handleNext = () => {
    // If we're on step 1, validate that a time was selected
    if (step === 1 && !formData.horario) {
      alert("Por favor, selecciona un horario disponible antes de continuar.");
      return;
    }
    setStep(step + 1);
  };
  
  const handleBack = () => setStep(step - 1);

  // When date changes, clear selected time so user doesn't submit a booked time
  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date, horario: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Save reservation locally
    const nuevaReserva = {
      id: Date.now().toString(),
      servicio: formData.servicio,
      categoria: getCategoria(formData.servicio),
      fecha: formData.fecha.toLocaleDateString('es-AR'),
      horario: formData.horario,
      nombre: formData.nombre,
      telefono: formData.telefono,
      timestamp: new Date().toISOString()
    };

    const nuevasReservas = [...reservations, nuevaReserva];
    setReservations(nuevasReservas);
    localStorage.setItem('legion_reservas', JSON.stringify(nuevasReservas));

    // 2. Prepare WhatsApp message
    const phoneNumber = '5493513468541';
    const categoriaTexto = getCategoria(formData.servicio);
    const message = `Hola Legión Cordobesa! Quiero confirmar una reserva de tipo *${categoriaTexto}*:
    
*Servicio:* ${formData.servicio}
*Fecha:* ${formData.fecha.toLocaleDateString('es-AR')}
*Horario:* ${formData.horario}
*A nombre de:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Observaciones:* ${formData.observaciones}

Ya realicé la seña de $10.000 al alias *Legioncordobesa*. 
A continuación envío el comprobante de transferencia.`;

    // 3. Open WhatsApp and reset form
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Send user back to step 1 and clear form
    setStep(1);
    setFormData({
      servicio: formData.servicio, // Keep same service
      fecha: new Date(),
      horario: '',
      nombre: '',
      telefono: '',
      observaciones: ''
    });
  };

  return (
    <div className={styles.reservasPage}>
      <Helmet>
        <title>Reservas | Complejo Legión Cordobesa</title>
      </Helmet>

      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Reserva tu Turno</h1>
          <p className="text-muted">Selecciona el servicio y fecha para consultar disponibilidad en tiempo real.</p>
        </motion.div>

        <div className={styles.wizardContainer}>
          {/* Progress Tracker */}
          <div className={styles.progressTracker}>
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`${styles.stepIndicator} ${step >= num ? styles.active : ''}`}
              >
                {num}
              </div>
            ))}
          </div>

          <form className={`glass-card ${styles.formCard}`} onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>1. ¿Qué servicio buscas?</h3>
                <div className={styles.optionsGrid}>
                  {['Fútbol 11', 'Fútbol 7', 'Quincho / Eventos', 'Colegios'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      className={`${styles.optionBtn} ${formData.servicio === opt ? styles.selected : ''}`}
                      onClick={() => setFormData({ ...formData, servicio: opt, horario: '' })}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <h3 className={styles.mt4}>2. Selecciona una Fecha</h3>
                <div className={styles.calendarWrapper}>
                  <Calendar 
                    onChange={handleDateChange} 
                    value={formData.fecha}
                    minDate={new Date()}
                    className={styles.customCalendar}
                  />
                </div>

                <h3 className={styles.mt4}>3. Horario Disponible</h3>
                <div className={styles.timeGrid}>
                  {horariosDisponibles.length > 0 ? (
                    horariosDisponibles.map((time) => (
                      <button
                        type="button"
                        key={time}
                        className={`${styles.timeBtn} ${formData.horario === time ? styles.selected : ''}`}
                        onClick={() => setFormData({ ...formData, horario: time })}
                      >
                        {time}
                      </button>
                    ))
                  ) : (
                    <p className="text-red-detail">No hay horarios disponibles para la fecha seleccionada.</p>
                  )}
                </div>

                <div className={styles.actions}>
                  <button type="button" className="btn-primary" onClick={handleNext} disabled={!formData.horario}>
                    Siguiente Paso <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>4. Tus Datos</h3>
                <div className={styles.inputGroup}>
                  <label>Nombre y Apellido</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Teléfono</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Observaciones (Opcional)</label>
                  <textarea 
                    rows="3"
                    value={formData.observaciones}
                    onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}
                  ></textarea>
                </div>

                <div className={styles.actionsGroup}>
                  <button type="button" className="btn-outline" onClick={handleBack}>
                    Volver
                  </button>
                  <button 
                    type="button" 
                    className="btn-primary" 
                    onClick={handleNext}
                    disabled={!formData.nombre || !formData.telefono}
                  >
                    Confirmar Datos
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>5. Confirmación y Seña</h3>
                
                <div className={styles.summaryBox}>
                  <p><strong>Servicio:</strong> {formData.servicio} ({getCategoria(formData.servicio)})</p>
                  <p><strong>Fecha:</strong> {formData.fecha.toLocaleDateString('es-AR')} a las {formData.horario}</p>
                </div>

                <div className={styles.paymentInfo}>
                  <div className={styles.paymentHeader}>
                    <CreditCard className="text-red-detail" size={24} />
                    <h4>Información de Pago</h4>
                  </div>
                  <p>Para asegurar tu reserva, solicitamos una seña de <strong>$10.000 ARS</strong>.</p>
                  <div className={styles.aliasBox}>
                    <span>Alias:</span>
                    <strong className={styles.alias}>Legioncordobesa</strong>
                    <span className={styles.bankInfo}>(Personal Pay)</span>
                  </div>
                  <div className={styles.warningBox}>
                    <Info size={20} className="text-red-detail" />
                    <p>Al hacer clic en "Enviar Reserva por WhatsApp", se abrirá el chat con nuestro número oficial. <strong>Recuerda adjuntar el comprobante de transferencia</strong> para que bloqueemos la fecha definitivamente.</p>
                  </div>
                </div>

                <div className={styles.actionsGroup}>
                  <button type="button" className="btn-outline" onClick={handleBack}>
                    Volver
                  </button>
                  <button type="submit" className={`btn-accent ${styles.whatsappSubmit}`}>
                    <MessageCircle size={20} />
                    Enviar Reserva por WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
