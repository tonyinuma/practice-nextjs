import Link from 'next/link'
import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/">
                <a className="navbar-brand ml-4">
                    <img src="https://web.afe.pe/wp-content/uploads/2020/02/logo1.png" alt="" width={70}/>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/services">
                            <a className="nav-link">Servicios</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cotizacion">
                            <a className="nav-link">Cotizacion</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 mr-4">
                    <input className="form-control mr-sm-2" type="text" placeholder="Que desas Buscar .."/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default Navigation;