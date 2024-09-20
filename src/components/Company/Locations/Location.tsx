// import './Location.css'
// import Dubai from '../../../assets/dubai.jpg'
// import ContentTemplate from '../../ContentTemplate/ContentTemplate'
// import WorldImg from '../../../assets/worlds.jpg'

// const Location = () =>{
//     return(
//         <div>
//             <div className='locationCover'>
//                 <div className='overLays'>
//                     <div className='text-4xl text-white font-bold py-[15px]'>OUR LOCATIONS</div>
//                     <div className='text-1xl text-white font-medium text-center' >Avidex delivers innovative AV solutions that enable organizations and enterprises to collaborate, create, and share ideas through state-of-the-art audiovisual and unified communication technologies. Avidex specializes in creating an unparalleled client experience in the use of collaborative audiovisual solutions as a global pro-AV integrator providing design, build, and service excellence.</div>
//                 </div>
//             </div>

//             <div className='locationInfo'>

//                 <div className='LocationCard'>
//                     <img src={Dubai} className='LocationCardImage'/>
//                     <div className='LocationCardText'>
//                         <div className='text-1xl font-bold py-[5px]'>DUBAI,<br/> UNITED ARAB EMIRATES</div>
//                         <div className='text-[16px] font-medium py-[5px]'>123 26th St<br/> Al Quoz Industrial Area 4</div>
//                         <div className='text-[14px] font-bold py-[5px]'> 04 320 9096</div>
//                     </div>
//                 </div>

//                 <div className='LocationCard'>
//                     <img src={Dubai} className='LocationCardImage'/>
//                     <div className='LocationCardText'>
//                         <div className='text-1xl font-bold py-[5px]'>DUBAI,<br/> UNITED ARAB EMIRATES</div>
//                         <div className='text-[16px] font-medium py-[5px]'>123 26th St<br/> Al Quoz Industrial Area 4</div>
//                         <div className='text-[14px] font-bold py-[5px]'> 04 320 9096</div>
//                     </div>
//                 </div>

//                 <div className='LocationCard'>
//                     <img src={Dubai} className='LocationCardImage'/>
//                     <div className='LocationCardText'>
//                         <div className='text-1xl font-bold py-[5px]'>DUBAI,<br/> UNITED ARAB EMIRATES</div>
//                         <div className='text-[16px] font-medium py-[5px]'>123 26th St<br/> Al Quoz Industrial Area 4</div>
//                         <div className='text-[14px] font-bold py-[5px]'> 04 320 9096</div>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <div className="waves top-waves">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
//                     <path fill="rgb(243, 232, 253)"  d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//                     </svg>
//                 </div>
                
//                 <div className='supportDesign'>
//                     <div className='primaryH text-3xl font-bold'>NEED SUPPORT ?</div>
//                     <div className='primaryP text-[18px] py-[15px]'>Call our Service & Support team at <span className='primaryH'>800.497.7104</span>
//                     <br />or submit a service request.</div>

//                     <button type="button" className="text-white font-medium rounded-md text-sm px-5 py-3.5 me-2 mb-2 " style={{backgroundColor: 'rgb(45 30 75)'}}>SUBMIT A SERVICE REQUEST</button>
                    
//                 </div>
                
//                 <div className="waves bottom-waves">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
//                     <path fill="rgb(243, 232, 253)"  d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//                     </svg>
//                 </div>
//             </div>

//             <div>
//         <ContentTemplate direction='left' heading='PSNI ALLIANCE' description='Aesthetix is proud to serve our global clients throughout North America, South America, Europe, Asia, and the Middle East. Avidex is a member of PSNI Global Alliance, a certified network of global technology providers and AV integrators delivering consistent service and support worldwide. We offer a combined talent pool of thousands of premier integrators committed to forward-thinking education, resources, collaboration, and support.'
//          imagepath={WorldImg} 
//          style={{ width: '100% !important', height: 'auto' }} // Pass style as an object
//          />
//       </div>
//         </div>
//     )
// }

// export default Location;


import './Location.css';
import Dubai from '../../../assets/dubai.jpg';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import WorldImg from '../../../assets/worlds.jpg';

const Location = () => {
    return (
        <div>
            {/* Location Cover Section */}
            <div className='locationCover relative'>
                <div className='overLays'>
                    <div className='text-2xl sm:text-4xl text-white font-bold py-3'>OUR LOCATIONS</div>
                    <div className='text-sm sm:text-xl text-white font-medium max-w-3xl'>
                        Avidex delivers innovative AV solutions that enable organizations and enterprises to collaborate, create, and share ideas through state-of-the-art audiovisual and unified communication technologies. Avidex specializes in creating an unparalleled client experience in the use of collaborative audiovisual solutions as a global pro-AV integrator providing design, build, and service excellence.
                    </div>
                </div>
            </div>

            {/* Location Info Section */}
            <div className='locationInfo flex flex-wrap justify-center items-center gap-6 py-10 px-4 sm:px-10'>
                {/* Location Cards */}
                {[...Array(3)].map((_, index) => (
                    <div key={index} className='LocationCard w-full sm:w-1/3 p-4'>
                        <img src={Dubai} className='LocationCardImage w-full h-48 object-cover rounded-md' alt='Dubai' />
                        <div className='LocationCardText mt-4'>
                            <div className='text-lg sm:text-xl font-bold py-2'>
                                DUBAI,<br /> UNITED ARAB EMIRATES
                            </div>
                            <div className='text-sm sm:text-base font-medium py-2'>
                                123 26th St<br /> Al Quoz Industrial Area 4
                            </div>
                            <div className='text-sm sm:text-base font-bold py-2'>04 320 9096</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Support Section with Waves */}
            <div className='relative'>
                {/* Top Waves */}
                <div className="waves top-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="rgb(243, 232, 253)" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                {/* Support Design */}
                <div className='supportDesign text-center py-10'>
                    <div className='primaryH text-2xl sm:text-3xl font-bold'>NEED SUPPORT?</div>
                    <div className='primaryP text-base sm:text-lg py-4'>
                        Call our Service & Support team at <span className='primaryH'>800.497.7104</span><br />or submit a service request.
                    </div>
                    <button
                        type="button"
                        className="text-white font-medium rounded-md text-sm px-5 py-3.5 mt-4"
                        style={{ backgroundColor: 'rgb(45 30 75)' }}
                    >
                        SUBMIT A SERVICE REQUEST
                    </button>
                </div>

                {/* Bottom Waves */}
                <div className="waves bottom-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="rgb(243, 232, 253)" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>
            </div>

            {/* PSNI Alliance Section */}
            <div>
                <ContentTemplate
                    direction='left'
                    heading='PSNI ALLIANCE'
                    description='Aesthetix is proud to serve our global clients throughout North America, South America, Europe, Asia, and the Middle East. Avidex is a member of PSNI Global Alliance, a certified network of global technology providers and AV integrators delivering consistent service and support worldwide. We offer a combined talent pool of thousands of premier integrators committed to forward-thinking education, resources, collaboration, and support.'
                    imagepath={WorldImg}
                    style={{ width: '100% !important', height: 'auto' }} // Pass style as an object
                />
            </div>
        </div>
    );
};

export default Location;
