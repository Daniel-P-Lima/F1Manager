import React, { Component } from 'react'
import F1Logo from "../../assets/img/formula-1-256.png"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <a className='navbar-brand' href="#">
                <img className='F1Logo' src={F1Logo} alt="" />
            </a>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/listarPilotos">Pilotos</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/meuTime">Meu Time</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}