import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">LogIn</h5>
        </div>
        <div className="modal-body">
          <form action="" method="">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control form-control-sm"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-block btn-sm btn-success"
                value="Sign in"
              />
            </div>
          </form>
          <div className="justify-content-center">
            <p className="card-text align-center small">
              Don't Have Any Account
            </p>

            <div className="mb-3">
              <NavLink
                className="btn btn-block btn-sm btn-success m-1"
                to="/Signup"
              >
                Creat New Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
