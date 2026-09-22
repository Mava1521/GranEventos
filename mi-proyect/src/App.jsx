import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Historia from './pages/History';
import Sostenibilidad from './pages/Sustainability';
import NuevasTecnologias from './pages/Proyects';
import Servicios from './pages/Services';
import Contacto from './pages/Contact';
import Festival from './pages/Festival';
import Concert from './pages/Concert';
import Corporate from './pages/Corporate';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/sostenibilidad" element={<Sostenibilidad />} />
          <Route
            path="/nuevas-tecnologias"
            element={<NuevasTecnologias />}
          />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nuevas-tecnologias/festivales" element={<Festival/>}/>
          <Route path='/nuevas-tecnologias/conciertos' element={<Concert/>} />
          <Route path='/nuevas-tecnologias/corporativos' element={<Corporate/>}/>
        </Routes>
      </main>

      <Footer />

    </Router>
  );
}