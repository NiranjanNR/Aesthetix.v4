import './Study.css'
import Footers from '../../Footer/Footers';

const CaseStudy1 = () =>{
    return(
        <div style={{fontFamily: 'Open Sans'}}>
            <div className="header-study">

                <div style={{display: 'flex', zIndex: '100', justifyContent: 'center', flexDirection: 'column', height: '100%', paddingLeft: '50px'}}>
                    <div className="heading1">CASE STUDY</div>
                    <div className='heading2'>GEMS Education</div>
                </div>

                <div className='over-lay'></div>
            </div>

            <div className='h-[30vh] flex justify-center items-center mx-[50px]'>
                <div className='italic text-lg justify-center flex align-middle text-justify' style={{color: '#6d2950'}}>
                GEMS Education is a global advisory and educational management firm, operating one of the largest networks of K-12 schools worldwide, with over 70 campuses across multiple countries. Aesthetix was awarded the project to design, supply, and install Smart Classroom solutions across GEMS campuses over a two-year period, spanning over 50 campuses.                </div>
            </div>

            <div>
            <div className="waves top-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{width: '100vw', height:'150px'}}>
                    <path fill="rgb(243, 232, 253)"  d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
            </div>

            <div className='flex flex-col ' style={{backgroundColor: '#f3e8fd'}}>
                <div className='flex flex-row justify-center align-middle'>
                    <img className="wow fadeIn" src="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Healthcare/640x480/NY-Methodist-Hospital-2016-photo-from-hospital.jpg?width=640&amp;height=480&amp;name=NY-Methodist-Hospital-2016-photo-from-hospital.jpg" alt="NY-Methodist-Hospital-2016-photo-from-hospital" loading="lazy" width="640" height="480" sizes="(max-width: 640px) 100vw, 640px" style={{width: '400px'}}/>

                    <div className='flex flex-col mx-[40px] justify-center' > 
                        <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>
                        SOLUTIONS IMPLEMENTED
                        </div>

                        <div style={{fontSize: '18px', color: '#444444', margin: '10px'}}>
                        <ul className='marker:text-green list-outside list-disc'>
                            <li>Installation of 75” Interactive displays with proprietary bidirectional wireless mirroring software</li>
                            <li>BYOD mirroring software for collaborative, controlled content sharing</li>
                            <li>eLearning and Blended Learning support with integrated Android and Windows modules</li>
                            <li>Interactive and collaborative classroom software</li>
                            <li>Telepresence system in selected classrooms with PTZ camera integration</li>
                            <li>Mobile Device Management (MDM) for remote display management</li>
                            <li>Digital Signage application for campus-wide announcements</li>
                            <li>Acoustic treatments for optimized sound quality</li>
                            <li>Custom stainless steel wall panels with HDMI & USB connectivity options</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="waves bottom-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{width: '100vw', height:'150px'}}>
                    <path fill="rgb(243, 232, 253)"  d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
            </div>
            </div>


           

            <div className='h-[20vh] flex justify-center mx-[50px] flex-col'>
                <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>CHALLENGE</div>
                <div style={{fontSize: '18px', color: '#444444', padding: '10px 0px'}}>
                To implement and coordinate the installation of over 5000 Smart Classrooms across 52 GEMS campuses in the UAE and Qatar, while adhering to a tight timeline and ensuring consistency and quality across the extensive deployment.
                </div>
            </div>

            <div className='h-[100%] flex justify-center mx-[50px] flex-col'>
                <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>SOLUTIONS</div>

                <div style={{fontSize: '18px', color: '#444444', padding: '10px 0px'}}>
                1.75” Interactive Displays with Wireless Mirroring
                Each Smart Classroom is equipped with 75” interactive displays featuring proprietary bidirectional wireless mirroring software. This solution supports Bring Your Own Device (BYOD) functionality, allowing teachers to control what is shared and enabling up to four devices to be displayed simultaneously, fostering a highly interactive environment.
                <br /><br />
                2.BYOD Mirroring Software
The mirroring software allows teachers to share multiple device screens simultaneously, increasing engagement and collaboration within sessions. This feature enhances lesson flexibility and allows for dynamic content sharing from student devices.
        <br /><br />
                    3.eLearning and Blended Learning Support
With Android and Windows modules integrated into the displays, the Smart Classroom setup facilitates eLearning and blended learning options, enabling teachers to access educational apps and online resources directly through the display.
                <br /><br />
                4.Interactive and Collaborative Software
Classrooms are equipped with intuitive educational software that promotes engagement through interactivity, making each session more immersive and participatory for students.
                <br /><br />
                5.Telepresence System in Select Classrooms
In selected classrooms, telepresence systems were implemented by integrating PTZ cameras. This allows for live remote sessions and enhanced interaction, especially beneficial for distance learning.
                    <br /><br />
                    6.Mobile Device Management (MDM)
                    MDM software integrated into the displays enables IT staff to manage and monitor devices remotely. This centralized control supports quick troubleshooting, updates, and display management across the network.
                    <br /><br />
                    7.Digital Signage Application
Digital signage was implemented across classrooms and common areas, enabling centralized announcements and information display for the entire campus.
                <br /><br />
                8.Acoustic Treatments
To ensure sound quality in each classroom, certified consultants acoustically treated the spaces, optimizing audio delivery and reducing background noise for a clearer learning experience.
                <br /><br />
                9.Custom Wall Panels for HDMI & USB Connectivity
Custom stainless steel wall panels were installed near teacher tables to provide reliable wired HDMI and USB connectivity, serving as a backup for content display when necessary.
                </div>
            </div>
            
            <div  className='h-[100%] flex justify-center mx-[50px] flex-col'>
                <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>Results</div>
                <div style={{fontSize: '18px', color: '#444444', padding: '10px 0px'}}>
                Over 5000 Smart Classrooms were successfully deployed across GEMS campuses in the UAE and Qatar, adhering to the stringent project timeline. The AV solutions have transformed the learning experience, making it more interactive, flexible, and collaborative. Teachers now have complete control over content sharing, and IT personnel can manage devices remotely, ensuring smooth and efficient operations. The installation has greatly enhanced GEMS Education’s digital learning infrastructure, supporting modern educational needs and fostering a more engaging classroom environment.
                </div>
            </div>

            <Footers />
            
        </div>
    )
   
}

export default CaseStudy1