import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const loginHandler = () => setIsAuth(true);
  const logoutHandler = () => setIsAuth(false);
  return (
    <AuthContext.Provider
      value={{ login: loginHandler, isAuth, logout: logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
