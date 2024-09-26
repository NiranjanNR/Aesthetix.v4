import './ProjectProfile.css'
import Dubai from '../../../assets/dubai.jpg'
import ContentTemplate from '../../ContentTemplate/ContentTemplate'
import WorldImg from '../../../assets/worlds.jpg'

const ProjectProfile = () =>{
    return(
        <div>
            <div className='locationCover'>
                {/* <div className='overLays'> */}
                    <div className='text-4xl text-white font-semibold py-[15px]'>PROJECT PROFILES</div>
                {/* </div> */}
            </div>

            <div className='locationInfo'>

                  {/* Section for title and description */}
            <div className="projects-section">
                <h2 className="sectiontitle">INSPIRING AUDIOVISUAL INSTALLATIONS</h2>
                <p className="sectionDescription">
                    We believe our work speaks for itself. View our projects to see how leaders in the corporate, healthcare, and education markets have partnered with Avidex for audiovisual solutions that change the way they work, learn, and live.
                </p>
                <hr className="0" />
                <h3 className="projects-title">PROJECTS BY MARKET</h3>
            </div>

            <div className="market-filter">
                <a href="#" className="filter-link active">ALL</a>
                <a href="#" className="filter-link">CORPORATE</a>
                <a href="#" className="filter-link">HEALTHCARE</a>
                <a href="#" className="filter-link">EDUCATION</a>
                <a href="#" className="filter-link">HOSPITALITY</a>
                <a href="#" className="filter-link">FINANCIAL SERVICES</a>
            </div>

            <div className="project-gallery">
                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>

                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>

                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>
            </div>

            <div className="project-gallery">
                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>

                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>

                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>
            </div>

            
            <div className="project-gallery">
                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>

                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>

                <div className="LocationCard">
                    <img src={Dubai} className="LocationCardImage"/>
                    <div className="overlay">Immersive Experience Center</div>
                </div>
            </div>

            </div>
            
            <hr className="divider" />

            <div className="gallery">
                <h2 className="section-title">Project Gallery</h2>
                </div> 

                 
                <div className="image-gallery">
                    <div className="image-container">
                        <img src={Dubai} />
                    </div>
                    <div className="image-container">
                        <img src={Dubai} />
                    </div>
                    <div className="image-container">
                        <img src={Dubai} />
                    </div>
                    <div className="image-container">
                        <img src={Dubai} />
                    </div>
                    <div className="image-container">
                        <img src={Dubai} />
                    </div>
                    <div className="image-container">
                        <img src={Dubai} />
                    </div>
                    
                </div>

            <div>
                <div className="waves top-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="rgb(243, 232, 253)"  d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                
                <div className='supportDesign'>
                    <div className='primaryH text-3xl font-bold'>NEED SUPPORT ?</div>
                    <div className='primaryP text-[18px] py-[15px]'>Call our Service & Support team at <span className='primaryH'>800.497.7104</span>
                    <br />or submit a service request.</div>

                    <button type="button" className="text-white font-medium rounded-md text-sm px-5 py-3.5 me-2 mb-2 " style={{backgroundColor: 'rgb(45 30 75)'}}>SUBMIT A SERVICE REQUEST</button>
                    
                </div>
                
                <div className="waves bottom-waves">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="rgb(243, 232, 253)"  d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>
            </div>

            <div>
        <ContentTemplate direction='left' heading='PSNI ALLIANCE' description='Aesthetix is proud to serve our global clients throughout North America, South America, Europe, Asia, and the Middle East. Avidex is a member of PSNI Global Alliance, a certified network of global technology providers and AV integrators delivering consistent service and support worldwide. We offer a combined talent pool of thousands of premier integrators committed to forward-thinking education, resources, collaboration, and support.'
         imagepath={WorldImg} 
         style={{ width: '100% !important', height: 'auto' }} // Pass style as an object
         />
      </div>
        </div>
    )
}

export default ProjectProfile;