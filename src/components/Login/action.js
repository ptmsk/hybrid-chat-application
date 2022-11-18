import axios from "axios"

export const getUserLogin = async request => {
    const respond = (await axios.post("http://localhost:4000/user/login", request)).data;
    if (respond.user) {
      localStorage.setItem("user", respond.user);
    }
    return respond.user;
  };
  