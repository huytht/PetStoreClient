import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./components/redux/store"
import {Provider} from "react-redux";
import "./index.css"
import setup from "./components/redux/Actions/Interceptor";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById("root")
);
setup(store);