import React from "react";
import ReactDOM from "react-dom";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

//this is the whole layout of my web app
const AppLayout=()=>(
    // 
    <>         
    <Header/>
    <Body/>
    <Footer/>
    </>
)


 const root= ReactDOM.createRoot(document.getElementById("root"))

 root.render(<AppLayout/>)