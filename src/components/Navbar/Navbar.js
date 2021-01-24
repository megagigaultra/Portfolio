import React from 'react'
import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'
import { RiSearch2Line } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'

import { ReactComponent as Logo } from '../../assets/svg/fonty.svg'


function Navbar() {
    return (
        <>
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-logo">
                            <Link to='/' className="nav-links">
                                <Logo className="navbar-icon" />
                            </Link>
                        </div>
                        <IconContext.Provider value={{ color: '#fff'}}>
                            <ul className="navbar-social">
                                {/* <li className="nav-item first">
                                    <Link to='/' className="nav-links">
                                        <SiTwitter className="navbar-icon" />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/' className="nav-links">
                                        <FaGithub className="navbar-icon" />
                                    </Link>
                                </li> */}
                                <li className="nav-item last">
                                    <Link to='/' className="nav-links">
                                        <p className="search-text">Search Fonty</p>
                                    </Link>
                                </li>
                                <li className="nav-item last">
                                    <Link to='/' className="nav-links">
                                        <RiSearch2Line className="search-icon" />
                                    </Link>
                                </li>
                            </ul>
                        </IconContext.Provider>
                    </div>
                </div>
            
        </>
    )
}

export default Navbar
