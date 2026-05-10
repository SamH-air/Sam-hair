export interface PricingItem {
  name: string;
  price: string;
  note?: string;
}

export interface PricingCategory {
  category: string;
  items: PricingItem[];
}

export const PRICING: PricingCategory[] = [
  {
    category: "Enfant (-10 ans)",
    items: [
      { name: "Garçon", price: "15 €" },
      { name: "Fille",  price: "18 €" }
    ]
  },
  {
    category: "Ado (-18 ans)",
    items: [
      { name: "Garçon", price: "19 €" },
      { name: "Fille",  price: "24 €" }
    ]
  },
  {
    category: "Homme",
    items: [
      { name: "Coupe",          price: "24 €" },
      { name: "Coupe + Barbe",  price: "35 €" }
    ]
  },
  {
    category: "Femme — Coupe + Brushing",
    items: [
      { name: "Court",   price: "40 €" },
      { name: "Mi-long", price: "45 €" },
      { name: "Long",    price: "50 €" }
    ]
  },
  {
    category: "Brushing seul",
    items: [
      { name: "Court",   price: "28 €" },
      { name: "Mi-long", price: "34 €" },
      { name: "Long",    price: "à partir de 40 €" }
    ]
  },
  {
    category: "Patine",
    items: [
      { name: "Court",   price: "15 €" },
      { name: "Mi-long", price: "20 €" },
      { name: "Long",    price: "25 €", note: "Supplément si cheveux très longs" }
    ]
  },
  {
    category: "Mariage & Événement",
    items: [
      { name: "Coiffure de mariée / événement", price: "200 €", note: "Essai coiffure inclus" }
    ]
  },
  {
    category: "Déplacement",
    items: [
      { name: "Frais de déplacement", price: "À convenir" }
    ]
  }
];
