// import dependencies
import axios from "axios";
import Cookies from "js-cookie";

export const validateToken = async (accessToken, client, uid, setUserData) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "access-token": accessToken,
      client: client,
      uid: uid,
    },
  };

  try {
    const response = await axios.get(
      "http://localhost:3000/auth/validate_token",
      config
    );

    setUserData(response.data.data);

    let accessTokenHeader = response.headers["access-token"];

    if (accessTokenHeader !== "") {
      Cookies.set("accessToken", accessTokenHeader, { expires: 1 });
    }

    return true;
  } catch (error) {
    console.log("Ocorreu um erro de validação: " + error);
  }
};
