import './LandingPage.css'
import Aes from '../../../assets/aesthexvideo.mp4'
import AboutUs from '../AboutUs/About'

const LandingPage = () => {
    return (
        <div>
            <div className='video-background h-[92vh]'>
             <video autoPlay loop muted className='background-video'>
                <source src={Aes} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            </div>
            <AboutUs />
        </div>
    )
}

export default LandingPage
