import { Link } from "react-router-dom";
import adsImg from "../../assets/icons/lg/hero2.svg";
import smAds from "../../assets/icons/lg/small-screen/sm-category.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Advertisement() {
  const { t } = useTranslation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 704); // Adjust the threshold as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial render
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="advertisement container mb-7">
      <img src={isSmallScreen ? smAds : adsImg} alt={`a ${t("banner")}`} />
      <Link to="/products" className="btn-primary">
        {t("Buy Now!")}
      </Link>
    </section>
  );
}
