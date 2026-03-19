import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider
      domain="dev-lkarihykn50o4qgj.us.auth0.com"
      clientId="LrxUXGnVyXi96Cy5XxkoMu0NdXikKYOp"
      authorizationParams={{ redirect_uri: window.location.origin }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Auth0Provider>
);


reportWebVitals();
