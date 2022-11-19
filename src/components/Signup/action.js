import axios from "axios"

export const postNewUser = async request => {
    const respond = (await axios.post("http://localhost:4000/user/register", request)).data;
    if (respond.user) {
      localStorage.setItem("user", respond.user.fullname);
    }
    return respond.user;
  };
  