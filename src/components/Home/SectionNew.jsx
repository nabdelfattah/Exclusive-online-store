import { Link } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
export function SectionNew() {
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
      <HomeHeader subheading="Featured" heading="New Arrival"></HomeHeader>
      <div className="newPdt_grid">
        {newPdts.map((obj) => {
          return (
            <div className="newPdt" key={JSON.stringify(obj)}>
              <div className="newPdt_textWrapper">
                <h3 className="title">{obj.title}</h3>
                <p className="description">{obj.description}</p>
                <Link to="products" className="shopNowLink">
                  Shop Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
