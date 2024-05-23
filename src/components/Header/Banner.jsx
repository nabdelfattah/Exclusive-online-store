import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Banner() {
  const { i18n, t } = useTranslation();
  function selectHandler(e) {
    const selectedLang = e.target.value;
    let lng;
    switch (selectedLang) {
      case "spanish":
        lng = "sp";
        break;
      case "french":
        lng = "fr";
        break;
      default:
        lng = "en";
    }
    i18n.changeLanguage(lng);
  }
  return (
    <div className="banner">
      <div className="container">
        <p>
          {t("bannerText")}
          <Link to="/products" className="banner_link">
            {t("bannerLink")}
          </Link>
        </p>
        <label className="banner_select" aria-label="Choose a country">
          <select id="country" defaultValue="english" onChange={selectHandler}>
            <option value="english" title="English">
              English
            </option>
            <option value="spanish" title="Española">
              española
            </option>
            <option value="french" title="Française">
              Française
            </option>
          </select>
        </label>
      </div>
    </div>
  );
}
