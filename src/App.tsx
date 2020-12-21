import React from "react";
import AuthContext from "./context/AuthContext";

//import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthContext.Provider value={{ name: "Luiz" }}>
      <SignIn />
    </AuthContext.Provider>
  </>
);

export default App;
