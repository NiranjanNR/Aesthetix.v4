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
import ContactTemplate from '../../ContentTemplate/ContactTemplate';

const AboutAes = () => {
    return (
        <div className='Main'>
            {/* Hero Section */}
            <div className='AboutImage relative'>
                <div className='overLay'></div>
                <div className='text-4xl sm:text-5xl text-white z-10 font-bold py-5 text-center'>WE ARE AESTHETIX</div>
                <div className='text-lg sm:text-2xl text-white z-10 pt-3 text-center'>AV Innovation improving the way we work, learn, and live.</div>
            </div>

            {/* About Section */}
            <div className='About text-center'>
                <div className='text-2xl sm:text-3xl my-5 z-10 font-bold primaryHeadings'>ABOUT AESTHETIX</div>
                <div className='text-[16px] sm:text-[18px] text-black z-10 px-4 sm:px-[60px] primaryParas'>
                    Aesthetix is passionate about delivering innovative audiovisual solutions enabling organizations and enterprises to collaborate, create, and share ideas through best-in-class audiovisual and unified communication technologies. Aesthetix specializes in creating unparalleled client experiences from strategic planning and system design through deployment, training, and managed services/support. Aesthetix serves a range of markets, including enterprise, education, government, and healthcare.
                </div>
            </div>

            {/* Connecting Section */}
            <div className='flex flex-col-reverse lg:flex-row p-[30px] sm:p-[100px] justify-between'>
                <div className='w-full lg:w-1/2'>
                    <div className='text-xl sm:text-2xl font-bold my-6 primaryHeadings'>CONNECTING PEOPLE THROUGH INNOVATION</div>
                    <div className='text-[16px] sm:text-[18px] primaryParas'>
                        Working with Aesthetix means working with an award-winning team of AV industry professionals who have designed, engineered, and integrated thousands of innovative, custom audiovisual and communication solutions. Aesthetix has a large national presence, making us one of the top 10 largest AV integrators in the U.S. Aesthetix is a wholly-owned subsidiary of ITOCHU International, Inc., a Fortune Global 500 corporation.
                    </div>
                </div>
                <div className='w-full lg:w-[500px] mb-6 lg:mb-0'>
                    <img src={Connecting} className='w-full lg:w-[500px]' />
                </div>
            </div>

            {/* Our Process Section */}
            <div className='process p-6 sm:p-[30px]'>
                <div className='py-[30px] sm:py-[60px]'>
                    <div className='text-xl sm:text-2xl font-bold flex align-center items-center justify-center primaryHeadings'>OUR PROCESS</div>
                    <div className='text-[16px] sm:text-[18px] text-black flex justify-center text-center primaryParas py-[10px] sm:py-[20px] px-[auto]'>Backed by the industry's most experienced and dedicated professionals, Aesthetix designs, builds, and supports custom audio visual and unified communications solutions for organizations of all kinds.</div>
                </div>
                
                <div className='flex flex-wrap'>
                    <div className='flex flex-col md:flex-row justify-center item-center'>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={one} className='h-[40px] w-[40px]' />
                            <div className='py-[10px] primaryHeadings font-bold text-[1.125rem]'>Define</div>
                            <div className='text-center primaryParas text-[16px] sm:text-[18px]'>We invest in listening and understanding your vision and requirements to help you best define your project scope for your needs today and for future expansion.</div>
                        </div>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={two} className='h-[40px] w-[40px]' />
                            <div className='py-[10px] primaryHeadings font-bold text-[1.125rem]'>Design</div>
                            <div className='text-center primaryParas text-[16px] sm:text-[18px]'>Our award-winning AV design and engineering experts recommend and design reliable, cost-effective AV and UC solutions to meet your objectives, timeline, and collaboration needs.</div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row w-full py-[30px]'>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={three} className='h-[40px] w-[40px]' />
                            <div className='py-[10px] primaryHeadings font-bold text-[1.125rem]'>Build</div>
                            <div className='text-center primaryParas text-[16px] sm:text-[18px]'>Our Professional Services team handles all aspects of your project from project management, procurement, logistics, installation, testing, documentation, and training for the best customer experience in the industry.</div>
                        </div>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={four} className='h-[40px] w-[40px]' />
                            <div className='py-[10px] primaryHeadings font-bold text-[1.125rem]'>Support</div>
                            <div className='text-center primaryParas text-[16px] sm:text-[18px]'>Aesthetix combines the best manufacturer-trained and certified industry professionals with our comprehensive 360° Service™ managed services portfolio to fully support our client’s complete audiovisual needs.</div>
                        </div>
                        <div className='flex flex-1 p-2 flex-col justify-center items-center'>
                            <img src={five} className='h-[40px] w-[40px]' />
                            <div className='py-[10px] primaryHeadings font-bold text-[1.125rem]'>Repeat</div>
                            <div className='text-center primaryParas text-[16px] sm:text-[18px]'>With over 17 years in the Pro AV business, much of our success comes from repeat clients. Aesthetix continues our valued partnerships by designing and integrating world-class audiovisual systems with excellence in design and innovation with a focus on integrity and quality.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className='projectsSection'>
                <div className='p-6 sm:p-[40px] flex flex-col justify-center items-center'>
                    <div className='primaryHeadings text-xl sm:text-2xl font-bold py-[15px]'>TYPES OF PROJECTS WE HAVE DONE</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container">
                        <div className="projectBox relative" style={{ backgroundImage: `url(${project1})` }}>
                            <div className='overLay rounded-lg'></div>
                            <div className='absolute bottom-0 left-0 w-full p-4 text-xl sm:text-2xl text-white z-10'>Corporate</div>
                        </div>
                        <div className="projectBox relative" style={{ backgroundImage: `url(${project2})` }}>
                            <div className='overLay rounded-lg'></div>
                            <div className='absolute bottom-0 left-0 w-full p-4 text-xl sm:text-2xl text-white z-10'>Hospitality</div>
                        </div>
                        <div className="projectBox relative" style={{ backgroundImage: `url(${project3})` }}>
                            <div className='overLay rounded-lg'></div>
                            <div className='absolute bottom-0 left-0 w-full p-4 text-xl sm:text-2xl text-white z-10'>Government</div>
                        </div>
                        <div className="projectBox relative" style={{ backgroundImage: `url(${project4})` }}>
                            <div className='overLay rounded-lg'></div>
                            <div className='absolute bottom-0 left-0 w-full p-4 text-xl sm:text-2xl text-white z-10'>Education</div>
                        </div>
                        <div className="projectBox relative" style={{ backgroundImage: `url(${project1})` }}>
                            <div className='overLay rounded-lg'></div>
                            <div className='absolute bottom-0 left-0 w-full p-4 text-xl sm:text-2xl text-white z-10'>Entertainment</div>
                        </div>
                        <div className="projectBox relative" style={{ backgroundImage: `url(${project5})` }}>
                            <div className='overLay rounded-lg'></div>
                            <div className='absolute bottom-0 left-0 w-full p-4 text-xl sm:text-2xl text-white z-10'>Retail</div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <ContactTemplate />
            <Footers />
        </div>
    )
}

export default AboutAes
