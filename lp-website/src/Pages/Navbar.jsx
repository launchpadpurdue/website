import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="left">
            <h1 className="launchpadTitle">
                LaunchPad
            </h1>
        </div>
        <div className="right">
            <a href = "/"><button component = {Link} className = "signin">About</button></a>
            <a href = "/faq"><button component = {Link} className = "signin">FAQ</button></a>
            <a href = "/sponsors"><button component = {Link} className = "signin">Sponsors</button></a>
            <a href = "/team"><button component = {Link} className = "signin">Team</button></a>
            <a href = "/contact"><button component = {Link} className = "signin">Contact</button></a>
        </div>
    </div>
  )
}
