import "../../assets/stylesheets/chatroom.css"

import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChatRoom({ handleLogout }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
        localStorage.clear();
    };
  return (
    <div class="container">

        {/* <!-- Page header start --> */}
        <div class="page-title">
            <div class="row gutters">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h5 class="title">Chat Room of THNH</h5>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
            </div>
        </div>

        
        {/* <!-- Page header end --> */}

        {/* <!-- Content wrapper start --> */}
        <div class="content-wrapper">

            {/* <!-- Row start --> */}
            <div class="row gutters">

                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                    <div class="card m-0">

                        {/* <!-- Row start --> */}
                        <div class="row no-gutters">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                <div class="users-container">
                                    <div>
                                        <div class="btn-group btn-group-sm" role="group">
                                            <button type="button" class="btn btn-outline-success">Add friend</button>
                                            <button type="button" class="btn btn-outline-danger" onClick={handleClick}>Log out</button>
                                        </div>
                                    </div>
                                    <ul class="users">
                                        <li class="person" data-chat="person1">
                                            <div class="user">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Retail Admin" />
                                            </div>
                                            <p class="name-time">
                                                <span class="name">Steve Bangalter</span>
                                            </p>
                                        </li>
                                        <li class="person active-user" data-chat="person2">
                                            <div class="user">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Retail Admin" />
                                            </div>
                                            <p class="name-time">
                                                <span class="name">Peter Gregor</span>
                                            </p>
                                        </li>
                                        <li class="person" data-chat="person3">
                                            <div class="user">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                            </div>
                                            <p class="name-time">
                                                <span class="name">Jessica Larson</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                <div class="selected-user">
                                    <span>To: <span class="name">Emily Russell</span></span>
                                </div>
                                <div class="chat-container">
                                    <ul class="chat-box chatContainerScroll">
                                        <li class="chat-left">
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div class="chat-name">Russell</div>
                                            </div>
                                            <div class="chat-text">Hello, I'm Russell.
                                                <br />How can I help you today?</div>
                                            <div class="chat-hour">08:55 <span class="fa fa-check-circle"></span></div>
                                        </li>
                                        <li class="chat-right">
                                            <div class="chat-hour">08:56 <span class="fa fa-check-circle"></span></div>
                                            <div class="chat-text">Hi, Russell
                                                <br /> I need more information about Developer Plan.</div>
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div class="chat-name">Sam</div>
                                            </div>
                                        </li>
                                        <li class="chat-left">
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div class="chat-name">Russell</div>
                                            </div>
                                            <div class="chat-text">Are we meeting today?
                                                <br />Project has been already finished and I have results to show you.</div>
                                            <div class="chat-hour">08:57 <span class="fa fa-check-circle"></span></div>
                                        </li>
                                        <li class="chat-right">
                                            <div class="chat-hour">08:59 <span class="fa fa-check-circle"></span></div>
                                            <div class="chat-text">Well I am not sure.
                                                <br />I have results to show you.</div>
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin" />
                                                <div class="chat-name">Joyse</div>
                                            </div>
                                        </li>
                                        <li class="chat-left">
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div class="chat-name">Russell</div>
                                            </div>
                                            <div class="chat-text">The rest of the team is not here yet.
                                                <br />Maybe in an hour or so?</div>
                                            <div class="chat-hour">08:57 <span class="fa fa-check-circle"></span></div>
                                        </li>
                                        <li class="chat-right">
                                            <div class="chat-hour">08:59 <span class="fa fa-check-circle"></span></div>
                                            <div class="chat-text">Have you faced any problems at the last phase of the project?</div>
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="Retail Admin" />
                                                <div class="chat-name">Jin</div>
                                            </div>
                                        </li>
                                        <li class="chat-left">
                                            <div class="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div class="chat-name">Russell</div>
                                            </div>
                                            <div class="chat-text">Actually everything was fine.
                                                <br />I'm very excited to show this to our team.</div>
                                            <div class="chat-hour">07:00 <span class="fa fa-check-circle"></span></div>
                                        </li>
                                    </ul>
                                    <div class="flex-grow-0 py-3 px-4 border-top">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Type your message" />
                                            <button className="btn btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                                </svg>
                                            </button>
                                            <button id="send" className="btn btn-primary">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Row end --> */}
                    </div>

                </div>

            </div>
            {/* <!-- Row end --> */}

        </div>
        {/* <!-- Content wrapper end --> */}

    </div>
  );
}
