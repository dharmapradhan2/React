import React ,{useState}from "react";
import "./Login.css";
import http from "../../APi/http";
import { NavLink } from "react-router-dom";
function Login() {
  const [msg, SetMsg] = useState("");
  function FormData(e) {
    e.preventDefault();
    let data = Array.from(e.target)
      .slice(0, -1)
      .reduce(
        (acc, val) => ({
          ...acc,
          [val.name]: val.value.trim(),
        }),
        {}
      );
      console.log(data);
    http.get(`show/${data.name}/${data.password}`).then((res) => {
      if(res.data.length>0){
        SetMsg('Login Sucessfully...');
      }
      else{
        SetMsg('invalid username & password...')
      }
    });
    // setTimeout(() => {
    //   document.getElementById('form').reset();
    //   SetMsg('');
    // }, 1000);
  }
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">LogIn</h5>
        </div>
        <input
            type={(msg)?'text':'hidden'}
            className="alert alert-primary m-1 p-1"
            role="alert"
            value={msg}
            readOnly
          />
        <div className="modal-body">
          <form name="form" id="form" onSubmit={(event) => FormData(event)}>
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
