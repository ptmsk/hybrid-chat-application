import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "./action";

const { Title } = Typography;

export default function Signup() {
  const navigate = useNavigate();
  const [newusername, setnewusername] = useState("");
  const [password, setpassword] = useState("");

  const onRegister = async () => {
    let req = {
      fullname: newusername,
      password: password,
    };

    const user = await postNewUser(req);
    if (user) navigate('/');
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div class="form-signin w-100 m-auto">
          <h1 class="h3 mb-3 fw-normal">Sign up</h1>
          <div class="form-floating">
            <input type="username" class="form-control" id="username" name="username" placeholder="Username" onChange={(event) => setnewusername(event.target.value)} required />
            <label for="floatingInput">Username</label>
          </div>

          <div class="form-floating">
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange={(event) => setpassword(event.target.value)} required />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={onRegister}>Sign up</button>

          <div class="checkbox my-3">
            <p class="text-muted">Go back to login</p>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => navigate("/")}>Turn back</button>

        </div>
      </div>
    </div>
  );
}
