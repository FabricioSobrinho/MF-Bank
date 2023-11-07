// import hooks

import Cookies from "js-cookie";
import axios from "axios";

export const GetBalance = async (accessToken, client, uid, setBalance) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "access-token": accessToken,
      client: client,
      uid: uid,
    },
  };

  try {
    const response = await axios.get("http://localhost:3000/balances", config);

    let accessTokenHeader = response.headers["access-token"];

    if (accessTokenHeader !== "") {
      Cookies.set("accessToken", accessTokenHeader, { expires: 1 });
    }

    setBalance(response.data.balance);

    return true;
  } catch (error) {
    console.log(
      "Houve um erro ao encontrar o saldo atual do usuário: " + error
    );
  }
};
