import React from 'react'
import { Link } from 'react-scroll'
import './styles/Header.css'


const Header = () => {
    return(
        <div className='header'>
            <nav>
                <div className='logo'>
                    <h1>
                        Warung Normal
                    </h1>
                </div>

                <ul className='ul-navbar'>
                    <li>
                        <Link to='home' spy={true} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link to='about' spy={true} smooth={true}>About</Link>
                    </li>
                    <li>
                        <Link to='product' spy={true} smooth={true}>Product</Link>
                    </li>
                    <li>
                        <Link to='voucher' spy={true} smooth={true}>Voucher</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header