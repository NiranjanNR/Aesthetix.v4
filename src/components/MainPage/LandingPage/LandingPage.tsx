import './LandingPage.css'
import Aes from '../../../assets/aes.mp4'
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

            

            {/* <img src={Room} /> */}
            {/* <div className="container-land">
                <div className="text-container">
                    <div>
                        <div className="background-box"></div>
                        <div className="text-content" alt="first">
                            <div>
                                <div className='text-1'>Helping People Communicate</div>
                                <div className='text-2'>Complete Technology Solutions Provider</div>
                                <div className='btns'>
                                    <button type="submit" className="submit-btnk">What We Do</button>
                                    <button type="submit" className="submit-btns submit-btnc">See Our Work</button>
                                    <button type="submit" className="submit-btns1 su submit-btn margine">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <Partners />
        <Footers />


        </div>
        
    )
}

export default LandingPage
