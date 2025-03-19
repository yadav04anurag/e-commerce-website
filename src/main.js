import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router";
import App from "./app";
import Shopcontextprovider from "./context/shopcontext";
function Main() {
    return (
        <>
            <BrowserRouter>
            <Shopcontextprovider>
            <App></App>
            </Shopcontextprovider>
            </BrowserRouter>
        </>
    )
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main></Main>)