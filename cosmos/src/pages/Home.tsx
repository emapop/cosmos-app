import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import './Home.scss'

const Home :React.FunctionComponent = () => {

    return (
        <div className='home-component'>
        <Navbar/>
        <Slider/>
        </div>
    )
}

export default Home;