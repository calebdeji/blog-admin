import React, { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HomeLayout from "../../../components/Home/HomeLayout";
import ReactMarkdownForHTML from "react-markdown/with-html";
import ReactMarkdown from "react-markdown";
import {
    BlogBody,
    BlogHeading,
    BlogImage,
    BlogContainer,
} from "../../../components/Blog/blog-component";
import Axios from "axios";
import { baseEndPoint } from "../../../utils/server-details";

const EachDraft = ({ data }) => {
    const {
        query: { eachDraft },
        isFallback,
    } = useRouter();
    const [isReadyToPrettify, setisReadyToPrettify] = useState(0);
    useEffect(() => {
        let timerId = setTimeout(() => {
            window.prettyPrint();
        }, 2000);
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <>
            <Head>
                <title> Calebdeji | {eachDraft}</title>
                <link rel='stylesheet' href='/prettify.css' />
                <script src='/prettify.js'> </script>
            </Head>
            <HomeLayout>
                {isFallback ? (
                    <p>Loading ...</p>
                ) : (
                    <BlogContainer>
                        <BlogHeading
                            title={data.title}
                            estimatedTime='4 mins'
                            tags={["JS", "Python"]}
                        />
                        <BlogImage image={data.imageURL} />
                        <BlogBody text={data.details} />
                    </BlogContainer>
                )}
            </HomeLayout>
            <div>{}</div>
        </>
    );
};

export default EachDraft;

export const getStaticProps = async ({ params: { eachdraft } }) => {
    try {
        console.log("eachdraft ", eachdraft);
        const bodyJSON = JSON.stringify({ eachdraft });
        var raw = JSON.stringify({ id: eachdraft });
        console.log("Raw ", raw);
        const {
            data: { data },
        } = await Axios({
            url: `${baseEndPoint}/get-draft-data`,
            method: "POST",
            data: raw,
        });
        console.log("Data ", data);
        return { props: { data } };
    } catch (error) {}
};
export const getStaticPaths = () => {
    return { paths: [{ params: { eachdraft: "idk" } }], fallback: true };
};
