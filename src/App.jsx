import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import Complejo from './pages/Complejo';
import Canchas from './pages/Canchas';
import Quincho from './pages/Quincho';
import Colegios from './pages/Colegios';
import Reservas from './pages/Reservas';
import Galeria from './pages/Galeria';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/el-complejo" element={<Complejo />} />
              <Route path="/canchas" element={<Canchas />} />
              <Route path="/eventos-y-quincho" element={<Quincho />} />
              <Route path="/colegios-escuelitas" element={<Colegios />} />
              <Route path="/reservas" element={<Reservas />} />
              <Route path="/galeria" element={<Galeria />} />
            </Routes>
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
