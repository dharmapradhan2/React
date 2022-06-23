import React from "react";
import { NavLink } from "react-router-dom";
function Signup() {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            Create An Account
          </h5>
        </div>
        <div className="modal-body">
          <form action="" method="">
            <div className="mb-3">
              <input
                type="text"
                name="uname"
                className="form-control form-control-sm"
                placeholder="username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="upwd"
                className="form-control form-control-sm"
                placeholder="enter password"
                required
              />
            </div>
            <div className="mb-3">
              <button
                type="submit"
                name="save"
                className="btn btn-sm btn-success btn-block"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="justify-content-center">
            <p className="card-text align-center small">
              Already Have An Account
              <NavLink className="btn btn-block btn-sm btn-success m-1" to="/">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
