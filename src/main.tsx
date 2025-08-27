
import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <MainRoutes />
        </Router>
    </React.StrictMode>
);
