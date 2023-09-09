import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Main2 from "./Main2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main2 />} />
          <Route path="/profile" element={<Main2 />} />
          {/* <Route path="/test" element={<Main2 />} /> */}
        </Routes>
      </Router>
    </>
    // <GoogleOAuthProvider clientId={clientId}>
    //   <GoogleLogin
    //     onSuccess={credentialResponse => {
    //       fetch("/api/login", {
    //         method: 'POST',
    //         body: JSON.stringify({
    //           credential: credentialResponse.credential,
    //           client_id: credentialResponse.clientId,
    //         }),
    //         headers: {
    //           "Content-type": "application/json; charset=UTF-8"
    //         },
    //       })
    //     }}
    //     onError={() => {
    //       console.log('Login Failed');
    //     }}
    //   />
    // </GoogleOAuthProvider>
  );
}

export default App;
