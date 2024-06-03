export function RegistrationInput({ type, label, name }) {
  function leaveInputHandler(e) {
    if (!e.currentTarget.value) {
      e.currentTarget.previousSibling.classList.remove(
        "registration_label--up"
      );
    }
  }
  function clickInputHandler(e) {
    e.currentTarget.previousSibling.classList.add("registration_label--up");
  }
  return (
    <>
      <label className="registration_label" htmlFor={`registration_${type}`}>
        {label}
      </label>
      <input
        onBlur={leaveInputHandler}
        onClick={clickInputHandler}
        className="registration_input"
        id={`registration_${type}`}
        type={type}
        name={name}
        required
      />
    </>
  );
}
