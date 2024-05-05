export function RegistrationHeader({ heading, errMsg }) {
  return (
    <header className="registration_header">
      <h2>{heading}</h2>
      {errMsg ? (
        <p className="registration_errMsg">{errMsg}</p>
      ) : (
        <p>Enter your details below</p>
      )}
    </header>
  );
}
