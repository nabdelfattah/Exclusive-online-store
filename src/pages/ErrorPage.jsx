import { Link } from "react-router-dom";
import { Breadcrumb } from "../components";

export function ErrorPage() {
  const chain = [
    { route: "/", text: "Home" },
    { route: "error", text: "404 Error" },
  ];
  return (
    <>
      <Breadcrumb chain={chain} />
      <div className="error_wrapper">
        <h1 className="error_heading">404 Not Found</h1>
        <p className="error_description">
          Your visited page not found. You may go home page.
        </p>
        <Link className="btn-primary" to="/">
          Back to home page
        </Link>
      </div>
    </>
  );
}
