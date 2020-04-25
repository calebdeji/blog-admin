import React from "react";
export const FormField = ({ children, label, name }) => {
    return (
        <div className='form__field'>
            <label htmlFor={name}>{label ? label : null}</label>
            {children}
        </div>
    );
};
