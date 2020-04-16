import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

export default function Home() {
    const { push } = useRouter();
    useEffect(() => {
        push("/auth");
    }, []);

    return (
        <Fragment>
            <style jsx>{``}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
                        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </Fragment>
    );
}
