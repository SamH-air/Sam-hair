import { useState } from "react";
import { MessageCircle, Smartphone, CheckSquare, Square } from "lucide-react";

const PRESTATIONS = [
  "Coupe enfant",
  "Coupe ado",
  "Coupe homme",
  "Coupe homme + barbe",
  "Coupe femme + brushing",
  "Brushing seul",
  "Patine",
  "Coloration / Balayage (sur devis)",
  "Mariage & Événement",
];

const DISPOS = [
  "Lundi matin",
  "Lundi après-midi",
  "Mardi matin",
  "Mardi après-midi",
  "Mercredi matin",
  "Mercredi après-midi",
  "Jeudi matin",
  "Jeudi après-midi",
  "Vendredi matin",
  "Vendredi après-midi",
  "Samedi matin",
  "Samedi après-midi",
];

interface FormState {
  nom: string;
  telephone: string;
  adresse: string;
  personnes: string;
  prestations: string[];
  dispos: string[];
  message: string;
}

function Checkbox({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm text-left transition-all duration-200 ${
        checked
          ? "border-golden-bronze bg-golden-bronze/10 text-golden-bronze"
          : "border-lavender-blush/20 text-lavender-blush/60 hover:border-golden-bronze/40"
      }`}
    >
      {checked ? (
        <CheckSquare className="w-4 h-4 shrink-0" />
      ) : (
        <Square className="w-4 h-4 shrink-0" />
      )}
      {label}
    </button>
  );
}

function buildMessage(form: FormState): string {
  const lines = [
    "Bonjour Samantha ! 👋",
    "",
    `Nom : ${form.nom || "—"}`,
    `Téléphone : ${form.telephone || "—"}`,
    `Nombre de personnes : ${form.personnes}`,
    `Adresse : ${form.adresse || "—"}`,
    "",
    `Prestation(s) souhaitée(s) :`,
    ...form.prestations.map((p) => `  • ${p}`),
    "",
    `Disponibilités :`,
    ...form.dispos.map((d) => `  • ${d}`),
  ];

  if (form.message.trim()) {
    lines.push("", `Message : ${form.message}`);
  }

  return lines.join("\n");
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nom: "",
    telephone: "",
    adresse: "",
    personnes: "1",
    prestations: [],
    dispos: [],
    message: "",
  });
  const [error, setError] = useState("");

  function toggleItem(field: "prestations" | "dispos", value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  }

  function validate(): boolean {
    if (!form.nom.trim()) {
      setError("Merci d'indiquer votre prénom.");
      return false;
    }
    if (form.prestations.length === 0) {
      setError("Veuillez choisir au moins une prestation.");
      return false;
    }
    if (!form.adresse.trim()) {
      setError("Merci d'indiquer l'adresse du déplacement.");
      return false;
    }
    if (form.dispos.length === 0) {
      setError("Veuillez indiquer au moins une disponibilité.");
      return false;
    }
    setError("");
    return true;
  }

  function sendWhatsApp() {
    if (!validate()) return;
    const text = encodeURIComponent(buildMessage(form));
    window.open(`https://wa.me/33637737142?text=${text}`, "_blank");
  }

  function sendSMS() {
    if (!validate()) return;
    const text = encodeURIComponent(buildMessage(form));
    window.location.href = `sms:+33637737142?body=${text}`;
  }

  const inputClass =
    "w-full bg-graphite/40 border border-lavender-blush/15 rounded-xl px-4 py-3 text-lavender-blush placeholder:text-lavender-blush/30 focus:outline-none focus:border-golden-bronze/60 transition-colors";

  return (
    <section
      id="contact-form"
      className="section-padding"
      aria-labelledby="form-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="form-heading"
            className="text-3xl md:text-5xl mb-4"
          >
            Prendre rendez-vous
          </h2>
          <div className="w-24 h-1 bg-golden-bronze mx-auto" />
          <p className="mt-6 text-lavender-blush/60 font-light">
            Remplissez le formulaire — le message sera envoyé directement à
            Samantha.
          </p>
        </div>

        <div className="glass-card p-4 sm:p-8 md:p-12 space-y-10">
          {/* Identité */}
          <fieldset className="space-y-4">
            <legend className="text-golden-bronze text-xs uppercase tracking-widest font-semibold mb-4">
              Vos coordonnées
            </legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Prénom *"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className={inputClass}
                autoComplete="given-name"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={form.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                className={inputClass}
                autoComplete="tel"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="text-lavender-blush/60 text-sm">
                Nombre de personnes *
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, personnes: String(Math.max(1, Number(p.personnes) - 1)) }))}
                  className="w-9 h-9 rounded-full border border-lavender-blush/20 text-golden-bronze hover:border-golden-bronze/60 transition-colors text-lg font-bold flex items-center justify-center"
                  aria-label="Diminuer"
                >
                  −
                </button>
                <span className="text-lavender-blush font-display text-xl w-6 text-center">
                  {form.personnes}
                </span>
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, personnes: String(Number(p.personnes) + 1) }))}
                  className="w-9 h-9 rounded-full border border-lavender-blush/20 text-golden-bronze hover:border-golden-bronze/60 transition-colors text-lg font-bold flex items-center justify-center"
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
            </div>
          </fieldset>

          {/* Prestations */}
          <fieldset>
            <legend className="text-golden-bronze text-xs uppercase tracking-widest font-semibold mb-4">
              Prestation(s) souhaitée(s) *
            </legend>
            <div className="flex flex-wrap gap-2">
              {PRESTATIONS.map((p) => (
                <Checkbox
                  key={p}
                  label={p}
                  checked={form.prestations.includes(p)}
                  onChange={() => toggleItem("prestations", p)}
                />
              ))}
            </div>
          </fieldset>

          {/* Lieu */}
          <fieldset className="space-y-2">
            <legend className="text-golden-bronze text-xs uppercase tracking-widest font-semibold mb-4">
              Lieu de la prestation *
            </legend>
            <input
              type="text"
              placeholder="Votre adresse complète (rue, ville, code postal)"
              value={form.adresse}
              onChange={(e) => setForm({ ...form, adresse: e.target.value })}
              className={inputClass}
              autoComplete="street-address"
            />
          </fieldset>

          {/* Disponibilités */}
          <fieldset>
            <legend className="text-golden-bronze text-xs uppercase tracking-widest font-semibold mb-4">
              Vos disponibilités *
            </legend>
            <div className="flex flex-wrap gap-2">
              {DISPOS.map((d) => (
                <Checkbox
                  key={d}
                  label={d}
                  checked={form.dispos.includes(d)}
                  onChange={() => toggleItem("dispos", d)}
                />
              ))}
            </div>
          </fieldset>

          {/* Message libre */}
          <fieldset>
            <legend className="text-golden-bronze text-xs uppercase tracking-widest font-semibold mb-4">
              Message (facultatif)
            </legend>
            <textarea
              placeholder="Précisions, longueur des cheveux, demande particulière…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </fieldset>

          {/* Erreur */}
          {error && (
            <p className="text-bubblegum-pink text-sm text-center" role="alert">
              {error}
            </p>
          )}

          {/* Boutons d'envoi */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={sendWhatsApp}
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-full transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Envoyer via WhatsApp
            </button>
            <button
              type="button"
              onClick={sendSMS}
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-graphite border border-golden-bronze/30 text-golden-bronze font-semibold rounded-full transition-all duration-300 hover:bg-golden-bronze hover:text-coffee-bean hover:scale-105 active:scale-95"
            >
              <Smartphone className="w-5 h-5" />
              Envoyer par SMS
            </button>
          </div>

          <p className="text-center text-lavender-blush/30 text-xs">
            Le SMS fonctionne uniquement depuis un mobile.
          </p>
        </div>
      </div>
    </section>
  );
}
