import "../../assets/stylesheets/login.css"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "./action";


export default function Login() {
  const navigate = useNavigate();
  const [incorect, setincorect] = useState(false);
  const [fullname, setfullname] = useState("");
  const onLogin = async (e) => {
    let req = {
      fullname,
    };

    const user = await getUserLogin(req)
    if (user) {
      navigate("/chat");
    } else setincorect(true);
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div class="form-signin w-100 m-auto">
        {/* <form action="index.php?page=admin&controller=login&action=check" method="POST"> */}
          {/* <img class="mb-4 border rounded-circle p-1" src="assets\images\team_logo.png" alt="" width="72" height="72" /> */}
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div class="form-floating">
            <input type="username" class="form-control" id="username" name="username" placeholder="Username" onChange={(event) => setfullname(event.target.value)} required />
            <label for="floatingInput">Username</label>
          </div>
          {incorect &&
            <div class="alert alert-danger d-flex align-items-center" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            <div>
            Please correct the username
          </div>
        </div>}
          {incorect || <></>}
          {/* <div class="form-floating">
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div> */}

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={onLogin}>Sign in</button>

          <div class="checkbox my-3">
            <p class="text-muted">Sign up if you are new..</p>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => navigate("/register")}>Sign up</button>

        {/* </form> */}
      </div>
    </div>
  </div>
  );
}
