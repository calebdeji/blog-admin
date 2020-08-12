import Axios from "axios";
import { baseEndPoint } from "./server-details";
import parseError from "../helpers/parseErrorObject";

export const generalAxiosParams = {
    method: "POST",
    responseType: "json",
    headers: { "Content-Type": "multipart/form-data" },
};
export const editDraft = async (formData) => {
    try {
        const apiResponse = await Axios({
            url: `${baseEndPoint}/edit-draft`,

            data: formData,
            ...generalAxiosParams,
        });
        return apiResponse;
    } catch (error) {
        return parseError(error);
    }
};

export const saveDraft = async (formData) => {
    try {
        const apiResponse = await Axios({
            url: `${baseEndPoint}/save-draft`,
            data: formData,
            ...generalAxiosParams,
        });
        return apiResponse;
    } catch (error) {
        return parseError(error);
    }
};
export const editPublishedBlog = async (formData) => {
    try {
        const apiResponse = await Axios({
            url: `${baseEndPoint}/edit-published-blog`,
            data: formData,
            ...generalAxiosParams,
        });
        return apiResponse;
    } catch (err) {
        return parseError(err);
    }
};
export const publishNewBlog = async (formData) => {
    try {
        const apiResponse = await Axios({
            url: `${baseEndPoint}/publish-blog`,
            data: formData,
            ...generalAxiosParams,
        });
        return apiResponse;
    } catch (error) {
        return parseError(error);
    }
};
