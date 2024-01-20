// npm i react react-dom
// npm i webpack webpack-cli
// npm i ts-loader
// npm i axios

import { createRoot } from "react-dom/client";

import App from "./components/app";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App initialData={{ contests: [] }} />);
