import React from "react";
import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => (
    <div>
        <Head>
            <title>AFE Courier</title>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/journal/bootstrap.min.css"
            />
        </Head>
        <Navigation/>
        <div>
            {props.children}
        </div>
    </div>
)

export default Container;