import { Link } from "react-router-dom";
import icon from "../assets/under-construction.svg";
import { useTranslation } from "react-i18next";

export function UnderConstruction() {
  const { t } = useTranslation();
  return (
    <div className="under_wrapper">
      <img className="under_img" src={icon} alt={t("under construction")} />
      <div className="under_txt">
        <p>{t("construction")}</p>
        <Link className="btn-primary" to="/">
          {t("Go Back Home")}
        </Link>
      </div>
    </div>
  );
}
