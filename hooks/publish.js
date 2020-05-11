import React, { useState, useReducer } from "react";
import { convertImageTOBase64 } from "../helpers/convertImageToBase64";
const reducer = (state, action) => {
    const { type, id, value } = action;
    return { ...state, [id]: value };
};

const buttonReducer = (state, action) => {
    const { type, value } = action;
    return { ...state, [type]: value };
};

const usePublish = ({ title, details, id }) => {
    const [publish, setpublish] = useState(true);
    const [submittingValues, setisSubmitting] = useReducer(buttonReducer, {
        isSubmitting: false,
        publishing: false,
        drafting: false,
    });
    const [formFieldValue, dispatch] = useReducer(reducer, {
        title: title || "",
        file: "",
        details: details || "",
        // description: "",
        // estimate: "",
    });
    const [tempFile, settempFile] = useState(null);

    const togglePublish = () => {
        setpublish((prevState) => !prevState);
    };
    const handleSubmittingButton = (status, isPublish = false, isDrafting = false) => {
        setisSubmitting({ type: "isSubmitting", value: status });
        setisSubmitting({ type: "publishing", value: isPublish });
        setisSubmitting({ type: "drafting", value: isDrafting });
    };
    const handleChange = (event) => {
        const { id, value } = event.target;
        dispatch({ id, value });
    };
    const handleFileChange = (files) => {
        console.log(files);
        dispatch({ id: "file", value: files[0] });
        convertImageTOBase64(files[0], (result) => {
            settempFile(result);
        });
    };
    return {
        publish,
        formFieldValue,
        tempFile,
        handleChange,
        handleFileChange,
        togglePublish,
        handleSubmittingButton,
        submittingValues,
    };
};
export default usePublish;
