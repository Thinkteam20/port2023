import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Test from "./components/test";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <NotFound />,
        children: [
            { index: true, path: "/", element: <Home /> },
            { index: true, path: "/about", element: <About /> },
            { index: true, path: "/resume", element: <Resume /> },
            { index: true, path: "/contact", element: <Contact /> },
            { index: true, path: "/test", element: <Test /> },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <ColorModeScript />
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
