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
    balance: 0,
  });

  const setUserData = (userData) => {
    setUser({
      ...user,
      ...userData,
    });
  };

  const setBalance = (balance) => {
    setUser((prevUser) => {
      return { ...prevUser, balance: balance };
    });
  };

  return (
    <UserContext.Provider value={{ user, setUserData, setBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
