import React from "react";
export const FormField = ({ children, label, name }) => {
    return (
        <div className='form__field'>
            <label htmlFor={name} className='form__field__label'>
                {label ? label : null}
            </label>
            {children}

            <style jsx>
                {`
                    .form__field {
                        display: grid;
                        grid-template-columns: 100px auto;
                        column-gap: 20px;
                        min-height: 50px;
                        align-items: center;
                        margin-bottom: 20px;
                    }
                    .form__field__label {
                        text-transform: capitalize;
                    }
                `}
            </style>
        </div>
    );
};
