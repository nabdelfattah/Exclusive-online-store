export function HomeHeader({ subheading, heading, children }) {
  return (
    <header>
      <span className="home_subHeading">{subheading}</span>
      <div className="heading_btns_wrapper">
        <h2 className="home_heading">{heading}</h2>
        {children}
      </div>
    </header>
  );
}
