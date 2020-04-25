import React, { Component } from "react";
import HomeLayout from "../components/Home/HomeLayout";

import Head from "next/head";
import Link from "next/link";
import "../components/Blog-and-Draft/blog-draft-style.scss";
import { blogDetails } from "./blog";

const Drafts = () => {
    const removeHtmlTagsAndTrimString = (htmlElements) => {
        return `${htmlElements.substr(0, 100)} ...`;
    };
    return (
        <>
            <Head>
                <title> Calebdeji | Drafts </title>
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
            </HomeLayout>
        </>
    );
};

export default Drafts;
