
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

const Tecnology = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Leaf />,
      title: t("sustainability.steps.01")
    },
    {
      icon: <BatteryCharging />,
      title: t("sustainability.steps.02")
    },
    {
      icon: <Globe2 />,
      title: t("sustainability.steps.03")
    },
    {
      icon: <Recycle />,
      title: t("sustainability.steps.04")
    }
  ];

  return (
    <main className="technology-page">

      {/* 01. HERO */}
      <section className="technology-hero">

        <div className="technology-container technology-hero__content">

          <div className="technology-hero__text">

            <div className="technology-brand">
              <span>ZERO</span>
              <Leaf aria-hidden="true" />
            </div>

            <h1>{t("sustainability.hero.title")}</h1>

            <p className="technology-hero__description">
              {t("sustainability.hero.description")}
            </p>

            <Link
              to="/contacto"
              className="technology-button"
            >
              {t("sustainability.hero.button")}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>

          </div>

          <div className="technology-hero__visual">
            <div className="technology-orbit technology-orbit--one">
              <Recycle />
            </div>

            <div className="technology-orbit technology-orbit--two">
              <Sun />
            </div>

            <div className="technology-orbit technology-orbit--three">
              <Smartphone />
            </div>

            <div className="technology-orbit technology-orbit--four">
              <BatteryCharging />
            </div>

            <div className="technology-hero__leaf">
              <Leaf />
            </div>
          </div>

        </div>
      </section>


      {/* 02. NUESTRA VISIÓN */}
      <section className="technology-vision">

        <div className="technology-container technology-vision__inner">

          <div className="technology-vision__content">

            <span className="technology-eyebrow">
              {t("sustainability.vision.label")}
            </span>

            <h2>
              {t("sustainability.vision.title")}{" "}
              <span>
                {t("sustainability.vision.highlight")}
              </span>
            </h2>

            <p>
              {t("sustainability.vision.description")}
            </p>

          </div>

          <div className="technology-vision__brand">

            <div className="technology-brand technology-brand--dark">
              <span>ZERO</span>
              <Leaf aria-hidden="true" />
            </div>

            <p>{t("sustainability.vision.slogan")}</p>

          </div>

        </div>
      </section>


      {/* 03. INNOVACIÓN ENERGÉTICA */}
      <section className="technology-innovation">

        <div className="technology-innovation__image" aria-hidden="true" />

        <div className="technology-container technology-innovation__inner">

          <div className="technology-innovation__content">

            <h2>
              {t("sustainability.innovation.title")}
              <span>
                {t("sustainability.innovation.highlight")}
              </span>
            </h2>

            <p>
              {t("sustainability.innovation.description")}
            </p>

            <Link
              to="/nuevas-tecnologias"
              className="technology-button"
            >
              {t("sustainability.innovation.button")}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>

          </div>

        </div>
      </section>


      {/* 04. PROCESO DE SOSTENIBILIDAD */}
      <section className="technology-process">

        <div className="technology-container">

          <h2 className="technology-section-title">
            {t("sustainability.process.title")}
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
      <section className="technology-closing">

        <div className="technology-container technology-closing__inner">

          <div className="technology-closing__content">

            <h2>
              {t("sustainability.closing.title")}
            </h2>

            <p>
              {t("sustainability.closing.description")}
            </p>

            <Link
              to="/contacto"
              className="technology-button"
            >
              {t("sustainability.closing.button")}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>

          </div>

          <div className="technology-closing__decoration" aria-hidden="true">
            <Leaf />
          </div>

        </div>
      </section>

    </main>
  );
};

export default Tecnology;
