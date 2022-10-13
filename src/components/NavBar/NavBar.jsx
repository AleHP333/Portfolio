import React from 'react'
import NavBarStyles from "./NavBar.module.css"

const nav = NavBarStyles



export default function NavBar() {

    return (
        <div className={nav.container}>
            <div className={nav.logo}>
                <p>ALEJANDROOOO</p>
            </div>
            <div className={nav.buttons}>
                <p>About me</p>
                <p>My Proyects</p>
                <p>Experience</p>
                <p>Contact Me</p>
            </div>
        </div>
    )
}
