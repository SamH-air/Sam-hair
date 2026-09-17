export type GalleryCategory = "mariage" | "couleur" | "coupe-femme" | "homme-enfant";

export interface GalleryImage {
  url: string;
  title: string;
  alt: string;
  prestation: string;
  category: GalleryCategory;
  width: number;
  height: number;
  /** Photo avant / après (deux vues côte à côte) */
  beforeAfter?: boolean;
  /** Affichée dans la sélection de la page d'accueil */
  featured?: boolean;
}

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "mariage",      label: "Mariage & Chignons" },
  { id: "couleur",      label: "Couleur & Balayage" },
  { id: "coupe-femme",  label: "Coupe & Brushing" },
  { id: "homme-enfant", label: "Homme & Enfant" }
];

const DIR = "/assets/realisations";

export const GALLERY: GalleryImage[] = [
  // — Mariage & Chignons —
  {
    url: `${DIR}/coiffure-mariee-chignon-boheme.jpg`, width: 509, height: 1100,
    category: "mariage", featured: true,
    title: "Chignon de Mariée",
    alt: "Mariée avec chignon bohème fleuri réalisé à domicile par Samantha Huoy — S-MH'air",
    prestation: "Coiffure de mariée · Essai inclus · 200 €"
  },
  {
    url: `${DIR}/coiffure-mariage-tresse-boheme-fleurs.jpg`, width: 578, height: 1100,
    category: "mariage",
    title: "Tresse Bohème Fleurie",
    alt: "Coiffure de mariage bohème avec fleurs blanches dans les cheveux longs — S-MH'air",
    prestation: "Mariage & Événement · Essai inclus"
  },
  {
    url: `${DIR}/coiffure-mariage-demi-attache-fleurs.jpg`, width: 825, height: 1100,
    category: "mariage",
    title: "Demi-Attaché Champêtre",
    alt: "Coiffure de mariage demi-attachée bouclée ornée de fleurs naturelles et de gypsophile — S-MH'air",
    prestation: "Mariage & Événement · Essai inclus"
  },
  {
    url: `${DIR}/chignon-boucle-bijou-evenement.jpg`, width: 825, height: 1100,
    category: "mariage",
    title: "Chignon Bouclé & Bijou",
    alt: "Chignon bouclé orné d'un bijou de cheveux pour un événement — S-MH'air",
    prestation: "Mariage & Événement"
  },
  {
    url: `${DIR}/chignon-ceremonie-boucle.jpg`, width: 508, height: 1100,
    category: "mariage",
    title: "Chignon de Cérémonie",
    alt: "Chignon bouclé flou pour une cérémonie, réalisé à domicile — S-MH'air",
    prestation: "Mariage & Événement"
  },
  {
    url: `${DIR}/chignon-mariage-strass.jpg`, width: 578, height: 1100,
    category: "mariage",
    title: "Chignon Strass",
    alt: "Chignon bouclé avec épingles strass pour un mariage — S-MH'air",
    prestation: "Mariage & Événement"
  },

  // — Couleur & Balayage —
  {
    url: `${DIR}/balayage-caramel-avant-apres.jpg`, width: 1100, height: 1100,
    category: "couleur", beforeAfter: true, featured: true,
    title: "Balayage Caramel",
    alt: "Avant / après : balayage caramel et boucles sur cheveux longs bruns — S-MH'air",
    prestation: "Balayage + Brushing · sur devis"
  },
  {
    url: `${DIR}/coloration-cuivree-cheveux-longs.jpg`, width: 722, height: 1100,
    category: "couleur", featured: true,
    title: "Cuivré Flamboyant",
    alt: "Coloration cuivrée dégradée sur cheveux longs lisses — S-MH'air",
    prestation: "Coloration · sur devis"
  },
  {
    url: `${DIR}/balayage-blond-lumineux-avant-apres.jpg`, width: 1100, height: 1100,
    category: "couleur", beforeAfter: true, featured: true,
    title: "Blond Lumineux",
    alt: "Avant / après : balayage blond lumineux et patine sur cheveux mi-longs — S-MH'air",
    prestation: "Balayage + Patine · sur devis"
  },
  {
    url: `${DIR}/balayage-carre-wavy.jpg`, width: 829, height: 1100,
    category: "couleur",
    title: "Balayage sur Carré",
    alt: "Balayage caramel sur carré wavy ondulé — S-MH'air",
    prestation: "Balayage + Brushing · sur devis"
  },
  {
    url: `${DIR}/coloration-cuivree-avant-apres.jpg`, width: 1100, height: 1100,
    category: "couleur", beforeAfter: true,
    title: "Transformation Cuivrée",
    alt: "Avant / après : coloration cuivrée sur cheveux longs méchés — S-MH'air",
    prestation: "Coloration + Brushing · sur devis"
  },
  {
    url: `${DIR}/balayage-blond-dore-avant-apres.jpg`, width: 1080, height: 1080,
    category: "couleur", beforeAfter: true,
    title: "Blond Doré Ondulé",
    alt: "Avant / après : balayage blond doré avec brushing ondulé — S-MH'air",
    prestation: "Balayage + Brushing · sur devis"
  },
  {
    url: `${DIR}/coloration-blond-beige-avant-apres.jpg`, width: 1100, height: 1100,
    category: "couleur", beforeAfter: true,
    title: "Blond Beige Lisse",
    alt: "Avant / après : coloration blond beige et lissage sur carré long — S-MH'air",
    prestation: "Coloration + Brushing · sur devis"
  },
  {
    url: `${DIR}/balayage-chocolat-caramel-avant-apres.jpg`, width: 1100, height: 1100,
    category: "couleur", beforeAfter: true,
    title: "Balayage Chocolat Caramel",
    alt: "Avant / après : balayage caramel sur base chocolat, cheveux lisses — S-MH'air",
    prestation: "Balayage · sur devis"
  },
  {
    url: `${DIR}/ombre-hair-brun-avant-apres.jpg`, width: 1100, height: 1100,
    category: "couleur", beforeAfter: true,
    title: "Ombré Brun",
    alt: "Avant / après : ombré hair et coupe sur cheveux longs bruns — S-MH'air",
    prestation: "Ombré + Coupe · sur devis"
  },
  {
    url: `${DIR}/coloration-blonde-cheveux-boucles-avant-apres.jpg`, width: 946, height: 944,
    category: "couleur", beforeAfter: true,
    title: "Boucles Blondes",
    alt: "Avant / après : éclaircissement blond sur cheveux très bouclés — S-MH'air",
    prestation: "Coloration + Patine · sur devis"
  },

  // — Coupe & Brushing —
  {
    url: `${DIR}/coupe-brushing-lisse-avant-apres.jpg`, width: 1100, height: 1100,
    category: "coupe-femme", beforeAfter: true, featured: true,
    title: "Brun Miroir",
    alt: "Avant / après : coupe, soin et brushing lisse brillant sur cheveux bruns — S-MH'air",
    prestation: "Coupe femme + Brushing long · 50 €"
  },
  {
    url: `${DIR}/coupe-brushing-ondule-avant-apres.jpg`, width: 946, height: 944,
    category: "coupe-femme", beforeAfter: true,
    title: "Brushing Ondulé",
    alt: "Avant / après : coupe et brushing ondulé sur cheveux longs châtains — S-MH'air",
    prestation: "Coupe femme + Brushing long · 50 €"
  },
  {
    url: `${DIR}/coupe-cheveux-boucles-avant-apres.jpg`, width: 1100, height: 1100,
    category: "coupe-femme", beforeAfter: true,
    title: "Boucles Disciplinées",
    alt: "Avant / après : coupe et mise en forme de boucles sur cheveux bruns — S-MH'air",
    prestation: "Coupe femme + Brushing · 45 €"
  },
  {
    url: `${DIR}/coupe-boucles-naturelles.jpg`, width: 829, height: 1100,
    category: "coupe-femme",
    title: "Boucles Naturelles",
    alt: "Coupe adaptée aux cheveux bouclés naturels, mi-longs — S-MH'air",
    prestation: "Coupe femme · à partir de 40 €"
  },
  {
    url: `${DIR}/coupe-courte-bouclee-avant-apres.jpg`, width: 1024, height: 1024,
    category: "coupe-femme", beforeAfter: true,
    title: "Coupe Courte Bouclée",
    alt: "Avant / après : coupe courte et coiffage sur cheveux bouclés — S-MH'air",
    prestation: "Coupe femme + Brushing court · 40 €"
  },

  // — Homme & Enfant —
  {
    url: `${DIR}/coupe-homme-degrade-avant-apres.jpg`, width: 1100, height: 1100,
    category: "homme-enfant", beforeAfter: true, featured: true,
    title: "Dégradé Homme",
    alt: "Avant / après : coupe homme dégradé à blanc réalisée à domicile — S-MH'air",
    prestation: "Coupe homme · 24 €"
  },
  {
    url: `${DIR}/coupe-ado-garcon-avant-apres.jpg`, width: 1100, height: 1100,
    category: "homme-enfant", beforeAfter: true,
    title: "Coupe Ado",
    alt: "Avant / après : coupe garçon ado avec dégradé nuque — S-MH'air",
    prestation: "Coupe ado garçon · 19 €"
  },
  {
    url: `${DIR}/coupe-enfant-garcon-avant-apres.jpg`, width: 1100, height: 1100,
    category: "homme-enfant", beforeAfter: true,
    title: "Coupe Enfant",
    alt: "Coupe enfant garçon courte réalisée à domicile — S-MH'air",
    prestation: "Coupe enfant garçon · 15 €"
  },
  {
    url: `${DIR}/coupe-enfant-fille-degradee-avant-apres.jpg`, width: 1100, height: 1100,
    category: "homme-enfant", beforeAfter: true,
    title: "Coupe Fille Dégradée",
    alt: "Avant / après : coupe dégradée sur cheveux longs d'une petite fille — S-MH'air",
    prestation: "Coupe enfant fille · 18 €"
  }
];

export const FEATURED_GALLERY = GALLERY.filter((img) => img.featured);
