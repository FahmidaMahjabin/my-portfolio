import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to = "#">ABOUT ME</Link></li>
                        <li><Link to = "#">PROJECTS</Link></li>
                        <li><Link to = "#">TECHNOLOGIES</Link></li>
                        <li><Link to = "#">CONTACT ME</Link></li>
                    </ul>
                </div>
                <li className="btn btn-ghost normal-case text-xl">MY PORTFOLIO</li>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to = "#">ABOUT ME</Link></li>
                    <li><Link to = "#">PROJECTS</Link></li>
                    <li><Link to = "#">TECHNOLOGIES</Link></li>
                    <li><Link to = "#">CONTACT ME</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;