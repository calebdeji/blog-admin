import "../components/styles/blog-draft-style.scss";

import "../components/styles/eachblog.scss";
import "../components/styles/publish.scss";
import "../components/global/style.scss";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export const IsLoginContext = React.createContext({
    isLogin: false,
    setIsLogin: () => {},
});
export default function MyApp({ Component, pageProps }) {
    const [isLogin, setisLoginState] = useState(false);
    const { push } = useRouter();
    const LoadingContextValue = { isLogin, setIsLogin: (status) => setisLoginState(status) };

    return (
        <IsLoginContext.Provider value={LoadingContextValue}>
            <Component {...pageProps}></Component>
        </IsLoginContext.Provider>
    );
}
