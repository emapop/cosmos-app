import React from 'react';
import './Navbar.css'
import CosmosLogo from '../assets/nav-cosmos-logo.png';
import BascketLogo from '../assets/nav-bascket-logo.png';
import HomeLogo from '../assets/nav-home-logo.png';
import MoonLogo from '../assets/nav-moon-logo.png';
import SpaceshipLogo from '../assets/nav-spaceship-logo.png';

const Navbar:React.FunctionComponent = () => {

    return (
        <div className='nav-container'>
            <div className='nav-content-position'>
                <div className='nav-main-logo'>
                    <img className ='nav-cosmos-logo'src={CosmosLogo} alt='cosmos logo' />
                </div>
                <div className='nav-content-position nav-content-margin'>
                <img className='nav-logo-menu nav-space' src={HomeLogo} alt='home logo'/>
                <a  href=''>Home</a>
                </div>
                <div className='nav-content-position nav-content-margin'>
                <img className='nav-logo-menu nav-space' src={MoonLogo} alt='home logo'/>
                <a  href=''>Destintion</a>
                </div>
                <div className='nav-content-position nav-content-margin'>
                <img className='nav-logo-menu nav-space' src={SpaceshipLogo} alt='home logo'/>
                <a href=''>Spaceship</a>
                </div>
               
            </div>

            <div className='nav-content-position'>
                <img className='nav-logo-menu nav-space' src={BascketLogo} alt='basket logo'/>
                <a href=''>0</a>
            </div>
        </div>
    )
}

export default Navbar;