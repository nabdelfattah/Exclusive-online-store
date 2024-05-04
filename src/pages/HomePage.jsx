import {
  Advertisement,
  Features,
  SectionBestSelling,
  SectionCategories,
  SectionExplore,
  SectionHero,
  SectionNew,
  SectionSale,
} from "../components";

export function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionSale />
      <SectionCategories />
      <SectionBestSelling />
      <Advertisement />
      <SectionExplore />
      <SectionNew />
      <Features />
    </>
  );
}
