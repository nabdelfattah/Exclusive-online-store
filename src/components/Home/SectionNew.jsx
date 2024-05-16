import { Link } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
import { useTranslation } from "react-i18next";

export function SectionNew() {
  const { t } = useTranslation();
  const newPdts = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
    },
    {
      title: "Women’s Collections",
      description: "Featured woman collections that give you another vibe.",
    },
    { title: "Speakers", description: "Amazon wireless speakers" },
    { title: "Perfume", description: "GUCCI INTENSE OUD EDP" },
  ];
  return (
    <section className="section-newPdt container mb-14">
      <HomeHeader
        subheading={t("Featured")}
        heading={t("New Arrival")}
      ></HomeHeader>
      <div className="newPdt_grid">
        {newPdts.map((obj) => {
          return (
            <div className="newPdt" key={JSON.stringify(obj)}>
              <div className="newPdt_textWrapper">
                <h3 className="title">{t(obj.title)}</h3>
                <p className="description">{t(obj.description)}</p>
                <Link to="products" className="shopNowLink">
                  {t("Shop Now")}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
