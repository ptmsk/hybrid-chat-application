import '../../css/main.css';
import '../../css/util.css';

import React from 'react';
import { Row, Col, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

export default function Login() {


  return (
    <div className='limiter'>
        <Row justify="center" style={{ heigh: 800}}>
            <Col className='login100-form validate-form' span={8}>
                <Title className='login100-form-title p-b-43'>Hybrid Chat Demo</Title>
                <div className='container-login100-form-btn'>
                    <button type='button' className='login-with-google-btn' id='quickstart-sign-in'>
                        Sign in with Google
                    </button>
                </div>

                <div className="text-center p-t-46 p-b-20">
                    <span className="txt1">
						Sign in
					</span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input name="email" className="input100" type="text" id="peer" />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Email</span>
                </div>




                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" id="search" onclick="clicked()">
						Login
					</button>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}
