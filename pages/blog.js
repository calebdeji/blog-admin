import React, { Component } from "react";
import HomeLayout from "../components/Home/HomeLayout";

import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { baseEndPoint } from "../utils/server-details";
import BlogList from "../components/Blog/BlogList";
const Home = ({ links }) => {
    return (
        <>
            <Head>
                <title> Calebdeji | Admin blog</title>
            </Head>
            <HomeLayout>
                <div className='blog__lists'>
                    {links.map((blog) => {
                        const { id, details, title, url, imageURL } = blog;
                        return (
                            <BlogList
                                imageURL={imageURL}
                                title={title}
                                details={details}
                                key={id}
                                urlRelative='/blogs/published/[eachblog] '
                                urlRepresentative={`/blogs/published/${url}`}
                                id={id}
                            />
                        );
                    })}
                </div>
            </HomeLayout>
        </>
    );
};

export const getStaticProps = async () => {
    try {
        const blogList = await axios({ url: `${baseEndPoint}/get-links`, method: "GET" });
        const links = blogList.data.data;
        console.log("Links are ", links);
        return { props: { links, isError: false } };
    } catch (error) {
        console.log("Error : ", error);
        return {
            props: {
                links: [{ id: 1, details: "Null", title: "Null", url: "Null" }],
                isError: true,
            },
        };
    }
};

export default Home;

export const blogDetails = [
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
