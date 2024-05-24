import { useTranslation } from "react-i18next";

export function CartTotal({ subtotal, shipping, total }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="total">
        {t("Subtotal")}:{" "}
        <span>${Math.round((subtotal + Number.EPSILON) * 100) / 100}</span>
      </p>
      <p className="shipping">
        {t("Shipping")}: <span>{t(shipping)}</span>
      </p>
      <p className="total">
        {t("Total")}:{" "}
        <span>${Math.round((total + Number.EPSILON) * 100) / 100}</span>
      </p>
    </>
  );
}
