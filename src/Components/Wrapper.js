import React from "react";
import "../styles/Wrapper.css";
import Main from "./Main";
import Header from "./Header"

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
        </div>
    )
}

export default Wrapper;