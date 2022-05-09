import React from 'react'
import Logo from '../images/logo.png'
import { useState } from 'react'

const Navbar = (props) => {

    const [menu_contents, setmenu_contents] = useState(false)

    return (
        <div className='Navbar_container'>
            <div className='logo_menu'>
                <div className='nav_Logo_container'>
                    <a href='/'>
                        <img className='nav_logo_img' src={Logo} alt="The Thirsty Soul" id="logo" data-height-percentage="94" data-actual-width="150" data-actual-height="105" />
                    </a>
                </div>

                <div className="menu_container">
                <span className='menu' onClick={()=>{(menu_contents)?setmenu_contents(false):setmenu_contents(true)}} style={{color:`${props.color}`}}>Menu<i className="bi bi-filter-left"></i></span>
                <span className={`menu_contents ${(menu_contents)?'active':'inactive'}`}>
                    <ul>
                        <li>Home</li>
                        <li>Treatements</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </span>
                </div>
               
            </div>

            
        </div>

    )
}

export default Navbar