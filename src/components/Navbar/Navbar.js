import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <div>
            <nav class="menu menu-1">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
