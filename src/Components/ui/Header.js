import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <Link to='/home'>
            <header className='center'>
                <img src={logo} alt='' />
            </header >
        </Link>
    )
}

export default Header




