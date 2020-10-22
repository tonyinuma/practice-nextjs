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
            <link rel="shortcut icon" href="https://web.afe.pe/wp-content/uploads/2020/02/icon.png"/>
        </Head>
        <Navigation/>
        <div>
            <div className="container">
                {props.children}
            </div>
        </div>
    </div>
)

export default Container;