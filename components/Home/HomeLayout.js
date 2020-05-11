import React, { Component, useEffect, useState, useContext } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Head from "next/head";
import { IsLoginContext } from "../../pages/_app";
import { withRouter } from "next/router";
const HomeLayout = ({ children, router }) => {
    const { isLogin } = useContext(IsLoginContext);
    useEffect(() => {
        if (!isLogin) {
            const { push } = router;
            push("/");
        }
    }, []);
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
                        min-height: calc(100vh - 70px);
                    }
                    @media all and (max-width: 800px) {
                        .home__body {
                            margin-left: 0;
                            margin-bottom: 70px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default withRouter(HomeLayout);
