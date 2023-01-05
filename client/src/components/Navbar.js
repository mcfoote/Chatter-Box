import React, { useState } from "react";

const Navbar = () => {
    return (
        <div className="masterNav">
            {/* LOGO */}
            <a className="logo" href='/'></a>
            {/* NAV */}

            <ul className="navbar">
                <button type="button" id="hamburger">
                    <GiHamburgerMenu id="hamburger" />
                </button>
                <li className="noStyle">
                    <a href="/" className="navItem">Home</a>
                </li>
                <li className="noStyle">
                    <a href="/about" className="navItem">About</a>
                </li>
                <li className="noStyle">
                    <a href="/showcase" className="navItem showcaseLeft">Showcase</a>
                </li>
                <li className="noStyle">
                    {/* link to ACTUAL indeed resume */}
                    <a href="http://indeed.com" className="navItem">Resume</a>
                </li>
                <li className="noStyle">
                    <a href="/contact" className="navItem">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;