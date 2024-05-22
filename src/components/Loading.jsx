import { useTranslation } from "react-i18next";

export function Loading() {
  const { t } = useTranslation();
  return (
    <div className="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        id="loading"
      >
        <circle
          cx="17.8"
          cy="6.2"
          r="2"
          fill="#db4444"
          fillOpacity=".9"
        ></circle>
        <circle cx="12" cy="4" r="2" fill="#db4444" fillOpacity=".8"></circle>
        <circle
          cx="6.2"
          cy="6.2"
          r="2"
          fill="#db4444"
          fillOpacity=".7"
        ></circle>
        <circle cx="4" cy="12" r="2" fill="#db4444" fillOpacity=".6"></circle>
        <circle
          cx="6.2"
          cy="17.6"
          r="2"
          fill="#db4444"
          fillOpacity=".5"
        ></circle>
        <circle cx="12" cy="20" r="2" fill="#db4444" fillOpacity=".4"></circle>
        <circle
          cx="17.8"
          cy="17.6"
          r="2"
          fill="#db4444"
          fillOpacity=".3"
        ></circle>
        <circle cx="20" cy="12" r="2" fill="#db4444" fillOpacity=".2"></circle>
      </svg>
      <p>{t("Loading")}</p>
    </div>
  );
}
