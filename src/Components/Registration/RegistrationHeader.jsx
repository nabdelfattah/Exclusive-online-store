import { useTranslation } from "react-i18next";
export function RegistrationHeader({ heading, errMsg }) {
  const { t } = useTranslation();
  return (
    <header className="registration_header">
      <h2>{heading}</h2>
      {errMsg ? (
        <p className="registration_errMsg">{t(errMsg)}</p>
      ) : (
        <p>{t("Enter your details below")}</p>
      )}
    </header>
  );
}
