import React from 'react';
import ReactDOM from 'react-dom';
import VideoContextProvider from './Component/API/ContextApi';
import "./index.css"
import App from './App';



ReactDOM.render(
  <VideoContextProvider>
    <App />
  </VideoContextProvider>,
  document.getElementById("root")
);
