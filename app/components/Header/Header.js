import React from 'react'
import './Header.css'
import Image from 'next/image'
import Icon from '../../images/logo.svg'
import '../../globals.css';


const Header = () => {
    return (
        <header className="headerBank wrapper">

            <div className='icon'>
                <Image src={Icon} height={200} width={200} />

            </div>


            <div className="centerNav">
                <ul>
                    <li> Home </li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className='right'>
                <button> Send Invite</button>
            </div>

        </header>
    )
}

export default Header
