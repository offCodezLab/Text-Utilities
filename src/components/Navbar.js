import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light" : "dark"} bg-${props.mode === "light" ? "light" : "dark"}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">{props.aboutUs}</Link>
                            </li>
                        </ul>


                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
                            <input className="form-check-input modeSwitch" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="darkModeSwitch" />
                            <label className="form-check-label" htmlFor="darkModeSwitch">Default dark mode</label>
                        </div>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
                            <input className="form-check-input modeSwitch" type="checkbox" onClick={props.toggleLightDarkMode} role="switch" id="lightDarkModeSwitch" />
                            <label className="form-check-label" htmlFor="lightDarkModeSwitch">Light dark mode</label>
                        </div>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
                            <input className="form-check-input modeSwitch" type="checkbox" onClick={props.toggleBlueDarkMode} role="switch" id="blueDarkModeSwitch" />
                            <label className="form-check-label" htmlFor="blueDarkModeSwitch">Blue dark mode</label>
                        </div>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
                            <input className="form-check-input modeSwitch" type="checkbox" onClick={props.toggleGreenDarkMode} role="switch" id="greenDarkModeSwitch" />
                            <label className="form-check-label" htmlFor="greenDarkModeSwitch">Green dark mode</label>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string
};

Navbar.defaultProps = {
    title: "Site-Title",
    aboutUs: "Site-AboutUs"
};