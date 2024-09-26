import './LandingPage.css'
import Aes from '../../../assets/aes.mp4'
import AboutUs from '../AboutUs/About'
import Partners from '../Partner/Partners'
import Footers from '../Footer/Footers'

const LandingPage = () => {
    return (
        <div>
            <div className='video-background'>
             <video autoPlay loop muted className='background-video'>
                <source src={Aes} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            </div>
            <AboutUs />
            <Partners />
            <Footers/>
        </div>
        
    )
}

export default LandingPage
