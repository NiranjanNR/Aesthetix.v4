import React from 'react'
import './LandingPage.css'
import NavBar from '../../Nav/Nav'
import Aes from '../../assets/aes.mp4'
import Room from '../../assets/room.jpg'
import AboutUs from '../AboutUs/About'
import Partners from '../Partner/Partners'

const LandingPage = () => {
    return (
        <div>
            <div className='video-background'>

            </div>
            <AboutUs />
            <Partners />
        </div>
        
    )
}

export default LandingPage
