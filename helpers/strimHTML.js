export const strimHTML = (details) => {
    let strimmedDetails = details.replace(/(<([^>]+)>)/gi, "");

    return `${strimmedDetails.substr(0, 100)} ...`;
};
