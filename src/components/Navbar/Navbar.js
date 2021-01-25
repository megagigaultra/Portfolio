import React from 'react'
import { Link } from 'react-router-dom'

import { RiSearch2Line } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'

import { ReactComponent as Logo } from '../../assets/svg/din.svg'


function Navbar() {
    return (
        <>
                <div className="navbar">
                    <div className="media">
                        <div className="container">
                            <div className="navbar-logo">
                                <Link to='/' className="nav-links">
                                    <Logo className="navbar-icon" />
                                </Link>
                            </div>
                            <IconContext.Provider value={{ color: '#fff'}}>
                                <ul className="navbar-social">
                                    <li className="nav-item last">
                                        <Link to='/' className="nav-links">
                                            <RiSearch2Line className="search-icon" />
                                        </Link>
                                    </li>
                                </ul>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Navbar
