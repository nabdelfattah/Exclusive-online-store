import { useTranslation } from "react-i18next";
export function Coupon() {
  const { t } = useTranslation();
  return (
    <div className="coupon_wrapper">
      <input type="text" name="coupon" placeholder={t("Coupon Code")} />
      <button type="button" className="btn-primary" aria-label="apply-coupon">
        {t("Apply Coupon")}
      </button>
    </div>
  );
}
