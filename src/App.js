import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Main2 from './Main2';

let clientId = "134654918207-veaujugouh4eu69pos4bruduecdegtk5.apps.googleusercontent.com"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Main2/>} />
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
