import { useContext, useEffect, useRef, useState } from "react";
import {
  Advertisement,
  Features,
  SectionBestSelling,
  SectionCategories,
  SectionExplore,
  SectionHero,
  SectionNew,
  SectionSale,
  UpButton,
} from "../components";
import { useElementOnScreen } from "../hooks/useElementOnScreen ";

export function HomePage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page
  }, []);

  // Hide the up button and show it when user beneath hero section
  const [isVisible, observedElRef] = useElementOnScreen({ threshold: 0.5 });

  return (
    <div className="HomePage">
      <div ref={observedElRef}>
        <SectionHero />
      </div>
      <SectionSale />
      <SectionCategories />
      <SectionBestSelling />
      <Advertisement />
      <SectionExplore />
      <SectionNew />
      <Features />
      {isVisible ? "" : <UpButton />}
    </div>
  );
}
