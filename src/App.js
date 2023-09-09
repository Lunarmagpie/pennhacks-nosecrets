import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

let clientId = "134654918207-veaujugouh4eu69pos4bruduecdegtk5.apps.googleusercontent.com"

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          fetch("/api/login", {
            method: 'POST',
            body: JSON.stringify({
              credential: credentialResponse.credential,
              client_id: credentialResponse.clientId,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
          })
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>

  );
}

export default App;
