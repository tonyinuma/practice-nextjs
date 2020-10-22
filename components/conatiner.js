import Navigation from "./navigation";
import React from "react";

const Container = (props) =>(
    <div>
        <Navigation/>
        <div>
            {props.children}
        </div>
    </div>
)

export default Container;