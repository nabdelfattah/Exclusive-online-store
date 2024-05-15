export function UpButton() {
  function scrollHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button aria-label="up" className="btn-arr btn-up" onClick={scrollHandler}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20V4M5 11L12 4L19 11"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
