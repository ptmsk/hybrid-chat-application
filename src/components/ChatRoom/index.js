import "../../css/main.css";

import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";

export default function ChatRoom() {
  return (
    <div>
      <Row>
        <Col className="bg1" span={6}>
          <Sidebar />
        </Col>
        <Col className="bg7" span={18}>
          <Chatbox />
        </Col>
      </Row>
    </div>
  );
}
