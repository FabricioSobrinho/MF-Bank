import axios from "axios";
import Cookies from "js-cookie";

export const ValidatePassword = async (accessToken, client, uid, password) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "access-token": accessToken,
      client: client,
      uid: uid,
    },
  };

  const data = {
    password: password,
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/password_validations/create",
      data,
      config
    );
    let accessTokenHeader = response.headers["access-token"];

    if (accessTokenHeader !== "") {
      Cookies.set("accessToken", accessTokenHeader, { expires: 1 });
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
