import React from "react";
import { AuthProvider } from "./hooks/AuthContext";
import ToastContainer from "./components/ToastContainer";

//import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
