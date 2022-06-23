import React from "react";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-4">
          <div className="card bx">
            <div className="card-body">
              <div className="card-title">
                <h4>Login</h4>
                <p className="card-text small text-muted">
                  Login with your username &amp; password
                </p>
                <form action="" method="">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="uname"
                      className="form-control form-control-sm"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="pwd"
                      className="form-control form-control-sm"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      name="signin"
                      className="btn btn-block btn-sm btn-success"
                      value="Sign in"
                    />
                  </div>
                </form>
                <div className="justify-content-center">
                  <p className="card-text align-center small text-muted">
                    Don't Have Any Account
                  </p>

                  <div className="mb-3">
                   <NavLink className="btn btn-block btn-sm btn-success m-1" to='/Signup'>Creat New Account</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
