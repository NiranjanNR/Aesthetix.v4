import React from 'react'
import './AboutAes.css'
import Connecting from '../../../assets/connecting.jpg'
import one from '../../../assets/1.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'
import four from '../../../assets/4.png'
import five from '../../../assets/5.png'
import project1 from '../../../assets/project1.jpg';
import project2 from '../../../assets/project2.jpg';
import project3 from '../../../assets/project3.jpg';
import project4 from '../../../assets/project4.jpg';
import project5 from '../../../assets/project5.jpg';
import project6 from '../../../assets/project6.jpg';
import Footers from '../../MainPage/Footer/Footers'


const AboutAes = () => {
    return (
        <div className=''>
            <div className='WeImage'>
                <div className='overLay'></div>
                <div className='text-6xl text-white z-10'>We are Aesthetix</div>
                <div className='text-1xl text-white z-10 pt-3'> AV Innovation improving the way we work, learn and live.</div>
            </div>
            <div className='About'>
                <div className='text-3xl text-black my-5 z-10'>About Aesthetix</div>
                <div className='text-1xl text-black z-10'>
                    Avidex is passionate about delivering innovative audiovisual solutions enabling organizations and enterprises to collaborate, create, and share ideas through best-in-class audiovisual and unified communication technologies. Avidex specializes in creating unparalleled client experiences from strategic planning and system design through deployment, training, and managed services/support. Avidex serves a range of markets, including enterprise, education, government, and healthcare.
                </div>
            </div>
            <div className='flex flex-column p-14'>
                <div className='w-1/2'>
                    <div className='text-3xl text-black my-6'>Connecting People Through Innovation</div>
                    <div className='text-1xl text-black '>Working with Avidex means working with an award-winning team of AV industry professionals who have designed, engineered, and integrated thousands of innovative, custom audiovisual and communication solutions. Avidex has a large national presence, making us one of the top 10 largest AV integrators in the U.S.  Avidex is a wholly-owned subsidiary of ITOCHU International, Inc., a Fortune Global 500 corporation.</div>
                </div>
                <div>
                    <img src={Connecting} className='w-[500px]' />
                </div>
            </div>
            <div className='process'>
                {/* <div className='svg-container'>
                <svg
                    id="wave"
                    style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
                    viewBox="0 0 1440 200"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(0, 0, 0, 0.078)" offset="0%" />
                            <stop stopColor="rgba(0, 0, 0, 0.078)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,40L120,63.3C240,87,480,133,720,140C960,147,1200,113,1440,100C1680,87,1920,93,2160,83.3C2400,73,2640,47,2880,60C3120,73,3360,127,3600,150C3840,173,4080,167,4320,156.7C4560,147,4800,133,5040,136.7C5280,140,5520,160,5760,143.3C6000,127,6240,73,6480,73.3C6720,73,6960,127,7200,146.7C7440,167,7680,153,7920,130C8160,107,8400,73,8640,76.7C8880,80,9120,120,9360,120C9600,120,9840,80,10080,73.3C10320,67,10560,93,10800,103.3C11040,113,11280,107,11520,100C11760,93,12000,87,12240,76.7C12480,67,12720,53,12960,63.3C13200,73,13440,107,13680,110C13920,113,14160,87,14400,93.3C14640,100,14880,140,15120,150C15360,160,15600,140,15840,113.3C16080,87,16320,53,16560,43.3C16800,33,17040,47,17160,53.3L17280,60L17280,200L17160,200C17040,200,16800,200,16560,200C16320,200,16080,200,15840,200C15600,200,15360,200,15120,200C14880,200,14640,200,14400,200C14160,200,13920,200,13680,200C13440,200,13200,200,12960,200C12720,200,12480,200,12240,200C12000,200,11760,200,11520,200C11280,200,11040,200,10800,200C10560,200,10320,200,10080,200C9840,200,9600,200,9360,200C9120,200,8880,200,8640,200C8400,200,8160,200,7920,200C7680,200,7440,200,7200,200C6960,200,6720,200,6480,200C6240,200,6000,200,5760,200C5520,200,5280,200,5040,200C4800,200,4560,200,4320,200C4080,200,3840,200,3600,200C3360,200,3120,200,2880,200C2640,200,2400,200,2160,200C1920,200,1680,200,1440,200C1200,200,960,200,720,200C480,200,240,200,120,200L0,200Z"
                    />
                </svg>
            </div> */}
                <div className='text-3xl text-black flex align-center items-center justify-center'>Our Process</div>
                <div className='text-1xl text-black flex justify-center text-center'>Backed by the industry's most experienced and dedicated professionals, Avidex designs, builds, and supports custom audio visual and unified communications solutions for organizations of all kinds. </div>

                <div className='flex flex-wrap'>
                    <div className='flex flex-col md:flex-row  justify-center item-center'>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={one} className='h-[50px] w-[50px]' />
                            <div>We invest in listening and understanding your vision and requirements to help you best define your project scope for your needs today and for future expansion.</div>
                        </div>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={two} className='h-[50px] w-[50px]' />
                            <div>Our award-winning AV design and engineering experts recommend and design reliable, cost-effective AV and UC solutions to meet your objectives, timeline, and collaboration needs.</div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:w-full'>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={three} className='h-[50px] w-[50px]' />
                            <div>Our Professional Services team handles all aspects of your project from project management, procurement, logistics, installation, testing, documentation, and training for the best customer experience in the industry.</div>
                        </div>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={four} className='h-[50px] w-[50px]' />
                            <div>Avidex combines the best manufacturer-trained and certified industry professionals with our comprehensive 360° Service™ managed services portfolio to fully support our client’s complete audiovisual needs.</div>
                        </div>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={five} className='h-[50px] w-[50px]' />
                            <div>With over 17 years in the Pro AV business, much of our success comes from repeat clients. Avidex continues our valued partnerships by designing and integrating world-class audiovisual systems with excellence in design and innovation with a focus on integrity and quality.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='projectsSection'>
                <div>Types of Projects We Have Done</div>
                <div className="container">
                    <div className="projectBox" style={{ backgroundImage: `url(${project1})` }}>
                        <div className='overLay'></div>
                        <div className='absolute bottom-0 left-0 w-full p-4 text-2xl text-white z-10'>
                            Corporate</div>
                    </div>
                    <div className="projectBox" style={{ backgroundImage: `url(${project2})` }}>
                        <div className='overLay'></div>
                        <div className='absolute bottom-0 left-0 w-full p-4 text-2xl text-white z-10'>
                            Education</div>
                    </div>
                    <div className="projectBox" style={{ backgroundImage: `url(${project3})` }}>
                        <div className='overLay'></div>
                        <div className='absolute bottom-0 left-0 w-full p-4 text-2xl text-white z-10'>Government</div>
                    </div>
                    <div className="projectBox" style={{ backgroundImage: `url(${project4})` }}>
                        <div className='overLay'></div>
                        <div className='absolute bottom-0 left-0 w-full p-4 text-2xl text-white z-10'>House of Worship</div>
                    </div>
                    <div className="projectBox" style={{ backgroundImage: `url(${project5})` }}>
                        <div className='overLay'></div>
                        <div className='absolute bottom-0 left-0 w-full p-4 text-2xl text-white z-10'>Sports</div>
                    </div>
                    <div className="projectBox" style={{ backgroundImage: `url(${project6})` }}>
                        <div className='overLay'></div>
                        <div className='absolute bottom-0 left-0 w-full p-4 text-2xl text-white z-10'>Transportation</div>
                    </div>
                </div>
            </div>
            <div style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ position: 'relative', top: '0', width: '60px', height: '3px', backgroundColor: 'rgb(120, 68, 172)', borderRadius: '4px', margin: '10px' }}></div>

                <div className='helpHead'>
                    HOW CAN WE HELP ?
                </div>
                <div className='helpText'>
                    Connect with one of our audiovisual experts and start creating an unforgettable AV experience today!
                </div>
                <input type='button' className='TouchButton' value="GET IN TOUCH" />
            </div>
            <Footers />
        </div>
    )
}

export default AboutAes

