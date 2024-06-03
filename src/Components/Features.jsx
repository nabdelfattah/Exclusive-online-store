import feature1 from "../assets/icons/feature1.svg";
import feature2 from "../assets/icons/feature2.svg";
import feature3 from "../assets/icons/feature3.svg";
import { useTranslation } from "react-i18next";

export function Features() {
  const { t } = useTranslation();
  return (
    <ul className="features container mb-14">
      <li className="feature">
        <img src={feature1} alt={t("truck icon")} />
        <p className="feature_title">{t("FREE AND FAST DELIVERY")}</p>
        <p className="featrue_description">
          {t("Free delivery for all orders over $140")}
        </p>
      </li>
      <li className="feature">
        <img src={feature2} alt={t("head phone")} />
        <p className="feature_title">{t("24/7 CUSTOMER SERVICE")}</p>
        <p className="featrue_description">
          {t("Friendly 24/7 customer support")}
        </p>
      </li>
      <li className="feature">
        <img src={feature3} alt={t("guarantee icon")} />
        <p className="feature_title">{t("MONEY BACK GUARANTEE")}</p>
        <p className="featrue_description">
          {t("We reurn money within 30 days")}
        </p>
      </li>
    </ul>
  );
}
