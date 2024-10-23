import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    if (!email || !password) {
      setInvalid(true);
    } else {
      setInvalid(false);
      // Do something with the valid inputs
    }
  };

  return (
    <div className="auth">
      <div className="row">
        <div className="logo col align-middle w-100 p-5">
          <div className=" d-flex flex-column justify-content-center w-70 align-items-center">
            <img
              src={require("../assets/images/logo.png")}
              alt="logo"
              className="logo-img"
            />
          </div>

          <div className="m-5 d-flex justify-content-center align-items-center title">
            <h2 className="m-1 aipowered">AI Powered </h2>
            <h2 className="m-1 retailsolutions">Retail Solutions</h2>
          </div>
        </div>

        <div
          className="login col d-flex flex-column  p-5 justify-content-center mb-5"
          style={{ height: "100vp" }}
        >
          <h3 className="login-header">Login</h3>

          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-5 form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="form-label"
                style={{ top: "-1.2rem" }}
              >
                Email address
              </label>
            </div>
            <div className="mb-5 form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="form-label"
                style={{ top: "-1.2rem" }}
              >
                Password
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100 btn-primary" >
              Sign In
            </button>
            {invalid && (
              <div className="invalid-feedback d-block">
                Please enter a valid email and password.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
