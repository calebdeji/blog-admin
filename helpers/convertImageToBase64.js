export const convertImageTOBase64 = (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const { result } = reader;
        callback(result);
    };
    reader.onerror = (err) => {
        console.log("Error converting image ", err);
    };
};
