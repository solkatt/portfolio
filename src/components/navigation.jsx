import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to='/work' exact>
                                    Work
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to='/approach' exact>
                                    Approach
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' exact>
                                    Services
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' exact>
                                    About
                                    </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">
                            Contact
                            </div>
                        <div className="nav-infos">

                            <ul className="nav-info">
                                <li className="nav-info-label">
                                    Email
                                    </li>
                                <li>
                                    <NavLink to='/contact' exact>Get in touch</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/audit' exact>Get a free audit</NavLink>
                                </li>
                            </ul>


                            <ul className="nav-info">
                                <li className="nav-info-label">
                                    Headquarters
                                    </li>
                                <li>Bergängsvägen 13 D</li>
                                <li>302 58 Halmstad</li>
                                <li>Sweden</li>

                            </ul>


                            <ul className="nav-info">
                                <li className="nav-info-label">
                                    Phone
                                    </li>
                                <li>+46 (0) 70 886 15 16</li>
                            </ul>


                            <ul className="nav-info">
                                <li className="nav-info-label">
                                    Legal
                                    </li>
                                <li>Privacy and Cookies</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation 