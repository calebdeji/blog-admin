import React, { Component, useState, useContext } from "react";
import { useRouter } from "next/router";
import AuthLayout from "../components/Auth/AuthLayout";
import Head from "next/head";
import Link from "next/link";
import { authLogin } from "../utils/auth";
import Loader from "../components/global/Loader";
import { IsLoginContext } from "./_app";

const stylesColor = { greyBorder: "#e8e8e8" };

const Login = () => {
    const { push } = useRouter();
    const { setIsLogin } = useContext(IsLoginContext);
    const [formField, setformField] = useState({ username: "", password: "" });
    const [isError, setisError] = useState(false);
    const [isSubmitting, setisSubmitting] = useState(false);
    const handleChange = (event) => {
        const {
            target: { id, value },
        } = event;
        setformField((prevFields) => ({ ...prevFields, [id]: value }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setisSubmitting(true);
        const { username, password } = formField;
        const { isError } = await authLogin({ username, password });
        alert("Is error", isError);
        if (isError) {
            setisError(true);
            setisSubmitting(false);
        } else {
            setisError(false);
            setIsLogin(true);
            push("/blog");
        }
    };

    return (
        <>
            <Head>
                <title> Calebdeji Blog | Admin </title>
            </Head>
            <AuthLayout>
                <form onSubmit={handleSubmit} className='auth__form'>
                    <div className='auth__input-container'>
                        <label htmlFor='username'> Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            className='auth__input'
                            autoFocus
                            onChange={handleChange}
                            value={formField.username}
                        />
                    </div>
                    <div className='auth__input-container'>
                        <label htmlFor='password'> Password </label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='auth__input'
                            onChange={handleChange}
                            value={formField.password}
                        />
                    </div>
                    {isError && <span style={{ color: "red" }}> Invalid Login Details</span>}
                    <button className='auth__button' disabled={isSubmitting}>
                        {isSubmitting ? <Loader /> : "Login"}
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
