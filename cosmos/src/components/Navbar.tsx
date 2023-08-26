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
                <img className='nav-home-logo nav-space' src={HomeLogo} alt='home logo'/>
                <p>Home</p>
                </div>
                <div className='nav-content-position nav-content-margin'>
                <img className='nav-home-logo nav-space' src={MoonLogo} alt='home logo'/>
                <p>Destintion</p>
                </div>
                <div className='nav-content-position nav-content-margin'>
                <img className='nav-home-logo nav-space' src={SpaceshipLogo} alt='home logo'/>
                <p>Spaceship</p>
                </div>
               
            </div>

            <div className='nav-content-position'>
                <img className='nav-bascket nav-space' src={BascketLogo} alt='basket logo'/>
                <p>0</p>
            </div>
        </div>
    )
}

export default Navbar;