import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className='header'>
            <label htmlFor='search' hidden>
                {" "}
                Search{" "}
            </label>
            <input type='search' name='search' id='search' className='header__search' />
            <div className='header__action'>
                <p>
                    {" "}
                    Hello{" "}
                    <span
                        style={{
                            color: "var(--primary-color)",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                        title='Caleb'
                    >
                        {" "}
                        Caleb
                    </span>{" "}
                </p>
                <FontAwesomeIcon
                    icon={faUserAlt}
                    style={{ fontSize: "20px", color: "var(--primary-color)" }}
                />
            </div>
            <style jsx>{`
                .header {
                    display: flex;
                    justify-content: space-between;
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: -webkit-fill-available;
                    margin-left: 200px;
                    height: 70px;
                    box-shadow: var(--theme-box-shadow);
                    align-items: center;
                    padding: 0 30px;
                    z-index: 99;
                    background-color: var(--theme-preference);
                }
                .header__search {
                    height: 30px;
                    border: solid 1px #e8e8e8;
                    border-radius: 30px;
                    padding: 0 10px;
                }
                .header__action {
                    display: grid;
                    grid-template-columns: repeat(2, max-content);
                    align-items: center;
                    column-gap: 15px;
                }
            `}</style>
        </div>
    );
};

export default Header;
