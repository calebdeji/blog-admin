import React, { Component, useState } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../components/Auth/AuthLayout";
import Head from "next/head";
const Login = () => {
    const { push } = useRouter();

    const handleSubmit = (event) => {
        // push("/blog");
    };

    const stylesColor = { greyBorder: "#e8e8e8" };
    return (
        <>
            <Head>
                <title> Calebdeji Blog | Admin </title>
            </Head>
            <AuthLayout>
                <form action='/blog' onSubmit={handleSubmit} className='auth__form'>
                    <div className='auth__input-container'>
                        <label htmlFor='username'> Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            className='auth__input'
                            autoFocus
                        />
                    </div>
                    <div className='auth__input-container'>
                        <label htmlFor='password'> Password </label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='auth__input'
                        />
                    </div>
                    <button type='submit' className='auth__button'>
                        {" "}
                        Login{" "}
                    </button>
                </form>
                <style jsx>
                    {`
                        .auth__form {
                            border: solid 1px ${stylesColor.greyBorder};
                            padding: 20px 30px;
                            display: grid;
                            row-gap: 15px;
                        }
                        .auth__input-container {
                            display: grid;
                            grid-template-rows: auto 25px;
                            row-gap: 5px;
                        }
                        .auth__input {
                            display: block;
                            border: solid 1px ${stylesColor.greyBorder};
                            border-radius: 5px;
                            padding-left: 3px;
                        }
                        .auth__button {
                            border: solid 1px ${stylesColor.greyBorder};
                            background-color: #000000;
                            color: #ffffff;
                            display: flex;
                            height: 30px;
                            justify-content: center;
                            align-items: center;
                        }
                        @media (hover: hover) {
                            .auth__button:hover {
                                cursor: pointer;
                            }
                        }
                    `}
                </style>
            </AuthLayout>
        </>
    );
};

export default Login;
