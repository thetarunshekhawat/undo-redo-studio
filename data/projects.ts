/**
 * Featured projects — sourced from Studio UNDO/REDO Portfolio 2026.
 * ✏️ TO UPDATE THE SITE'S WORK PAGE: edit this file only.
 * Add an image to /public/assets/projects and append an entry here.
 */
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  hero: string; // full-bleed image
  intro?: string; // secondary image
  description: string;
  services: string;
  industry: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "kasheda",
    title: "kasheda",
    tagline: "The essence of Indian spirit & clothing",
    hero: "/assets/projects/kasheda-hero.jpg",
    intro: "/assets/projects/kasheda-intro.jpg",
    description:
      "Kasheda by Kalras blends the Hindi 'क' and the English 'K' into a single monogram — a bilingual brand identity for Indian couture. From naming and strategy to packaging that unboxes like a gift, every touchpoint tells the story of Indian craft with a contemporary voice.",
    services: "Brand Naming, Brand Strategy, Logo Design, Brand Identity, Packaging Design",
    industry: "Fashion & Apparel",
    year: "2026",
  },
  {
    slug: "the-gem-house",
    title: "the gem house",
    tagline: "Crafting stories in stones",
    hero: "/assets/projects/gem-house-hero.jpg",
    intro: "/assets/projects/gem-house-intro.jpg",
    description:
      "A bespoke fine-jewellery house deserved an identity as precious as its pieces. We refreshed the brand with a faceted gem mark, a deep emerald-and-gold palette, and stationery, catalogues and retail collateral that feel like heirlooms.",
    services: "Brand Strategy, Logo Design, Brand Refresh, Brand Guidelines",
    industry: "Fine Jewellery",
    year: "2026",
  },
  {
    slug: "dosed",
    title: "dosed",
    tagline: "Gives you more than wings",
    hero: "/assets/projects/dosed-hero.jpg",
    intro: "/assets/projects/dosed-intro.jpg",
    description:
      "A premium energy brand with a pill-shaped wordmark, a mirrored 'D' and a cast of retro fruit mascots. Sharp, slanted type reflects motion and energy across sachets, bottles and merch — healthy AF, mom approved.",
    services: "Brand Strategy, Logo Design, Tagline, Iconography, Mascot Design, Packaging Design",
    industry: "Energy & Beverages",
    year: "2026",
  },
  {
    slug: "elora-living",
    title: "elora living",
    tagline: "For spaces that breathe",
    hero: "/assets/projects/elora-hero.jpg",
    intro: "/assets/projects/elora-intro.jpg",
    description:
      "Elora Living makes planters and decor for slow, intentional homes. We named the brand, drew its line-art world of vessels, and rolled the identity across tags, packaging and a social presence that brings the outdoors in.",
    services: "Brand Naming, Tagline, Logo Design, Brand Identity, Packaging Design, Social Media",
    industry: "Home & Living",
    year: "2026",
  },
  {
    slug: "mahjong-room",
    title: "mahjong room",
    tagline: "For the love of lip-smacking Asian!",
    hero: "/assets/projects/mahjong-hero.jpg",
    intro: "/assets/projects/mahjong-intro.jpg",
    description:
      "Takeaway that plays like a game: Mahjong Room's packaging turns every box and bag into a tile from the table — noodle bowls, dumplings and chopsticks arranged in a grid that smells like lip-smacking Asian in here.",
    services: "Packaging Design, Print Design, Print Files",
    industry: "Food & Beverage",
    year: "2026",
  },
  {
    slug: "jrsy",
    title: "jrsy",
    tagline: "Built to ball, designed to chill",
    hero: "/assets/projects/jrsy-hero.jpg",
    intro: "/assets/projects/jrsy-intro.jpg",
    description:
      "JRSY is conscious athleisure with varsity heart — literally: a pixel heart you wear on your jersey. Strategy, verbal identity, packaging tapes, MVP club stickers and AI-assisted imagery built a brand that's not your avg jersey.",
    services: "Brand Strategy, Logo Design, Brand Identity, Verbal Identity, Packaging Design, AI Imagery",
    industry: "Apparel & Athleisure",
    year: "2026",
  },
];
