import React from "react";
import { Link } from "react-router-dom";

export function LogIn() {
  return (
    <div className="container alto mt-3">
      <div className="row">
        <div className="col-md">
          <h1 className="font text-center mb-0 mt-3">Log in</h1>
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
                placeholder="User name"
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
          <div className="submit-row my-2 d-flex justify-content-end">
            <button type="submit" class="btn btn-primary mr-1">
              Log In
            </button>
            <button type="reset" class="btn btn-danger ml-1">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="row mt-3">
        <div className="col-md">
          <p className="text-center">
            Don't have an account? <Link to="/sign_up/">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
