import './Study.css'
import Footers from '../../Footer/Footers';

const CaseStudy1 = () =>{
    return(
        <div style={{fontFamily: 'Open Sans'}}>
            <div className="header-study3">

                <div style={{display: 'flex', zIndex: '100', justifyContent: 'center', flexDirection: 'column', height: '100%', paddingLeft: '50px'}}>
                    <div className="heading1">CASE STUDY</div>
                    <div className='heading2'>Smart Dubai Office</div>
                </div>

                <div className='over-lay'></div>
            </div>

            <div className='h-[30vh] flex justify-center items-center mx-[50px]'>
                <div className='italic text-lg justify-center flex align-middle text-justify' style={{color: '#6d2950'}}>
                The Smart Dubai Office (SDO) collaborates with private sector and government partners to lead Dubai’s citywide smart transformation, creating a more efficient, seamless, and impactful city experience. Aesthetix was appointed to design and integrate advanced AV solutions for SDO’s new office at Dubai Design District
                </div>
            </div>

            <div>
            <div className="waves top-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{width: '100vw', height:'150px'}}>
                    <path fill="rgb(243, 232, 253)"  d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
            </div>

            <div className='flex flex-col ' style={{backgroundColor: '#f3e8fd'}}>
                <div className='flex flex-row justify-center align-middle'>
                    <img className="wow fadeIn" src="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Healthcare/640x480/NY-Methodist-Hospital-2016-photo-from-hospital.jpg?width=640&amp;height=480&amp;name=NY-Methodist-Hospital-2016-photo-from-hospital.jpg" alt="NY-Methodist-Hospital-2016-photo-from-hospital" loading="lazy" width="640" height="480"  sizes="(max-width: 640px) 100vw, 640px" style={{width: '400px'}}/>

                    <div className='flex flex-col mx-[40px] justify-center' > 
                        <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>
                        SOLUTIONS IMPLEMENTED
                        </div>

                        <div style={{fontSize: '18px', color: '#444444', margin: '10px'}}>
                        <ul className='marker:text-green list-outside list-disc'>
                            <li>Virtual Reception (VR) solution with SMS and email integration</li>
                            <li>86” interactive NEC display with Barco CSE-800 for main boardroom</li>
                            <li>Cisco video conferencing and ceiling microphones</li>
                            <li>Crestron control system for centralized AV management</li>
                            <li>Bose ceiling speakers with Clearone IP amplifiers for flexible audio zoning</li>
                            <li>Large format displays and Barco CSE-800 for select meeting rooms</li>
                            <li>Crestron room booking panels for efficient room management</li>
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
                To create a cohesive AV infrastructure that enhances visitor experience, supports collaborative meetings, and provides effective space management, all while seamlessly integrating with Smart Dubai Office’s systems.
                </div>
            </div>

            <div className='h-[100%] flex justify-center mx-[50px] flex-col'>
                <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>SOLUTIONS</div>

                <div style={{fontSize: '18px', color: '#444444', padding: '10px 0px'}}>
                1.Virtual Reception (VR) Solution
Aesthetix developed an interactive Virtual Reception system that welcomes visitors at the reception lobby. The VR solution includes a display powered by a backend player, integrated with SDO’s SMS gateway and email server. Upon arrival, visitors enter the employee’s details, triggering an automatic SMS and email notification to the respective employee. The VR display also guides visitors by showing the office layout and route to the nearest available meeting room.
                <br /><br />
                2.Interactive Video Walls with Video Conferencing
                    Dubai Hub – The Yard: An interactive video wall was installed, integrated with Webex video conferencing, enabling participants to hold live, interactive sessions with remote participants worldwide, fostering collaboration and engagement.
                    Abu Dhabi Hub: A 5x3 interactive video wall and a 3x3 standard video wall were installed to enhance the visual experience, providing flexible options for presentations, training sessions, and dynamic digital displays.
                    <br /><br />
                    3.Bose Ceiling Speakers and Audio Zoning
Throughout the office, Bose ceiling speakers paired with Clearone IP amplifiers provide audio coverage. The system allows individual speaker control, with the flexibility to group speakers into specific zones. This setup ensures optimal audio distribution for announcements and background music across designated areas.
                    <br /><br />
                    4.Meeting Rooms with Display and Wireless Presentation
Some meeting rooms were equipped with large format displays and Barco CSE-800 devices, enabling users to present wirelessly. This streamlined setup facilitates quick, seamless presentations directly from laptops, improving the efficiency and convenience of meetings.
                 <br /><br />
                 5.Visitor Management and Building Management Integration
The VR solution is also integrated with the Building Management System (BMS), displaying live office energy consumption data. This feature enhances the visitor experience by providing real-time environmental data.
                <br /><br />
                6.Crestron Room Booking Panels
Each meeting room is equipped with a Crestron room booking panel to streamline room scheduling and encourage efficient space management. The system allows employees to easily view availability and reserve meeting spaces, ensuring optimal use of the office’s facilities.
                <br /><br />
                </div>
            </div>
            
            <div  className='h-[100%] flex justify-center mx-[50px] flex-col'>
                <div className=' justify-start font-semibold' style={{fontSize: '19px',color: '#6d2950'}}>Results</div>
                <div style={{fontSize: '18px', color: '#444444', padding: '10px 0px'}}>
                The implemented solutions transformed Smart Dubai Office’s workspace into a highly connected, user-friendly environment. Visitors enjoy a seamless check-in experience with guided navigation, while staff benefit from intuitive AV systems that streamline presentations and video conferencing. The room booking panels have improved meeting room utilization, and the VR system provides valuable energy consumption insights, aligning with SDO’s smart city objectives. 
                </div>
            </div>

            <Footers />
            
        </div>
    )
   
}

export default CaseStudy1