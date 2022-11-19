import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "./action";

const { Title } = Typography;

export default function Signup() {
  const navigate = useNavigate();
  const [newusername, setnewusername] = useState("");

  const onRegister = async () => {
    let req = {
      newusername,
    };

    const user = await postNewUser(req);
    if (user) navigate("/chat/" + user.fullname);
    else setnewusername(true);
  };
  return (
    <div className="limiter">
      <Row justify="center" style={{ heigh: 800 }}>
        <Col className="login100-form validate-form" span={8}>
          <Title className="login100-form-title p-b-43">Hybrid Chat Demo</Title>
          <div className="text-center p-t-46 p-b-20">
            <h1>Sign up</h1>
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
              onChange={(event) => setnewusername(event.target.value)}
            />
            <span className="focus-input100"></span>
            <span className="label-input100">Username</span>
          </div>

          <div className="container-login100-form-btn">
            <button
              className="login100-form-btn"
              onClick={onRegister}
              id="search"
            >
              Sign up
            </button>
          </div>

          <div>
            <span className="txt1">Go back to login</span>
          </div>

          <button
            className="login100-form-btn"
            onClick={() => navigate("/")}
            id="search"
          >
            Turn back
          </button>
        </Col>
      </Row>
    </div>
  );
}
