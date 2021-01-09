import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg'
import { openMenu, closeMenu } from "../animations/menuAnimations";



const Header = ({ history, dimensions }) => {

    const [menuState, setMenuState] = useState({ menuOpened: false })
    useEffect(() => {

        history.listen(() => {
            setMenuState({ menuOpened: false })
        })

        if (menuState.menuOpened === true) {
            openMenu(dimensions.width);
            window.scrollTo(0, 0)

        } else if (menuState.menuOpened === false) {
            closeMenu();
        }
    });




    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="logo">
                    {/* <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo"></img> */}
                        <NavLink to="/" exact> &#x25BD;&#x25EC;&#x25CB; </NavLink>
                    </div>
                    <div className="nav-toggle">
                        <div onClick={() => setMenuState({ menuOpened: true })} className="hamburger-menu">
                            <span></span>
                            <span></span>
                        </div>
                        <div onClick={() => setMenuState({ menuOpened: false })} className="hamburger-menu-close">
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)