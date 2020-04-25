import React, { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HomeLayout from "../../components/Home/HomeLayout";
import ReactMarkdownForHTML from "react-markdown/with-html";
import "./eachblog.scss";
import ReactMarkdown from "react-markdown";

const EachBlog = () => {
    const {
        query: { eachblog },
    } = useRouter();
    useEffect(() => {
        window.prettyPrint();
    }, []);
    return (
        <>
            <Head>
                <title> Calebdeji | {eachblog}</title>
                <link rel='stylesheet' href='/prettify.css' />
                <script src='/prettify.js'></script>
            </Head>
            <HomeLayout>
                <div className='blog__heading'>
                    <h1 className='blog__heading__title'> Title </h1>
                    <span className='blog__heading__estimated-mins grey-text'>
                        Read mins : #4mins
                    </span>
                    <span className='blog__heading__tags grey-text'>Tags : #js #css #html</span>
                </div>
                <img src='/css-in-js.png' alt={`title image`} className='blog__image' />
                <div className='blog__body'>
                    <ReactMarkdownForHTML source={htmlText} escapeHtml={false} />
                </div>
                <style jsx>
                    {`
                        .blog__heading {
                            display: grid;
                            align-items: center;
                            grid-template-columns: repeat(2, max-content);
                            grid-template-rows: repeat(2, max-content);
                            grid-gap: 10px 30px;
                            padding: 30px 0 20px 0;
                        }
                        .blog__heading__title {
                            grid-column: 1 / span 2;
                        }
                        .blog__body,
                        .blog__heading {
                            width: 80%;
                            margin: auto;
                        }
                        .code {
                            display: flex;
                            flex-direction: column;
                            background-color: red;
                            padding: 15px 10px;
                        }

                        @media all and (min-width: 800px) {
                            .blog__image {
                                width: 500px;
                                height: 300px;
                                object-fit: cover;
                                display: block;
                                margin: auto;
                            }
                        }
                    `}
                </style>
            </HomeLayout>
        </>
    );
};

export default EachBlog;

const htmlText = `
<p class="blog__paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, velit!
    Labore alias quae et accusamus, necessitatibus assumenda non fugit deserunt
    explicabo est ad quas molestiae ipsum cumque. Omnis quasi rem consectetur
    exercitationem! Molestias, ab mollitia eius iure rerum repellat, delectus
    placeat autem reiciendis error commodi vero dolore a facere officiis perferendis
    exercitationem eum facilis quaerat eos cumque quis, voluptatum iusto? Placeat
    commodi dolore neque sed culpa, consequuntur ratione voluptas incidunt in
    aliquid veniam magnam repellat ipsam odit illo repellendus a. Quos quod deserunt
    amet! Molestiae expedita facere nulla maiores quasi exercitationem quis possimus
    culpa commodi architecto iste eaque veniam nihil in sapiente porro recusandae
    optio omnis vel deserunt, aspernatur et rem. Blanditiis dolore, hic repudiandae
    eaque doloribus enim! Animi, quisquam quia eum in laudantium illum officiis
    porro ullam, inventore impedit, aspernatur a quam pariatur veritatis voluptas
    asperiores quae unde magni. Voluptatem dolores nobis a itaque facere facilis
    odio fugiat eum autem! Veritatis vitae temporibus, quaerat tempora corrupti
    repellendus sint amet in quam. Ipsam enim, necessitatibus soluta eaque explicabo
    non exercitationem possimus quod fugiat magnam quisquam totam ratione asperiores
    labore facere est? Perferendis autem consequuntur necessitatibus eaque quia,
    cupiditate quam aspernatur fuga molestias voluptas aut unde et consequatur
</p>
<pre class='prettyprint'>
    const firstName = "Caleb";
    const secondName = "deji"; 
    const additon = firstName + secondName; // addition
    function testing(){
        var calebdeji = addition;
    }
    
</pre>
<p class="blog__paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, velit!
    Labore alias quae et accusamus, necessitatibus assumenda non fugit deserunt
    explicabo est ad quas molestiae ipsum cumque. Omnis quasi rem consectetur
    exercitationem! Molestias, ab mollitia eius iure rerum repellat, delectus
    placeat autem reiciendis error commodi vero dolore a facere officiis perferendis
    exercitationem eum facilis quaerat eos cumque quis, voluptatum iusto? Placeat
    commodi dolore neque sed culpa, consequuntur ratione voluptas incidunt in
    aliquid veniam magnam repellat ipsam odit illo repellendus a. Quos quod deserunt
    amet! Molestiae expedita facere nulla maiores quasi exercitationem quis possimus
    culpa commodi architecto iste eaque veniam nihil in sapiente porro recusandae
    optio omnis vel deserunt, aspernatur et rem. Blanditiis dolore, hic repudiandae
    eaque doloribus enim! Animi, quisquam quia eum in laudantium illum officiis
    porro ullam, inventore impedit, aspernatur a quam pariatur veritatis voluptas
    asperiores quae unde magni. Voluptatem dolores nobis a itaque facere facilis
    odio fugiat eum autem! Veritatis vitae temporibus, quaerat tempora corrupti
    repellendus sint amet in quam. Ipsam enim, necessitatibus soluta eaque explicabo
    non exercitationem possimus quod fugiat magnam quisquam totam ratione asperiores
    labore facere est? Perferendis autem consequuntur necessitatibus eaque quia,
    cupiditate quam aspernatur fuga molestias voluptas aut unde et consequatur
</p>
`;
const codeString = `
<pre class='prettyprint'>
    const firstName = "Caleb";
    const secondName = "deji"; 
    const additon = firstName + secondName; // addition
    function testing(){
        var calebdeji = addition;
    }
    
</pre>
`;
