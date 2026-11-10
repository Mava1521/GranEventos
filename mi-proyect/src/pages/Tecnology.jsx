import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Recycle,
  BatteryCharging,
  Smartphone,
  Globe2,
  ArrowRight,
  Sun
} from "lucide-react";

import { useTranslation } from "react-i18next";
import "../styles/Tecnology.css";
import PanelSol from '../assets/PanleSol.jpg';
import ZeroHero from '../assets/ZeroHero.jpeg';
import Sostenibilidad from '../assets/Sostenibilidad.png';

const Tecnology = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Leaf />,
      title: t("zeroEnergy.steps.01")
    },
    {
      icon: <BatteryCharging />,
      title: t("zeroEnergy.steps.02")
    },
    {
      icon: <Globe2 />,
      title: t("zeroEnergy.steps.03")
    },
    {
      icon: <Recycle />,
      title: t("zeroEnergy.steps.04")
    }
  ];

  return (
    <main className="technology-page">

      {/* 01. HERO */}
      <section
        className="technology-hero"
        style={{
          "--technology-hero-image": `url("${ZeroHero}")`
        }}
      >

        <div className="technology-container technology-hero__content">

          <div className="technology-hero__text">

            <div className="technology-brand">
              <span>ZERO</span>
              <Leaf aria-hidden="true" />
            </div>

            <h1>{t("zeroEnergy.hero.title")}</h1>

            <p className="technology-hero__description">
              {t("zeroEnergy.hero.description")}
            </p>

            <Link
              to="/sostenibilidad"
              className="technology-button"
            >
              {t("zeroEnergy.hero.button")}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>


      {/* 02. NUESTRA VISIÓN */}
      <section className="technology-vision">

        <div className="technology-container technology-vision__inner">

          <div className="technology-vision__content">

            <span className="technology-eyebrow">
              {t("zeroEnergy.vision.label")}
            </span>

            <h2>
              {t("zeroEnergy.vision.title")}{" "}
              <span>
                {t("zeroEnergy.vision.highlight")}
              </span>
            </h2>

            <p>
              {t("zeroEnergy.vision.description")}
            </p>

          </div>

          <div className="technology-vision__brand">

            <div className="technology-brand technology-brand--dark">
              <span>ZERO</span>
              <Leaf aria-hidden="true" />
            </div>

            <p>{t("zeroEnergy.vision.slogan")}</p>

          </div>

        </div>
      </section>


      {/* 03. INNOVACIÓN ENERGÉTICA */}
      <section className="technology-innovation">

        <div
          className="technology-innovation__image"
          style={{
            "--technology-innovation-image": `url("${PanelSol}")`
          }}
          aria-hidden="true"
        />

        <div className="technology-container technology-innovation__inner">

          <div className="technology-innovation__content">

            <h2>
              {t("zeroEnergy.innovation.title")}
              <span>
                {t("zeroEnergy.innovation.highlight")}
              </span>
            </h2>

            <p>
              {t("zeroEnergy.innovation.description")}
            </p>

            <Link
              to="/nuevas-tecnologias"
              className="technology-button"
            >
              {t("zeroEnergy.innovation.button")}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>

          </div>

        </div>
      </section>


      {/* 04. PROCESO DE SOSTENIBILIDAD */}
      <section className="technology-process">

        <div className="technology-container">

          <h2 className="technology-section-title">
            {t("zeroEnergy.process.title")}
          </h2>

          <div className="technology-process__steps">

            {steps.map((step, index) => (
              <React.Fragment key={index}>

                <article className="technology-step">

                  <div className="technology-step__icon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>

                </article>

                {index !== steps.length - 1 && (
                  <div
                    className="technology-step__arrow"
                    aria-hidden="true"
                  >
                    <ArrowRight />
                  </div>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>
      </section>


      {/* 05. CIERRE */}
      <section
        className="technology-closing"
        style={{
          "--technology-closing-image": `url("${Sostenibilidad}")`
        }}
      >

        <div className="technology-container technology-closing__inner">

          <div className="technology-closing__content">

            <h2>
              {t("zeroEnergy.closing.title")}
            </h2>

            <p>
              {t("zeroEnergy.closing.description")}
            </p>

            <Link
              to="/sostenibilidad"
              className="technology-button"
            >
              {t("zeroEnergy.closing.button")}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Tecnology;
