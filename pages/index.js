import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const { push } = useRouter();
    useEffect(() => {
        push("/auth");
    }, []);

    return <Fragment></Fragment>;
}
