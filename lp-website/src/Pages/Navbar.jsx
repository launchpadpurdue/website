import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="left">
            <h1 className="launchpadTitle">
                Launchpad
            </h1>
        </div>
        <div className="right">
            <a to = "/"><button className = "signin">About</button></a>
            <a to = "/"><button className = "signin">FAQ</button></a>
            <a to = "/"><button className = "signin">Sponsors</button></a>
            <a to = "/"><button className = "signin">Team</button></a>
            <a to = "/"><button className = "signin">Contact</button></a>
        </div>
    </div>
  )
}
