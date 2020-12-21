import React from "react";
import { AuthProvider } from "./context/AuthContext";

//import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
