// src/pages/Jobs.jsx

import React, { useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Jobs.css";
import JobsHero from '../assets/JobsHero.jpg';

export default function Jobs() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const applicationRef = useRef(null);

  const vacancies = t("jobs.vacancies.items", {
    returnObjects: true,
  });

  const categories = [
    "all",
    "production",
    "technical",
    "administration",
    "design",
  ];

  const filteredJobs = useMemo(() => {
    if (!Array.isArray(vacancies)) return [];

    if (activeCategory === "all") return vacancies;

    return vacancies.filter(
      (job) => job.category === activeCategory
    );
  }, [vacancies, activeCategory]);

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormMessage("");

    applicationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleGeneralApplication = () => {
    setSelectedJob("");
    setFormMessage("");

    applicationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get("resume");

    if (!file || !file.size) {
      setFormMessage(t("jobs.form.errors.file"));
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setFormMessage(t("jobs.form.errors.format"));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFormMessage(t("jobs.form.errors.size"));
      return;
    }

    // Preparado para conectar posteriormente con el backend.
    setFormMessage(t("jobs.form.success"));
    form.reset();
    setSelectedJob("");
  };

  return (
    <main className="jobs-page">

      {/* HERO */}
      <section
        className="jobs-hero"
        style={{
            "--jobs-hero-image": `url(${JobsHero})`,
        }}
      >
        <div className="jobs-hero-overlay" />

        <div className="jobs-container jobs-hero-content">

          <span className="jobs-eyebrow">
            {t("jobs.hero.eyebrow")}
          </span>

          <h1>
            {t("jobs.hero.titleLine1")}
            <br />
            {t("jobs.hero.titleLine2")}
            <br />
            <span>{t("jobs.hero.titleHighlight")}</span>
          </h1>

          <p>{t("jobs.hero.description")}</p>

          <button
            className="jobs-button jobs-button-yellow"
            onClick={() =>
              document.getElementById("jobs-vacancies")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {t("jobs.hero.cta")}
            <span aria-hidden="true">→</span>
          </button>

        </div>
      </section>

      {/* VACANTES */}
      <section className="jobs-vacancies" id="jobs-vacancies">

        <div className="jobs-container">

          <div className="jobs-section-heading">
            <h2>{t("jobs.vacancies.title")}</h2>

            <span className="jobs-count">
              {filteredJobs.length} {t("jobs.vacancies.available")}
            </span>
          </div>

          {/* FILTROS */}
          <div className="jobs-filters" role="group" aria-label={t("jobs.vacancies.filtersLabel")}>

            {categories.map((category) => (
              <button
                key={category}
                className={`jobs-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {t(`jobs.categories.${category}`)}
              </button>
            ))}

          </div>

          {/* LISTADO */}
          <div className="jobs-list">

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (

                <article className="jobs-card" key={job.id}>

                  <div className="jobs-card-icon" aria-hidden="true">
                    {job.icon}
                  </div>

                  <div className="jobs-card-info">

                    <h3>{job.title}</h3>

                    <div className="jobs-card-meta">

                      <span className={`jobs-tag ${job.category}`}>
                        {t(`jobs.categories.${job.category}`)}
                      </span>

                      <span>● {job.location}</span>
                      <span>● {job.modality}</span>
                      <span>● {job.contract}</span>

                    </div>

                    <span className="jobs-date">
                      {t("jobs.vacancies.published")} {job.date}
                    </span>

                  </div>

                  <button
                    className="jobs-apply-button"
                    onClick={() => handleApply(job.title)}
                  >
                    {t("jobs.vacancies.apply")}
                    <span aria-hidden="true">→</span>
                  </button>

                </article>

              ))
            ) : (

              <div className="jobs-empty">
                <span>✦</span>
                <h3>{t("jobs.vacancies.emptyTitle")}</h3>
                <p>{t("jobs.vacancies.emptyDescription")}</p>

                <button
                  className="jobs-button jobs-button-yellow"
                  onClick={handleGeneralApplication}
                >
                  {t("jobs.vacancies.emptyCta")}
                  <span aria-hidden="true">→</span>
                </button>
              </div>

            )}

          </div>

        </div>

      </section>

      {/* POSTULACIÓN GENERAL */}
      <section className="jobs-general" ref={applicationRef}>

        <div className="jobs-general-inner jobs-container">

          <div className="jobs-general-copy">

            <h2>
              {t("jobs.general.titleLine1")}
              <br />
              <span>{t("jobs.general.titleLine2")}</span>
            </h2>

            <p>{t("jobs.general.description")}</p>

            <p className="jobs-general-highlight">
              {t("jobs.general.highlight")}
            </p>

            <button
              className="jobs-button jobs-button-dark"
              onClick={() => {
                document.getElementById("jobs-form-name")?.focus();
              }}
            >
              {t("jobs.general.cta")}
              <span aria-hidden="true">→</span>
            </button>

          </div>

          <form
            className="jobs-form"
            onSubmit={handleSubmit}
          >

            <div className="jobs-form-group">
              <label htmlFor="jobs-form-name">
                {t("jobs.form.name")}
              </label>

              <input
                id="jobs-form-name"
                name="name"
                type="text"
                placeholder={t("jobs.form.namePlaceholder")}
                required
              />
            </div>

            <div className="jobs-form-group">
              <label htmlFor="jobs-form-email">
                {t("jobs.form.email")}
              </label>

              <input
                id="jobs-form-email"
                name="email"
                type="email"
                placeholder={t("jobs.form.emailPlaceholder")}
                required
              />
            </div>

            <div className="jobs-form-group">
              <label htmlFor="jobs-form-area">
                {t("jobs.form.area")}
              </label>

              <select
                id="jobs-form-area"
                name="area"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {t("jobs.form.areaPlaceholder")}
                </option>

                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {t(`jobs.categories.${category}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="jobs-form-group">
              <label htmlFor="jobs-form-job">
                {t("jobs.form.position")}
              </label>

              <select
                id="jobs-form-job"
                name="position"
                value={selectedJob}
                onChange={(event) => setSelectedJob(event.target.value)}
              >
                <option value="">
                  {t("jobs.form.positionPlaceholder")}
                </option>

                {Array.isArray(vacancies) &&
                  vacancies.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
              </select>
            </div>

            <div className="jobs-form-group jobs-file-group">
              <label htmlFor="jobs-form-resume">
                {t("jobs.form.resume")}
              </label>

              <input
                id="jobs-form-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
              />

              <span>{t("jobs.form.fileHelp")}</span>
            </div>

            <div className="jobs-form-group">
              <label htmlFor="jobs-form-message">
                {t("jobs.form.message")}
              </label>

              <textarea
                id="jobs-form-message"
                name="message"
                placeholder={t("jobs.form.messagePlaceholder")}
                rows="2"
              />
            </div>

            {formMessage && (
              <p
                className="jobs-form-feedback"
                role="status"
              >
                {formMessage}
              </p>
            )}

            <button
              type="submit"
              className="jobs-button jobs-button-yellow jobs-submit"
            >
              {t("jobs.form.submit")}
              <span aria-hidden="true">→</span>
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}