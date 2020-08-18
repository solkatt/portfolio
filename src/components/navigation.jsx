import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Work</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to='/development' exact>
                                    Development
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to='/approach' exact>
                                    Motion Design
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' exact>
                                    Audiovisual Art
                                    </NavLink>
                            </li>

                            <li>
                                <NavLink to='/services' exact>
                                    CV
                                    </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">

                        </div>
                        <div className="nav-infos">






                            <ul className="nav-info">
                                <li className="nav-info-label">
                                    Contact
                                    </li>
                                <li>
                                    <NavLink to='/contact' exact>hello@viktorodman.se</NavLink>
                                </li>
                                <li>
                                    +46 (0) 70 886 15 16
                                </li>

                            </ul>




                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation 