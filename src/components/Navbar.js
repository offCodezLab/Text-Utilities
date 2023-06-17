import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light" : "dark"} bg-${props.mode === "light" ? "light" : "dark"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className='nav-link active' aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className='nav-link' href="/about">{props.aboutUs}</a>
                            </li> */}
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