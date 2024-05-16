import { useTranslation } from "react-i18next";

export function CartTotal({ subtotal, shipping, total }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="total">
        {t("Subtotal")}: <span>${subtotal}</span>
      </p>
      <p className="shipping">
        {t("Shipping")}: <span>{t(shipping)}</span>
      </p>
      <p className="total">
        {t("Total")}: <span>${total}</span>
      </p>
    </>
  );
}
