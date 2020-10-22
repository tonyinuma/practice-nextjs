import Link from 'next/link'
import React from "react";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Index</a>
                </Link>
            </li>
            <li>
                <Link href="/services">
                    <a>Services</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation;