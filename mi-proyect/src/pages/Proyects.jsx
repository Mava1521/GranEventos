import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importar Link
import '../styles/Projects.css';

import festivalImg from '../assets/Festival.png';
import conciertosImg from '../assets/Concert.png';
import corporativosImg from '../assets/Conferens.png';
import teamImg from '../assets/FooterProyect.jpg';
import HeroProyect from '../assets/HeroProyect.jpg';

export default function Proyects() {
  return (
    <main className="projects-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-content">

          <div className="section-label">
            <span>PROYECTOS</span>
            <span className="gold-line"></span>
          </div>

          <h1>
            ESCENARIOS
            <br />
            QUE INSPIRAN
            <br />
            <span>UN MUNDO MEJOR.</span>
          </h1>

          <p>
            Diseñamos, producimos y montamos experiencias
            <br className="desktop-only" />
            que conectan personas a través de la energía,
            <br className="desktop-only" />
            la tecnología y la creatividad.
          </p>

        </div>

        <div className="hero-keywords">
          <span>IDEAS</span>
          <span>ENERGÍA</span>
          <span>PERSONAS</span>
          <span>EXPERIENCIAS</span>
          <span>REALES</span>

          <div className="hero-small-line"></div>
        </div>

        <div className="projects-hero-image">
          <img
            src={HeroProyect}
            alt="Gran Eventos Logo"
          />

          <div className="hero-image-overlay">
            <strong>MÁS QUE EVENTOS.</strong>
            <span>UN FUTURO COMPARTIDO.</span>
          </div>
        </div>

      </section>


      {/* =====================================================
          CATEGORIAS
          ===================================================== */}

      <section className="projects-categories">

        <ProjectCard
          number="01"
          title="FESTIVALES"
          subtitle="Grandes ideas para audiencias extraordinarias."
          description="Montaje, energía, producción y tecnología para festivales que dejan huella."
          image={festivalImg}
           link="/nuevas-tecnologias/festivales" 
        />

        <ProjectCard
          number="02"
          title="CONCIERTOS"
          subtitle="La música nos mueve."
          description="Soluciones integrales en infraestructura, energía y tecnología para conciertos de todos los formatos."
          image={conciertosImg}
          link="/nuevas-tecnologias/conciertos" 
        />

        <ProjectCard
          number="03"
          title="CORPORATIVOS"
          subtitle="Experiencias que impulsan negocios."
          description="Eventos corporativos, lanzamientos, ferias y activaciones con soluciones a la medida."
          image={corporativosImg}
          link="/nuevas-tecnologias/corporativos"
        />

      </section>


      {/* =====================================================
          EQUIPO
          ===================================================== */}

      <section className="projects-team">

        <div className="team-image">
          <img
            src={teamImg}
            alt="Equipo de Gran Eventos trabajando"
          />
        </div>

        <div className="team-content">

          <div className="section-label1">
            <span>DETRÁS DE CADA EVENTO</span>
            <span className="gold-line"></span>
          </div>

          <h2>
            HAY UN EQUIPO
            <br />
            QUE LO HACE POSIBLE.
          </h2>

          <p>
            Planeación, talento, tecnología y compromiso
            para llevar cada idea a la realidad.
          </p>

          <Link to="/contacto" className="project-button">
            <span>HABLEMOS DE TU PROYECTO</span>
            <span className="button-arrow">→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          ESTADISTICAS
          ===================================================== */}

      <section className="projects-stats">

        <div className="stats-intro">
          <span>EXPERIENCIAS</span>
          <span>EN NÚMEROS</span>

          <div className="gold-line"></div>
        </div>

        <Stat
          number="+300"
          text="EVENTOS REALIZADOS"
        />

        <Stat
          number="+4M"
          text="PERSONAS CONECTADAS"
        />

        <Stat
          number="+12"
          text="DE EXPERIENCIA"
        />

        <Stat
          number="UN SOLO PROPÓSITO"
          text="UN PLANETA MÁS VIVO"
        />

      </section>

    </main>
  );
}


/* =========================================================
   CARD
   ========================================================= */

function ProjectCard({
  number,
  title,
  subtitle,
  description,
  image,
  link,
}) {
  return (
    <article className="project-card">

      <div className="project-card-header">

        <div className="project-number">
          <span>{number}</span>
          <span className="gold-line"></span>
        </div>

        {/* 2. Convertido a Link para la flecha superior */}
        <Link to={link} className="circle-arrow">
          →
        </Link>

      </div>

      <h2>{title}</h2>

      <div className="project-card-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <h3>{subtitle}</h3>

      <p>{description}</p>

      <div className="card-bottom-line"></div>

      {/* 3. Convertido a Link apuntando a {link} */}
      <Link to={link} className="view-project">
        <span>VER PROYECTOS</span>
        <span>→</span>
      </Link>

    </article>
  );
}


/* =========================================================
   STAT
   ========================================================= */

function Stat({ number, text }) {
  return (
    <div className="project-stat">

      <strong>{number}</strong>

      <span>{text}</span>

    </div>
  );
}