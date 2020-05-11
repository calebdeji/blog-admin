const parseError = (error) => {
    const { response, request, message } = error;
    if (response) {
        console.log("Response ", response);
        return responseErrorObject(response);
    } else if (request) {
        console.log("Request ", request);
        return requestErrorObject(request);
    } else {
        console.log("Message ", message);
        return { isError: true, errorMessage: message };
    }
};

const responseErrorObject = (response) => {
    const {
        data: { error: errorMessage },
    } = response;
    if (Array.isArray(errorMessage)) {
        const { msg } = errorMessage[0];
        return { isError: true, errorMessage: msg };
    }

    return { isError: true, errorMessage };
};

const requestErrorObject = (request) => {
    console.log("req ", request);
    const statusCodeForNoInternet = 0;
    const { status, statusText: errorMessage } = request;
    if (status === statusCodeForNoInternet) {
        return { isError: true, errorMessage: "Seems you are not connected to the internet" };
    }
    return { isError: true, errorMessage };
};

export default parseError;
