import React, { Component } from "react";
import HomeLayout from "../components/Home/HomeLayout";

import Head from "next/head";
import Link from "next/link";
import { blogDetails } from "./blog";
import Axios from "axios";
import { baseEndPoint } from "../utils/server-details";
import BlogList from "../components/Blog/BlogList";

const Drafts = ({ data }) => {
    console.log("Seen here", data);
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
                    {data.map((blog) => {
                        const { id, imageURL, details, title, url } = blog;
                        return (
                            <BlogList
                                imageURL={imageURL}
                                title={title}
                                details={details}
                                key={id}
                                urlRelative='/blogs/drafts/[eachdraft]'
                                urlRepresentative={`/blogs/drafts/${url}`}
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
        const draftList = await Axios({
            url: `${baseEndPoint}/get-draft`,
            method: "GET",
            responseType: "json",
        });
        const {
            data: { data },
        } = draftList;
        return { props: { data, isError: false } };
    } catch (error) {
        return { props: { isError: true } };
    }
};

export default Drafts;
