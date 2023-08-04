import React from 'react' // imr short-cut
import PropTypes from 'prop-types' // impt
// import { Link } from "react-router-dom";
// rfc to get react based function
export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <Link  className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                <a  className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link  className="nav-link" to="/about">About</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/textFormatter'>{props.text}</Link>
                            </li> */}
                        </ul>

                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enable {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'Blue' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleBlue} id="flexSwitchCheckDefault" />
                        <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Enable {props.mode === 'light' ? 'Blue Mode' : 'Light Mode'}</label>
                    </div>
                </div>
            </nav >
        </>
    )
}
Navbar.prototype = {
    title: PropTypes.string,
    text: PropTypes.string

}
Navbar.defaultProps = {
    title: 'SKR',
    text: 'Desk'
}