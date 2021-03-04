import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [user_name, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validating empty fields
    if (
      email === "" ||
      password === "" ||
      first_name === "" ||
      last_name === "" ||
      user_name === ""
    ) {
      alert("Please fill all the entries");
    }

    // Creating body
    const data = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      user_name: user_name,
    };

    //FETCH POST method
    fetch("https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/sign_up/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          response.text().then((text) => alert(text));
          throw Error(response.statusText);
        } else {
          setRedirect(true);
        }
        return response.json();
      })
      .then((data) => {
        console.log("New user was registered");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container alto mt-3">
      <div className="row">
        <div className="col-md">
          <h1 className="font text-center mb-0 mt-3">Sign Up</h1>
        </div>
      </div>
      <hr />
      <div className="text-center d-flex justify-content-center align-items-center ">
        <form
          className="rounded shadow px-2"
          style={{ width: "400px" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-row my-2">
            <div className="col-md ">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="First name"
                required
                onChange = {e => setFirst(e.target.value)}
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
                onChange = {e => setLast(e.target.value)}
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
                onChange = {e => setUser(e.target.value)}
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
                onChange = {e => setEmail(e.target.value)}
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
                onChange = {e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-row my-2 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary mr-1">
              Sign Up
            </button>
            <button type="reset" className="btn btn-danger ml-1">
              Cancel
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
      {redirect ? <Redirect to="/log_in"/> : ""}
    </div>
  );
}
