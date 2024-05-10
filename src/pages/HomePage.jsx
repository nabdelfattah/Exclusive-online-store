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
import { useFetch } from "../useFetch";

export function HomePage() {
  // Get the pdtsList and split its content through the sections
  const data = useFetch("https://dummyjson.com/products");

  const pdtsList20 = data.products.slice(0, 20);
  const first6Products = pdtsList20.slice(0, 6);
  const next4Products = pdtsList20.slice(6, 10);
  const next10Products = pdtsList20.slice(10);

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
      {data ? (
        <>
          <SectionSale products={first6Products} />
          <SectionCategories />
          <SectionBestSelling products={next4Products} />
          <Advertisement />
          <SectionExplore products={next10Products} />
        </>
      ) : (
        ""
      )}
      <SectionNew />
      <Features />
      {isHidden ? "" : <UpButton />}
    </div>
  );
}
