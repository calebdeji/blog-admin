import React, { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HomeLayout from "../../components/Home/HomeLayout";
import ReactMarkdownForHTML from "react-markdown/with-html";
import "../../components/Blog/eachblog.scss";
import ReactMarkdown from "react-markdown";
import {
    BlogBody,
    BlogHeading,
    BlogImage,
    BlogContainer,
} from "../../components/Blog/blog-component";

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
                <BlogContainer>
                    <BlogHeading title='Title' estimatedTime='4 mins' tags={["JS", "Python"]} />
                    <BlogImage image='/css-in-js.png' />
                    <BlogBody text={htmlText} />
                </BlogContainer>
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
<pre class='prettyprint'>
    const firstName = "Caleb";
    const secondName = "deji"; 
    const additon = firstName + secondName; // addition
    function testing(){
        var calebdeji = addition;
    }
    
</pre>
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
