import "../../css/main.css";
import "../../css/util.css";

import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "./action";

const { Title } = Typography;

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
    <div className="limiter">
      <Row justify="center" style={{ heigh: 800 }}>
        <Col className="login100-form validate-form" span={8}>
          <Title className="login100-form-title p-b-43">Hybrid Chat Demo</Title>
          <div className="text-center p-t-46 p-b-20">
            <h1>Sign in</h1>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              name="email"
              className="input100"
              type="text"
              id="peer"
              onChange={(event) => setfullname(event.target.value)}
            />
            <span className="focus-input100"></span>
            <span className="label-input100">Username</span>
          </div>
          {incorect && <h3>Wrong infomation</h3>}
          {incorect || <></>}

          <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={onLogin} id="search">
              Login
            </button>
          </div>
          <div>
            <span className="txt1">Create account...</span>
          </div>
          <div className="container-login100-form-btn">
            <button
              className="login100-form-btn"
              onClick={() => navigate("/signup")}
              id="search"
            >
              Sign up
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
