import { Link } from "react-router-dom";
import { Breadcrumb } from "../components";
import { useTranslation } from "react-i18next";

export function ErrorPage() {
  const { t } = useTranslation();
  const chain = [
    { route: "/", text: "Home" },
    { route: "error", text: "404 Error" },
  ];
  return (
    <>
      <Breadcrumb chain={chain} />
      <div className="error_wrapper">
        <h1 className="error_heading">{t("404 Not Found")}</h1>
        <p className="error_description">
          {t("Your visited page not found. You may go home page")}.
        </p>
        <Link className="btn-primary" to="/">
          {t("Back to home page")}
        </Link>
      </div>
    </>
  );
}
