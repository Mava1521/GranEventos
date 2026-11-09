import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Sun,
  BatteryCharging,
  Cable,
  Leaf,
  Factory
} from "lucide-react";

import { useTranslation } from "react-i18next";
import "../styles/Experiences.css";
import PanelSol from '../assets/PanleSol.jpg';
import FormulaHero from '../assets/FormulaHero.jpeg';

const Formula = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Factory />,
      title: t("energySolutions.services.generator")
    },
    {
      icon: <Sun />,
      title: t("energySolutions.services.solar")
    },
    {
      icon: <BatteryCharging />,
      title: t("energySolutions.services.battery")
    },
    {
      icon: <Cable />,
      title: t("energySolutions.services.distribution")
    }
  ];

  
  const solutions = [
    {
      icon: <Factory />,
      title: t("energySolutions.solutions.generator")
    },
    {
      icon: <Sun />,
      title: t("energySolutions.solutions.solar")
    },
    {
      icon: <BatteryCharging />,
      title: t("energySolutions.solutions.battery")
    },
    {
      icon: <Leaf />,
      title: t("energySolutions.solutions.hybrid")
    }
  ];


  return (
    <main className="formula-page">

      {/* =================================
          01. HERO
      ================================= */}

      <section
        className="formula-hero"
        style={{
          "--formula-hero-image": `url("${FormulaHero}")`
        }}
      >

        <div className="formula-container formula-hero__inner">

          <div className="formula-hero__content">

            <span className="formula-eyebrow">
              {t("energySolutions.hero.label")}
            </span>

            <h1>
              {t("energySolutions.hero.title")}
            </h1>

            <p>
              {t("energySolutions.hero.description")}
            </p>

            <Link
              to="/contacto"
              className="formula-button"
            >
              {t("energySolutions.hero.button")}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>

          </div>

        </div>

      </section>


      {/* =================================
          02. SERVICIOS ENERGÉTICOS
      ================================= */}

      <section className="formula-services">

        <div className="formula-container formula-services__inner">

          <div className="formula-services__description">

            <h2>
              {t("energySolutions.services.title")}
            </h2>

            <p>
              {t("energySolutions.services.description")}
            </p>

            <Link
              to="/nuevas-tecnologias"
              className="formula-text-link"
            >
              {t("energySolutions.services.link")}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>

          </div>


          <div className="formula-services__list">

            {services.map((service, index) => (

              <article
                className="formula-service"
                key={index}
              >

                <div className="formula-service__icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================
          03. SOLUCIONES REALES
      ================================= */}

      <section className="formula-real-solutions">
        <div
          className="formula-real-solutions__background"
          style={{
            "--formula-real-image": `url("${PanelSol}")`
          }}
          aria-hidden="true"
        />

        <div className="formula-container formula-real-solutions__inner">

          <article className="formula-real-solutions__card">

            <h2>
              {t("energySolutions.realSolutions.title")}
            </h2>

            <p>
              {t("energySolutions.realSolutions.description")}
            </p>

            <Link
              to="/servicios"
              className="formula-text-link"
            >
              {t("energySolutions.realSolutions.link")}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>

          </article>

        </div>

      </section>


      {/* =================================
          04. NUESTRAS SOLUCIONES
      ================================= */}

      <section className="formula-solutions">

        <div className="formula-container formula-solutions__inner">

          <div className="formula-solutions__heading">

            <span>
              {t("energySolutions.solutions.label")}
            </span>

            <h2>
              {t("energySolutions.solutions.title")}
            </h2>

            <p>
              {t("energySolutions.solutions.description")}
            </p>

            <Link
              to="/contacto"
              className="formula-solutions__button"
            >
              {t("energySolutions.solutions.button")}
              <ArrowRight size={13} aria-hidden="true" />
            </Link>

          </div>


          <div className="formula-solutions__grid">

            {solutions.map((solution, index) => (

              <article
                className="formula-solution-card"
                key={index}
              >

                <div className="formula-solution-card__icon">
                  {solution.icon}
                </div>

                <h3>{solution.title}</h3>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Formula;
