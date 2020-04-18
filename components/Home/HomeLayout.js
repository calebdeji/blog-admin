import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../global/style.scss";
const HomeLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Nav />
            <div className='home__body'>{children}</div>
            <style jsx>
                {`
                    .home__body {
                        margin: 70px 0 0 200px;
                        padding: 10px 20px;
                        background-color: var(--light-theme-body);
                        color: var(--theme-body-text);
                    }
                `}
            </style>
        </>
    );
};

export default HomeLayout;
