import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import "./eachblog.scss";

export const BlogContainer = ({ children }) => {
    return <div className='blog'>{children}</div>;
};

const BlogHeading = ({ title, estimatedTime, tags, date }) => {
    return (
        <div className='blog__heading'>
            <h1 className='blog__heading__title'> {title} </h1>
            <span className='blog__heading__estimated-mins grey-text'> {date} |</span>
            <span className='blog__heading__estimated-mins grey-text'>
                Read mins : {estimatedTime}{" "}
            </span>

            <span className='blog__heading__tags grey-text'>
                {tags.map((tag, index) => {
                    return (
                        <span className='blog__heading__tags-container__tag' key={index}>
                            {tag}
                        </span>
                    );
                })}
            </span>
        </div>
    );
};

const BlogImage = ({ image }) => {
    return <img src={image} alt={`title image`} className='blog__image' />;
};

const BlogBody = ({ text }) => {
    return (
        <div className='blog__body'>
            <ReactMarkdown source={text} escapeHtml={false} />
        </div>
    );
};

export { BlogHeading, BlogImage, BlogBody };
