import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const email = useRef();
  const password = useRef();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    const emailIsInValid = !emailVal.includes("@");
    const passwordIsInValid = passwordVal.length <= 5;

    if (emailIsInValid) {
      setEmailError(true);
      return;
    }

    if (passwordIsInValid) {
      setPasswordError(true);
      return;
    }

    console.log(emailVal, passwordVal);

    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    ref={email}
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  {emailError && (
                    <div className="invalid-feedback d-block">
                      Geçerli email giriniz
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    ref={password}
                    name="password"
                    id="password"
                    className="form-control"
                  />
                  {passwordError && (
                    <div className="invalid-feedback d-block">
                      Min. 5 karakter giriniz
                    </div>
                  )}
                </div>
                <button className={`btn btn-outline-${btnColor}`}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
