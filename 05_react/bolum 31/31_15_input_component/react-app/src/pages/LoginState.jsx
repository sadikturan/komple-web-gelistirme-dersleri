import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Input from "../components/Input";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const cardColor = theme === "dark" ? "text-bg-dark" : "text-bg-light";
  const btnColor = theme === "dark" ? "light" : "dark";

  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);

  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  const emailIsInValid = isEdited.email && !values.email.includes("@");
  const passwordIsInvalid = isEdited.password && values.password.length < 5;

  function handleInputblur(e) {
    const name = e.target.name;

    setIsEdited((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    setIsEdited((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!values.email.includes("@") || values.password.length < 5) {
      return;
    }
    console.log(values);
  }

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-7 mx-auto">
          <div className={`card border ${cardColor}`}>
            <div className="card-header">
              <h1 className="h4 mb-0">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <Input
                  id="email"
                  name="email"
                  labelText="Email"
                  error={emailIsInValid && "Geçerli email giriniz"}
                  type="email"
                  value={values.email}
                  onChange={handleInputChange}
                  onBlur={handleInputblur}
                />

                <Input
                  id="password"
                  name="password"
                  labelText="Password"
                  error={passwordIsInvalid && "Min. 5 karakter giriniz"}
                  type="password"
                  value={values.password}
                  onChange={handleInputChange}
                  onBlur={handleInputblur}
                />

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
