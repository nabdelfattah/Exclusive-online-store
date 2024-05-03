import {
  Advertisement,
  Features,
  SectionBestSelling,
  SectionCategories,
  SectionExplore,
  SectionNew,
  SectionSale,
} from "../components";

export function HomePage() {
  return (
    <>
      <section className="home_hero"></section>
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
