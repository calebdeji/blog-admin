import React, { useReducer, useState, useEffect } from "react";
import Head from "next/head";
import { FormField } from "../../components/Form/Form";
import HomeLayout from "../../components/Home/HomeLayout";

import {
    BlogHeading,
    BlogBody,
    BlogImage,
    BlogContainer,
} from "../../components/Blog/blog-component";
import { convertImageTOBase64 } from "../../helpers/convertImageToBase64";
import { DropzoneArea } from "material-ui-dropzone";
import Axios from "axios";
import usePublish from "../../hooks/publish";
import { editDraft, saveDraft, editPublishedBlog, publishNewBlog } from "../../utils/publish";
import { useRouter } from "next/router";

const Publish = ({ isEdit, title, details, id }) => {
    const {
        publish,
        formFieldValue,
        tempFile,
        handleChange,
        handleFileChange,
        togglePublish,
        handleSubmittingButton,
        submittingValues: { isSubmitting, publishing, drafting },
    } = usePublish({ title, details, id });
    const { push } = useRouter();
    const { title: editedTitle, file, details: editDetails } = formFieldValue;
    const setFormData = () => {
        console.log("ID ", id);
        const formData = new FormData();
        formData.set("title", editedTitle);
        formData.set("details", editDetails);
        formData.append("file", tempFile);
        formData.set("id", id);
        return formData;
    };
    const navigateTOBlog = () => {
        push("/blog");
    };

    const publishBlog = async () => {
        handleSubmittingButton(true, true);
        if (isEdit) {
            const {
                data: { isError },
            } = await editPublishedBlog(setFormData());
            handleSubmittingButton(false);

            isError ? handleError() : navigateTOBlog();
        } else {
            const {
                data: { isError },
            } = await publishNewBlog(setFormData());
            handleSubmittingButton(false);

            isError ? handleError() : navigateTOBlog();
        }
    };
    const saveBlogAsDraft = async () => {
        handleSubmittingButton(true, false, true);
        if (isEdit) {
            const {
                data: { isError },
            } = await editDraft(setFormData());
            handleSubmittingButton(false);

            isError ? handleError() : push("/drafts");
        } else {
            const {
                data: { isError },
            } = await saveDraft(setFormData());
            handleSubmittingButton(false);
            isError ? handleError() : push("/drafts");
        }
    };
    const handleError = () => {};
    const todayDate = new Date().toDateString();
    return (
        <HomeLayout>
            <Head>
                <title>Calebdeji | Publish</title>
            </Head>
            {publish ? (
                <div className='publish'>
                    <form
                        action=''
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <FormField label='title' name='title'>
                            <input
                                type='text'
                                name='title'
                                id='title'
                                value={editedTitle}
                                className='publish__input-field'
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField label='Image' name='blog-image'>
                            {/* <input
                                type='file'
                                name='blog-image'
                                id='file'
                                value={file}
                                className='publish__input-field'
                                onChange={handleFileChange}
                            /> */}
                            <DropzoneArea
                                // onChange={handleFileChange}
                                dropzoneClass='file-upload'
                                dropzoneText='upload'
                                acceptedFiles={["image/*"]}
                                showPreviews={false}
                                showPreviewsInDropzone={false}
                                showFileNames={true}
                                onDrop={handleFileChange}
                            />
                        </FormField>
                        {/* <FormField label='Estimated Time' name='estimate'>
                            <input
                                type='text'
                                name='estimate'
                                id='estimate'
                                value={estimate}
                                className='publish__input-field'
                                onChange={handleChange}
                            />
                        </FormField> */}
                        {/* <FormField label='description' name='description'>
                            <input
                                type='text'
                                name='description'
                                id='description'
                                className='publish__input-field'
                                value={description}
                                onChange={handleChange}
                            />
                        </FormField> */}
                        {/* <FormField name='tags' label='tags'>
                            <input
                                type='text'
                                name='tags'
                                id='tags'
                                className='publish__input-field'
                            />
                        </FormField> */}
                        <FormField name='blog-content' label='Content'>
                            <textarea
                                className='publish__input-field'
                                name='blog-content'
                                id='details'
                                style={{ minHeight: "150px" }}
                                rows='10'
                                onChange={handleChange}
                                value={editDetails}
                            ></textarea>
                        </FormField>
                    </form>
                </div>
            ) : (
                <BlogContainer className='publish'>
                    <BlogHeading
                        title={editedTitle}
                        tags={["Hello", "JS"]}
                        // estimatedTime={estimate}
                        date={todayDate}
                    />
                    <BlogImage image={tempFile} />
                    <BlogBody text={editDetails} />
                </BlogContainer>
            )}
            <div className='publish__button-bar'>
                <button
                    className='publish__button publish__button--preview-button'
                    onClick={togglePublish}
                >
                    {publish ? "Preview" : "Edit"}
                </button>

                <button
                    className={
                        publishing
                            ? "publish__button publish__button--save-changes publish__button-loading"
                            : "publish__button publish__button--save-changes"
                    }
                    onClick={publishBlog}
                    disabled={isSubmitting}
                >
                    {" "}
                    Save Changes
                </button>
                <button
                    className={
                        drafting
                            ? "publish__button publish__button--save-changes publish__button-loading"
                            : "publish__button publish__button--save-changes"
                    }
                    onClick={saveBlogAsDraft}
                    disabled={isSubmitting}
                >
                    {" "}
                    Save As Draft
                </button>
            </div>
        </HomeLayout>
    );
};
Publish.getInitialProps = async ({ query }) => {
    console.log("Query  ", query);
    return { ...query };
};

export default Publish;
