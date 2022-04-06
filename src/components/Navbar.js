import React from 'react'
import Logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className='Navbar_container'>
            <div className='nav_Logo_container'>
                <a href='/'>
                    <img className='nav_logo_img' src={Logo} alt="The Thirsty Soul" id="logo" data-height-percentage="94" data-actual-width="150" data-actual-height="105" />
                </a>
            </div>

            <ul className='nav_ul_container'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
            
        </div>
    )
}

export default Navbar