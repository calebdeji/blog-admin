import React, { Component, useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../global/style.scss";
import Head from "next/head";
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
                        background-color: var(--theme-body);
                        color: var(--theme-body-text);
                        min-height: 100vh;
                    }
                `}
            </style>
        </>
    );
};

export default HomeLayout;
