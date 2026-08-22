import heroWorkingWoman from "@/assets/hero-woman-scooter.webp";
import heroHomemaker from "@/assets/hero-persona-homemaker.jpg";
import heroHelper from "@/assets/hero-persona-helper.jpg";
import heroNurse from "@/assets/hero-persona-nurse.jpg";
import heroEntrepreneur from "@/assets/hero-persona-entrepreneur.jpg";

export type HeroPersona = {
  src: string;
  alt: string;
  caption: string;
};

/**
 * Weekly-rotating hero personas. Each week a different woman's story leads the
 * page — same mission, fresh face. Add new entries here to extend the rotation.
 */
export const heroPersonas: HeroPersona[] = [
  {
    src: heroWorkingWoman,
    alt: "Confident working woman riding her Zypdrive electric scooter to office",
    caption: "Priya · rides to work every day",
  },
  {
    src: heroHomemaker,
    alt: "Homemaker riding a Zypdrive electric scooter with groceries in the basket",
    caption: "Lakshmi · school runs, market and more",
  },
  {
    src: heroNurse,
    alt: "Nurse riding a Zypdrive electric scooter to hospital in Manipal",
    caption: "Divya · early shifts at the hospital",
  },
  {
    src: heroHelper,
    alt: "Home-help professional riding a Zypdrive electric scooter through town",
    caption: "Shalini · four homes, one ride",
  },
  {
    src: heroEntrepreneur,
    alt: "Woman shop owner riding a Zypdrive electric scooter with a delivery box",
    caption: "Anitha · delivers her own orders",
  },
];

/** ISO-ish week index since epoch, so the hero changes once every week. */
export function currentWeekIndex(date: Date = new Date()): number {
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
  return Math.floor(date.getTime() / MS_PER_WEEK);
}

export function getWeeklyHeroPersona(date: Date = new Date()): HeroPersona {
  return heroPersonas[currentWeekIndex(date) % heroPersonas.length];
}
