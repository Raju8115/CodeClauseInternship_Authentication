import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return(

        <div className='container'>
            <div className='header-text'>
                <h1>Welcome to Sign in Page</h1>
            </div>
            <ul className='lists-container'>
            <li className='list-1'>
                <Link to='/' className='li'>Home</Link>
            </li>
            <li className='list-2'>
                <Link to='/login' className='li'>Sign in </Link>
            </li>
        </ul>
        </div>
    )
}

export default Navbar;