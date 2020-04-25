const setRootVariable = (status) => {
    const rootDocument = document.documentElement;
    if (status) {
        rootDocument.setAttribute("data-theme", "light");
    } else {
        rootDocument.setAttribute("data-theme", "dark");
    }
};

export default setRootVariable;
