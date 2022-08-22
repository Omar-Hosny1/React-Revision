import React, { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import A from "./A";

const App = (props) => {
  // const authContext = useContext(AuthContext);
  // if (!authContext.isAuth) {
  //   return <Auth />;
  // }
  // return <Ingredients />;

  const obj = { omar: "das", sd: "w" };
  return <>{/* <A data={obj}></A> */}</>;
};

export default App;
