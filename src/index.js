import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//TODO 1 enter your key from geocode here
export const GEOCODE_API_KEY="66c5f2f159612039740136ufk8154df";

//TODO 2 enter your function app url here
export const FUNCTION_APP_URL="https://fa-cloud-user14.azurewebsites.net/api/getHospitalsList?code=+";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
