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
      fullname: newusername,
    };

    const user = await postNewUser(req);
    if (user) navigate('/');
  };
  return (
    // <div className="limiter">
    //   <Row justify="center" style={{ heigh: 800 }}>
    //     <Col className="login100-form validate-form" span={8}>
    //       <Title className="login100-form-title p-b-43">Hybrid Chat Demo</Title>
    //       <div className="text-center p-t-46 p-b-20">
    //         <h1>Sign up</h1>
    //       </div>

    //       <div
    //         className="wrap-input100 validate-input"
    //         data-validate="Valid email is required: ex@abc.xyz"
    //       >
    //         <input
    //           name="email"
    //           className="input100"
    //           type="text"
    //           id="peer"
    //           onChange={(event) => setnewusername(event.target.value)}
    //         />
    //         <span className="focus-input100"></span>
    //         <span className="label-input100">Username</span>
    //       </div>

    //       <div className="container-login100-form-btn">
    //         <button
    //           className="login100-form-btn"
    //           onClick={onRegister}
    //           id="search"
    //         >
    //           Sign up
    //         </button>
    //       </div>

    //       <div>
    //         <span className="txt1">Go back to login</span>
    //       </div>

    //       <button
    //         className="login100-form-btn"
    //         onClick={() => navigate("/")}
    //         id="search"
    //       >
    //         Turn back
    //       </button>
    //     </Col>
    //   </Row>
    // </div>

    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div class="form-signin w-100 m-auto">
          <h1 class="h3 mb-3 fw-normal">Sign up</h1>

          <div class="form-floating">
            <input type="username" class="form-control" id="username" name="username" placeholder="Username" onChange={(event) => setnewusername(event.target.value)} required />
            <label for="floatingInput">Username</label>
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
