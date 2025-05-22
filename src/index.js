import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Pagrindinis_d/Pagrindinis_d.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);