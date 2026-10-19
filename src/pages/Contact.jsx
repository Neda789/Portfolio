import { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  useDocumentHead(t("contact.metaTitle"), t("contact.metaDescription"));

  const [status, setStatus] = useState({ sending: false, message: "", detail: "", type: "" });
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    setStatus({ sending: true, message: "", detail: "", type: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/6bb3a4b991ccab2055dbd11f8912f7f2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          _replyto: form.email,
          _subject: form.sujet,
          subject: form.sujet,
          message: form.message,
          _url: window.location.href,
          _template: "table",
          _honey: "",
        }),
      });
      const result = await response.json().catch(() => ({}));
      const accepted = result.success === true || String(result.success).toLowerCase() === "true";

      if (!response.ok || !accepted) {
        const detail = typeof result.message === "string"
          ? result.message
          : `${response.status} ${response.statusText}`.trim();
        throw new Error(detail || "The email service rejected the submission.");
      }

      setStatus({
        sending: false,
        message: t("contact.successMessage"),
        detail: "",
        type: "success",
      });
      setForm({ nom: "", email: "", sujet: "", message: "" });
    } catch {
      setStatus({
        sending: false,
        message: t("contact.errorMessage"),
        detail: error instanceof Error ? error.message : "",
        type: "error",
      });
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal as="p" className="breadcrumb">
            <Link to="/">{t("nav.accueil")}</Link> / <span>{t("nav.contact")}</span>
          </Reveal>
          <Reveal as="span" className="kicker" delay={1} style={{ justifyContent: "center" }}>
            {t("contact.kicker")}
          </Reveal>
          <Reveal as="h1" delay={2}>
            {t("contact.titleBefore")}<span className="gradient-text">{t("contact.titleGradient")}</span> {t("contact.titleAfter")}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <Reveal className="glass-card contact-info-card">
            <span className="kicker">{t("contact.infoKicker")}</span>
            <h2 className="section-title" style={{ fontSize: "1.6rem" }}>{t("contact.infoTitle")}</h2>
          

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="m4 6 8 7 8-7" /></svg>
              </div>
              <div><h4>{t("contact.email")}</h4><p>neda_89@live.com</p></div>
            </div>


            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div><h4>{t("contact.location")}</h4><p>{t("contact.locationValue")}</p></div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <div><h4>{t("contact.availability")}</h4><p>{t("contact.availabilityValue")}</p></div>
            </div>

            <div className="social-row">
              <a href="https://www.linkedin.com/in/neda-sekulic2489" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5 5 0 0 1 16 8z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
              <a href="https://github.com/Neda789" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C7.5 2.8 6.4 3.1 6.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg></a>
             
            </div>
          </Reveal>

          <Reveal className="glass-card contact-form" delay={1}>
            <span className="kicker">{t("contact.formKicker")}</span>
            <h2 className="section-title" style={{ fontSize: "1.6rem" }}>{t("contact.formTitle")}</h2>
            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="nom">{t("contact.fullName")}</label>
                  <input type="text" id="nom" name="nom" placeholder="" required value={form.nom} onChange={onChange} />
                </div>
                <div className="field">
                  <label htmlFor="email">{t("contact.emailAddress")}</label>
                  <input type="email" id="email" name="email" placeholder="" required value={form.email} onChange={onChange} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="sujet">{t("contact.subject")}</label>
                <input type="text" id="sujet" name="sujet" placeholder="" required value={form.sujet} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="message">{t("contact.message")}</label>
                <textarea id="message" name="message" placeholder="" required value={form.message} onChange={onChange} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status.sending}>
                {status.sending ? t("contact.sending") : t("contact.send")}
              </button>
              <p className={`form-note${status.type ? ` ${status.type}` : ""}`} role="status" aria-live="polite">
                {status.message}
              </p>
              {status.detail && <p className="form-note-detail">{status.detail}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
