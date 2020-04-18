import React, { Component } from "react";
import HomeLayout from "../components/Home/HomeLayout";

import Head from "next/head";
import Link from "next/link";
const Home = () => {
    const removeHtmlTagsAndTrimString = (htmlElements) => {
        return `${htmlElements.substr(0, 100)} ...`;
    };
    return (
        <>
            <Head>
                <title> Calebdeji | Admin blog</title>
            </Head>
            <HomeLayout>
                <div className='blog__lists'>
                    {blogDetails.map((blog) => {
                        const { id, image, details, title, url } = blog;
                        return (
                            <Link key={id} href={`/blogs/[eachblog]`} as={`/blogs/${url}`}>
                                <a className='each-blog'>
                                    <img src='/css-in-js.png' alt='' className='each-blog__image' />
                                    <h3 className='each-blog__title'> {title}</h3>
                                    <p className='each-blog__details'>
                                        {removeHtmlTagsAndTrimString(details)}
                                    </p>
                                </a>
                            </Link>
                        );
                    })}
                </div>
                <style jsx>
                    {`
                        .blog__lists {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                            grid-gap: 30px 30px;
                        }
                        .each-blog {
                            border: solid 1px var(--theme-preference);
                            background-color: var(--theme-preference);
                            border-radius: 4px;
                            box-shadow: var(--light-theme-box-shadow);
                            padding: 20px 10px;
                        }
                        .each-blog__image {
                            width: 100%;
                            display: block;
                            margin: auto;
                            // border-radius: 100%;
                            height: 100px;
                            object-fit: cover;
                        }
                        .each-blog__title {
                            color: #404042;
                        }
                        .each-blog__details {
                            color: #525050;
                        }
                    `}
                </style>
            </HomeLayout>
        </>
    );
};
export default Home;

const blogDetails = [
    {
        id: 1,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "CSS In JS",
        url: "css-in-js",
    },
    {
        id: 2,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "Observables in JS",
        url: "observables-in-js",
    },
    {
        id: 3,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "Testing JS apps",
        url: "testing-js-apps",
    },
    {
        id: 4,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "Pseudocode and Pseudoclass",
        url: "pseudocode-and-pseudoclass",
    },
    {
        id: 5,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "Pseudocode and Pseudoclass",
        url: "pseudocode-and-pseudoclass",
    },
    {
        id: 6,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "Pseudocode and Pseudoclass",
        url: "pseudocode-and-pseudoclass",
    },
    {
        id: 7,

        details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime, saepe.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.Maxime, saepe!Lorem ipsum dolor sit amet consectetur adipisicing e
            lit.Maxime, saepe!
            `,
        title: "Pseudocode and Pseudoclass",
        url: "pseudocode-and-pseudoclass",
    },
];
