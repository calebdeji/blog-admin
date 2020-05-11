import React, { Component } from "react";

const AuthLayout = ({ children, className }) => {
    return (
        <>
            <div className={className ? `auth ${className}` : "auth"}>{children}</div>
            <style jsx>{`
                .auth {
                    min-height: 100vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </>
    );
};

export default AuthLayout;
