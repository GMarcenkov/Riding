import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MobileApp from './mobile/mobileApp';
import reportWebVitals from './reportWebVitals';
import {isMobile} from 'react-device-detect';
import DesktopApp from "./desktop/desktopApp";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.render(
  <React.StrictMode>
      {
          isMobile? <MobileApp />:<DesktopApp/>
      }
    <MessengerCustomerChat
        pageId="105901171196264"
        appId="2757958997788792"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
