import React, { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";

const App = (props) => {
  const authContext = useContext(AuthContext);
  if (!authContext.isAuth) {
    return <Auth />;
  }
  return <Ingredients />;
};

export default App;
