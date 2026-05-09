export interface Service {
  icon: "scissors" | "sparkles" | "wind" | "heart";
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: "scissors",
    title: "Coupe & Coiffage",
    description: "Des coupes personnalisées qui subliment votre visage et votre personnalité."
  },
  {
    icon: "sparkles",
    title: "Colorations Techniques",
    description: "Balayage, Ombré, Babylight... une expertise précise pour des reflets naturels et durables."
  },
  {
    icon: "wind",
    title: "Soins Profonds",
    description: "Rituel de soin intense pour redonner force, brillance et vitalité à vos cheveux."
  },
  {
    icon: "heart",
    title: "Mariage & Événement",
    description: "Coiffure de mariée ou de cérémonie avec essai inclus. Un moment unique, soigné jusque dans les moindres détails."
  }
];
