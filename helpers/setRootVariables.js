const setRootVariable = (status) => {
    const rootDocument = document.documentElement.style;
    if (status) {
        rootDocument.setProperty("--theme-preference", "#ffffff");
        rootDocument.setProperty("--light-theme-box-shadow", " 0px 5px 20px rgba(0, 0, 0, 0.05)");
        rootDocument.setProperty("--light-theme-body", "#e5e5e5");
        rootDocument.setProperty("--theme-body-text", "rgba(0,0,0)");
        rootDocument.setProperty(
            "--switch-box",
            "inset 10px 10px 21px #e6e6e6, inset -10px -10px 21px #ffffff"
        );
    } else {
        rootDocument.setProperty("--theme-preference", "#000000");
        rootDocument.setProperty(
            "--light-theme-box-shadow",
            "8px 8px 18px #0b0a0a,  -8px -8px 18px #110e0e;"
        );
        rootDocument.setProperty("--light-theme-body", "rgba(0,0,0,0.95)");
        rootDocument.setProperty("--theme-body-text", "rgba(255,255,255,0.7)");
        rootDocument.setProperty(
            "--switch-box",
            " inset 10px 10px 16px #131212,  inset -10px -10px 16px #191818"
        );
    }
};

export default setRootVariable;
