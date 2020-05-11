import { baseEndPoint } from "./server-details";
import Axios from "axios";
import parseError from "../helpers/parseErrorObject";
import { generalAxiosParams } from "./publish";
export const authLogin = async ({ username, password }) => {
    alert(`USername : ${username} and password : ${password}`);
    try {
        const formData = new FormData();
        formData.set("username", username);
        formData.set("password", password);
        const apiResponse = await Axios({
            url: `${baseEndPoint}/auth/login`,

            data: formData,
            ...generalAxiosParams,
        });
        console.log("API RES ", apiResponse);
        return apiResponse;
    } catch (error) {
        console.log("Error ", error);

        return parseError(error);
    }
};
