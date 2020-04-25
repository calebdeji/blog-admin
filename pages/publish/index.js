import React, { useReducer, useState, useEffect } from "react";
import Head from "next/head";
import { FormField } from "../../components/Form/Form";
import HomeLayout from "../../components/Home/HomeLayout";

import "../../components/Blog/eachblog.scss";
import "./publish.scss";
import {
    BlogHeading,
    BlogBody,
    BlogImage,
    BlogContainer,
} from "../../components/Blog/blog-component";

const reducer = (state, action) => {
    const { type, id, value } = action;
    return { ...state, [id]: value };
};

const Publish = () => {
    const [publish, setpublish] = useState(true);
    const [formFieldValue, dispatch] = useReducer(reducer, {
        title: "",
        file: "",
        content: "",
        description: "",
        estimate: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = (event) => {
        const { id, value } = event.target;
        dispatch({ id, value });
    };
    const togglePublish = () => {
        setpublish((prevState) => !prevState);
    };
    const todayDate = new Date().toDateString();
    const { title, file, content, description, estimate } = formFieldValue;
    return (
        <HomeLayout>
            <Head>
                <title>Calebdeji | Publish</title>
            </Head>
            {publish ? (
                <div className='publish'>
                    <form action='' onSubmit={handleSubmit}>
                        <FormField label='title' name='title'>
                            <input
                                type='text'
                                name='title'
                                id='title'
                                value={title}
                                className='publish__input-field'
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField label='Image' name='blog-image'>
                            <input
                                type='file'
                                name='blog-image'
                                id='file'
                                value={file}
                                className='publish__input-field'
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField label='Estimated Time' name='estimate'>
                            <input
                                type='text'
                                name='estimate'
                                id='estimate'
                                value={estimate}
                                className='publish__input-field'
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField label='description' name='description'>
                            <input
                                type='text'
                                name='description'
                                id='description'
                                className='publish__input-field'
                                value={description}
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField name='tags' label='tags'>
                            <input
                                type='text'
                                name='tags'
                                id='tags'
                                className='publish__input-field'
                            />
                        </FormField>
                        <FormField name='blog-content' label='Content'>
                            <textarea
                                className='publish__input-field'
                                name='blog-content'
                                id='content'
                                style={{ minHeight: "150px" }}
                                rows='10'
                                onChange={handleChange}
                                value={content}
                            ></textarea>
                        </FormField>
                    </form>
                </div>
            ) : (
                <BlogContainer>
                    <BlogHeading
                        title={title}
                        tags={["Hello", "JS"]}
                        estimatedTime={estimate}
                        date={todayDate}
                    />
                    <BlogImage image='/css-in-js.png' />
                    <BlogBody text={content} />
                </BlogContainer>
            )}
            <div className='publish__button-bar'>
                <button
                    className='publish__button publish__button--preview-button'
                    onClick={togglePublish}
                >
                    {publish ? "Preview" : "Edit"}
                </button>

                <button className='publish__button publish__button--save-changes'>
                    {" "}
                    Save Changes
                </button>
                <button className='publish__button publish__button--save-changes'>
                    {" "}
                    Save As Draft
                </button>
            </div>
        </HomeLayout>
    );
};

export default Publish;
