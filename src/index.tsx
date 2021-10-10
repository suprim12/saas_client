import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./core/store";
import "./styles/main.scss";
import "./styles/antd/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
