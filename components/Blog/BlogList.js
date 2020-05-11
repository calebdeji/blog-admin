import { useState, useEffect } from "react";
import Link from "next/link";
import ClickAwayListener from "react-click-away-listener";
import { useRouter } from "next/router";
import { strimHTML } from "../../helpers/strimHTML";

const BlogList = ({ imageURL, title, details, urlRelative, urlRepresentative, id }) => {
    const [isDisplayMoreOptions, setisDisplayMoreOptions] = useState(false);
    const { push } = useRouter();

    const toogleMoreOptions = () => {
        setisDisplayMoreOptions((status) => !status);
    };
    const handleClickAway = () => {
        setisDisplayMoreOptions(false);
    };
    const handleEdit = () => {
        push(
            { pathname: "/publish", query: { title, details, id, imageURL, isEdit: true } },
            "/publish"
        );
    };
    return (
        <li className='each-blog__container'>
            <div className='each-blog__option-container'>
                <button className='each-blog__button' onClick={toogleMoreOptions}>
                    <img src='/menuIcon.svg' alt='' />
                </button>
                {isDisplayMoreOptions && (
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className='each-blog__button__pop-up' id='popUp'>
                            {" "}
                            <button
                                className='each-blog__button__pop-up__option'
                                onClick={handleEdit}
                            >
                                {" "}
                                Edit
                            </button>
                        </div>
                    </ClickAwayListener>
                )}
            </div>
            <Link href={urlRelative} as={urlRepresentative}>
                <a className='each-blog'>
                    <img src={imageURL} alt={`${title}`} className='each-blog__image' />
                    <h3 className='each-blog__title'> {title}</h3>
                    <p className='each-blog__details'> {strimHTML(details)}</p>
                </a>
            </Link>
        </li>
    );
};
export default BlogList;
