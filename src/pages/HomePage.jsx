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

export function HomePage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page
  }, []);

  // Hide the up button and show it when user beneath hero section
  const [isHidden, setIsHidden] = useState(false);
  const heroRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isHidden based on whether the hero section is intersecting
        setIsHidden(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    // Cleanup
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="HomePage">
      <div ref={heroRef}>
        <SectionHero />
      </div>
      <SectionSale />
      <SectionCategories />
      <SectionBestSelling />
      <Advertisement />
      <SectionExplore />
      <SectionNew />
      <Features />
      {isHidden ? "" : <UpButton />}
    </div>
  );
}
