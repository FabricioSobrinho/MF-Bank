// import hooks
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    sur_name: "",
    acc_number: "",
    cep: "",
    cpf: "",
    date_birth: "",
    email: "",
    phone_number: "",
    uf: "",
    uid: "",
  });

  const setUserData = (userData) => {
    setUser({
      ...user,
      ...userData,
    });
  };

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
