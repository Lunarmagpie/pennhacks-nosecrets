import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Main2 from "./Main2";
import Menubar from "./components/menubar";
import Main from "./components/main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Menubar />
                <Main />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Menubar />
                "HELLO EVEYRNYAN"
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
