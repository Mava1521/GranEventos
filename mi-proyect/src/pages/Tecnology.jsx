import React from "react";
import { Link } from "lucide-react";
import { useTranslation } from "react-i18next";
import TecnologyHero from "../assets/TecnologyHero.jpg";
import PlantasY from "../assets/PlantasY.jpg";
import PanelSol from "../assets/PanleSol.jpg";
import Conectividad from "../assets/Conectividad.jpg";
import Distribucion from "../assets/Distribucion.jpg";
import Concert2 from "../assets/Concert2.jpg";

import {
  ArrowRight,
  BatteryCharging,
  Cable,
  CircleGauge,
  Clock3,
  Leaf,
  Recycle,
  Settings,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

import "../styles/Tecnology.css";

export default function Tecnology() {
  const { t } = useTranslation();

  return (
    <main className="technology-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="technology-hero">
        <div className="technology-container technology-hero-grid">
          {/* CONTENIDO IZQUIERDO */}
          <div className="technology-hero-content">
            <div className="technology-eyebrow">
              <span className="technology-eyebrow-mark"></span>
              {t("technology.hero.eyebrow")}
            </div>

            <h1 className="technology-hero-title">
              {t("technology.hero.title_line1")}
              <br />
              <span>{t("technology.hero.title_line2")}</span>
              <br />
              <span>{t("technology.hero.title_line3")}</span>
            </h1>

            <p className="technology-hero-description">
              {t("technology.hero.description")}
            </p>

            <span className="technology-yellow-line"></span>

            {/* BENEFICIOS */}
            <div className="technology-benefits">
              <div className="technology-benefit">
                <div className="technology-benefit-icon">
                  <ShieldCheck size={25} strokeWidth={1.6} />
                </div>
                <span>
                  {t("technology.hero.benefit1_line1")}
                  <br />
                  {t("technology.hero.benefit1_line2")}
                </span>
              </div>

              <div className="technology-benefit">
                <div className="technology-benefit-icon">
                  <Settings size={25} strokeWidth={1.6} />
                </div>
                <span>
                  {t("technology.hero.benefit2_line1")}
                  <br />
                  {t("technology.hero.benefit2_line2")}
                </span>
              </div>

              <div className="technology-benefit">
                <div className="technology-benefit-icon">
                  <Settings size={25} strokeWidth={1.6} />
                </div>
                <span>
                  {t("technology.hero.benefit3_line1")}
                  <br />
                  {t("technology.hero.benefit3_line2")}
                </span>
              </div>
            </div>
          </div>

          {/* IMAGEN HERO */}
          <div className="technology-hero-media">
            <div className="technology-image technology-hero-image">
              <img
                src={TecnologyHero}
                alt={t("technology.hero.alt_hero_img")}
                width={900}
                height={520}
                fetchPriority="high"
              />
            </div>

            <div className="technology-hero-shape"></div>

            <div className="technology-hero-message">
              <span className="technology-message-line"></span>
              <p>
                {t("technology.hero.message_line1")}
                <br />
                {t("technology.hero.message_line2")}
                <br />
                {t("technology.hero.message_line3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLANTAS Y GENERADORES
      ===================================================== */}
      <section className="technology-section technology-generation">
        <div className="technology-container technology-generation-grid">
          {/* TEXTO IZQUIERDO */}
          <div className="technology-info-block">
            <div className="technology-section-eyebrow">
              <span></span>
              {t("technology.generation.eyebrow")}
            </div>

            <h2 className="technology-section-title">
              {t("technology.generation.title_line1")}
              <br />
              <strong>{t("technology.generation.title_line2")}</strong>
            </h2>

            <p>{t("technology.generation.description")}</p>

            <div className="technology-feature-list">
              <TechnologyFeature
                icon={<Zap size={22} />}
                text={
                  <>
                    {t("technology.generation.feature1_line1")}
                    <br />
                    {t("technology.generation.feature1_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<ShieldCheck size={22} />}
                text={
                  <>
                    {t("technology.generation.feature2_line1")}
                    <br />
                    {t("technology.generation.feature2_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<Settings size={22} />}
                text={
                  <>
                    {t("technology.generation.feature3_line1")}
                    <br />
                    {t("technology.generation.feature3_line2")}
                  </>
                }
              />
            </div>

            <Link to="/contacto#cuentanos-tu-proyecto" className="technology-button">
              {t("technology.generation.button")}
                <ArrowRight size={17} />
            </Link>
          </div>

          {/* IMAGEN CENTRAL */}
          <div className="technology-image-wrap">
            <div className="technology-image technology-generator-image">
              <img
                src={PlantasY}
                alt={t("technology.generation.alt_gen_img")}
                width={560}
                height={275}
                loading="lazy"
              />
            </div>
          </div>

          {/* ENERGÍA LIMPIA */}
          <div className="technology-info-block technology-clean-energy">
            <div className="technology-section-eyebrow">
              <span></span>
              {t("technology.clean_energy.eyebrow")}
            </div>

            <h2 className="technology-section-title">
              {t("technology.clean_energy.title_line1")}
              <br />
              <strong>{t("technology.clean_energy.title_line2")}</strong>
            </h2>

            <p>{t("technology.clean_energy.description")}</p>

            <div className="technology-feature-list">
              <TechnologyFeature
                icon={<Leaf size={22} />}
                text={
                  <>
                    {t("technology.clean_energy.feature1_line1")}
                    <br />
                    {t("technology.clean_energy.feature1_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<CircleGauge size={22} />}
                text={
                  <>
                    {t("technology.clean_energy.feature2_line1")}
                    <br />
                    {t("technology.clean_energy.feature2_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<Recycle size={22} />}
                text={
                  <>
                    {t("technology.clean_energy.feature3_line1")}
                    <br />
                    {t("technology.clean_energy.feature3_line2")}
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENERGÍA SOLAR
      ===================================================== */}
      <section className="technology-section technology-solar">
        <div className="technology-container technology-solar-grid">
          {/* IMAGEN */}
          <div className="technology-solar-media">
            <div className="technology-image technology-solar-image">
              <img
                src={PanelSol}
                alt={t("technology.solar.alt_solar_img")}
                width={386}
                height={240}
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="technology-info-block">
            <div className="technology-section-eyebrow">
              <span></span>
              {t("technology.solar.eyebrow")}
            </div>

            <h2 className="technology-section-title">
              {t("technology.solar.title_line1")}
              <br />
              {t("technology.solar.title_line2")}
              <br />
              <strong>{t("technology.solar.title_line3")}</strong>
            </h2>

            <p>{t("technology.solar.description")}</p>

            <div className="technology-feature-list">
              <TechnologyFeature
                icon={<Sun size={22} />}
                text={t("technology.solar.feature1")}
              />

              <TechnologyFeature
                icon={<Leaf size={22} />}
                text={
                  <>
                    {t("technology.solar.feature2_line1")}
                    <br />
                    {t("technology.solar.feature2_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<Zap size={22} />}
                text={
                  <>
                    {t("technology.solar.feature3_line1")}
                    <br />
                    {t("technology.solar.feature3_line2")}
                  </>
                }
              />
            </div>
          </div>

          {/* DIAGRAMA */}
          <div className="technology-system-card">
            <div className="technology-section-eyebrow">
              <span></span>
              {t("technology.solar.system.eyebrow")}
            </div>

            <p className="technology-system-description">
              {t("technology.solar.system.description")}
            </p>

            <div className="technology-system-flow">
              <div className="technology-system-item">
                <div className="technology-system-icon">
                  <Sun size={34} strokeWidth={1.4} />
                </div>
                <strong>{t("technology.solar.system.panels_title")}</strong>
                <span>{t("technology.solar.system.panels_sub")}</span>
              </div>

              <div className="technology-system-arrow">
                <ArrowRight size={27} />
              </div>

              <div className="technology-system-item">
                <div className="technology-system-icon">
                  <Settings size={34} strokeWidth={1.4} />
                </div>
                <strong>
                  {t("technology.solar.system.management_title")}
                </strong>
                <span>{t("technology.solar.system.management_sub")}</span>
              </div>

              <div className="technology-system-arrow">
                <ArrowRight size={27} />
              </div>

              <div className="technology-system-item">
                <div className="technology-system-icon">
                  <BatteryCharging size={34} strokeWidth={1.4} />
                </div>
                <strong>{t("technology.solar.system.diesel_title")}</strong>
                <span>{t("technology.solar.system.diesel_sub")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INFRAESTRUCTURA INTELIGENTE
      ===================================================== */}
      <section className="technology-section technology-infrastructure">
        <div className="technology-container technology-infrastructure-grid">
          {/* IMAGEN IZQUIERDA */}
          <div className="technology-infrastructure-image">
            <div className="technology-image technology-event-cables-image">
              <img
                src={Conectividad}
                alt={t("technology.infrastructure.alt_cables_img")}
                width={487}
                height={230}
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXTO CENTRAL */}
          <div className="technology-info-block">
            <div className="technology-section-eyebrow">
              <span></span>
              {t("technology.infrastructure.eyebrow")}
            </div>

            <h2 className="technology-section-title">
              {t("technology.infrastructure.title_line1")}
              <br />
              <strong>{t("technology.infrastructure.title_line2")}</strong>
            </h2>

            <p>{t("technology.infrastructure.description")}</p>

            <div className="technology-feature-list">
              <TechnologyFeature
                icon={<ShieldCheck size={22} />}
                text={
                  <>
                    {t("technology.infrastructure.feature1_line1")}
                    <br />
                    {t("technology.infrastructure.feature1_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<Cable size={22} />}
                text={
                  <>
                    {t("technology.infrastructure.feature2_line1")}
                    <br />
                    {t("technology.infrastructure.feature2_line2")}
                  </>
                }
              />

              <TechnologyFeature
                icon={<Clock3 size={22} />}
                text={
                  <>
                    {t("technology.infrastructure.feature3_line1")}
                    <br />
                    {t("technology.infrastructure.feature3_line2")}
                  </>
                }
              />
            </div>
          </div>

          {/* IMAGEN DERECHA */}
          <div className="technology-infrastructure-image">
            <div className="technology-image technology-connections-image">
              <img
                src={Distribucion}
                alt={t("technology.infrastructure.alt_conn_img")}
                width={390}
                height={230}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ===================================================== */}
      <section className="technology-cta">
        <div className="technology-cta-overlay">
          <img
            src={Concert2}
            alt=""
            aria-hidden="true"
            width={1900}
            height={400}
            loading="lazy"
          />
        </div>

        <div className="technology-container technology-cta-grid">
          <div className="technology-cta-title">
            <div className="technology-section-eyebrow">
              <span></span>
              {t("technology.cta.eyebrow")}
            </div>

            <h2>
              {t("technology.cta.title_line1")}
              <br />
              <strong>{t("technology.cta.title_line2")}</strong>
            </h2>
          </div>

          <div className="technology-cta-description">
            <p>{t("technology.cta.description")}</p>

            <a href="#contacto" className="technology-button">
              {t("technology.cta.button")}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="technology-cta-services">
            <div>
              <BatteryCharging size={30} />
              <span>{t("technology.cta.service1")}</span>
            </div>

            <div>
              <Sun size={30} />
              <span>{t("technology.cta.service2")}</span>
            </div>

            <div>
              <Cable size={30} />
              <span>
                {t("technology.cta.service3_line1")}
                <br />
                {t("technology.cta.service3_line2")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   COMPONENTE REUTILIZABLE
============================================================ */

function TechnologyFeature({ icon, text }) {
  return (
    <div className="technology-feature">
      <div className="technology-feature-icon">{icon}</div>
      <span>{text}</span>
    </div>
  );
}