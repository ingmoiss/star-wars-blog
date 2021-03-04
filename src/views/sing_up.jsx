import React from "react";
import { Link } from "react-router-dom";

export function SingUp() {
  return (
    <div className="container alto mt-3">
      <div className="row">
        <div className="col-md">
          <h1 className="font text-center mb-0 mt-3">Sign Up</h1>
        </div>
      </div>
      <hr />
      <div className="text-center d-flex justify-content-center align-items-center ">
        <form className="rounded shadow px-2" style={{ width: "400px" }}>
          <div className="form-row my-2">
            <div className="col-md ">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="First name"
                required
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-md">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-md">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="User"
                required
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-md">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="form-row my-2">
            <div className="col-md">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="submit-row my-2">
            <button type="submit" class="btn btn-primary btn-block mb-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="row mt-3">
        <div className="col-md">
          <p className="text-center">
            Already have an account? <Link to="/log_in/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
