import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faBook, faTasks, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import setRootVariable from "../../helpers/setRootVariables";

const Nav = (props) => {
    const [lightTheme, setlightTheme] = useState(true);
    const [isSwitchAnimate, setisSwitchAnimate] = useState(false);
    const { pathname } = useRouter();

    useEffect(() => {
        const isLocalStorageNull = parseJSON(localStorage.getItem("lighttheme"));
        if (isLocalStorageNull === null) {
            setLightThemeEffect(true);
        } else {
            const { status } = isLocalStorageNull;
            setLightThemeEffect(status);
        }
        // () => {
        //     setLightThemeEffect(status);
        // };
    }, []);

    const handleThemeChange = () => {
        setisSwitchAnimate(true);
        setlightTheme((prevState) => {
            const newValue = !prevState;
            setLightThemeEffect(newValue);
        });
    };
    const stringifyJSON = (objectParam) => {
        return JSON.stringify(objectParam);
    };
    const parseJSON = (objectParam) => {
        return JSON.parse(objectParam);
    };
    const setLightThemeEffect = (status) => {
        setlightTheme(status);
        localStorage.setItem("lighttheme", stringifyJSON({ status }));
        setRootVariable(status);
    };
    return (
        <div className='home__nav'>
            <div className='home__nav__heading'>
                <div className='home__nav__switch-container'>
                    <input
                        type='checkbox'
                        name='theme'
                        id='theme'
                        className='home__nav__switch-input'
                        checked={lightTheme}
                        onChange={handleThemeChange}
                    />
                    <span
                        className={
                            isSwitchAnimate
                                ? "home__nav__switch home__nav__switch--animate"
                                : "home__nav__switch "
                        }
                    ></span>
                </div>
            </div>
            <nav className='home__nav__container'>
                {navLinks.map((navLink) => {
                    const { id, name, link, icon } = navLink;
                    return (
                        <Link href={link} key={id}>
                            <a
                                className={
                                    link === pathname
                                        ? `home__nav__container__link home__nav__container__link--active`
                                        : "home__nav__container__link"
                                }
                            >
                                <FontAwesomeIcon icon={icon} />
                                <span> {name}</span>
                            </a>
                        </Link>
                    );
                })}
            </nav>
            <style jsx>{`
                .home__nav {
                    display: grid;
                    grid-template-rows: 70px auto;
                    height: 100vh;
                    box-shadow: var(--light-theme-box-shadow);
                    background-color: var(--theme-preference);
                    z-index: 99;
                }
                .home__nav__heading {
                    display: flex;
                    align-items: center;
                    padding-left: 15px;
                    box-shadow: var(--light-theme-box-shadow);
                }
                .home__nav__switch {
                    display: block;
                    height: 30px;
                    width: 30px;
                    border-radius: 100%;
                    background-color: var(--primary-color);
                    position: relative;
                }
                .home__nav__switch-input {
                    position: absolute;
                    z-index: 9;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    margin: 0;
                    opacity: 0;
                }
                .home__nav__switch-input:checked ~ .home__nav__switch {
                    transform: translate(60px, 0);
                }
                .home__nav__switch-input:not(:checked) ~ .home__nav__switch {
                    transform: translate(0, 0);
                }
                .home__nav__switch-input:checked ~ .home__nav__switch--animate {
                    animation: slide-right 0.4s ease-in forwards;
                }
                .home__nav__switch-input:not(:checked) ~ .home__nav__switch--animate {
                    animation: slide-left 0.4s ease-in forwards;
                }
                .home__nav__switch-container {
                    position: relative;
                    width: 80px;
                    height: 30px;
                    border-radius: 110px;
                    // background-color: red;
                    box-shadow: var(--switch-box);
                    display: flex;
                    align-items: center;
                }
                .home__nav__container {
                    display: grid;
                    column-gap: 10px;
                    grid-auto-flow: row;
                    grid-template-rows: repeat(4, 50px);
                }
                .home__nav__container__link {
                    padding: 5px 0;
                    height: 50px;
                    display: grid;
                    align-items: center;
                    grid-template-columns: repeat(2, max-content);
                    column-gap: 7px;
                    padding-left: 15px;
                    color: var(--primary-color);
                }
                .home__nav__container__link--active {
                    background-color: var(--primary-color);
                    color: #ffffff;
                }
                @media all and (hover: hover) {
                    .home__nav__container__link:hover {
                        background-color: var(--primary-color);
                        color: #ffffff;
                        transition-duration: 0.4s;
                    }
                    .home__nav__switch-input:hover {
                        cursor: pointer;
                    }
                }
                @media all and (min-width: 800px) {
                    .home__nav {
                        width: 200px;
                        position: fixed;
                        top: 0;
                        left: 0;
                    }
                }
                @keyframes slide-right {
                    from {
                        transform: translate(0, 0);
                    }
                    to {
                        transform: translate(60px, 0);
                    }
                }
                @keyframes slide-left {
                    from {
                        transform: translate(60px, 0);
                    }
                    to {
                        transform: translate(0px, 0);
                    }
                }
            `}</style>
        </div>
    );
};

const navLinks = [
    { id: 1, name: "Blogs", link: "/blog", icon: faBlog },
    { id: 2, name: "Drafts", link: "/drafts", icon: faBook },
    { id: 3, name: "To-Do", link: "/to-do", icon: faTasks },
    { id: 4, name: "Logout", link: "/", icon: faSignOutAlt },
];

export default Nav;
