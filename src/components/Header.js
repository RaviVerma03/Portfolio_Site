import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "is-active" : ""
        }>Home</NavLink>
        <NavLink to='/portfolio' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "is-active" : ""
        }>Portfolio</NavLink>
        <NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "is-active" : ""
        }>Contact</NavLink>
    </header>
)

export default Header