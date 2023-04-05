import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'











export default function Navbar(props) {
// component 
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0" >
      <div className={`container-fluid bg-warning`}>
        <Link className="navbar-brand mx-5" to="/"><b>{props.title}</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          <div className="form-check form-switch mx-2">
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleBlue} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.btnText2}</label>
          </div>

          <div className="form-check form-switch mx-2">
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.btnText}</label>
          </div>

        </div>
      </div>
    </nav>
  </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "Please Set Title",
  about: "Please Set Page"
}                