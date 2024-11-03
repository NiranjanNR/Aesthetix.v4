import './ProjectProfile.css'
import Footers from '../../Footer/Footers'
import caseImage1 from '../../../assets/caseImage1.jpeg'
import caseImage2 from '../../../assets/caseImage2.jpeg'
import caseImage3 from '../../../assets/caseImage3.jpeg'
import caseImage4 from '../../../assets/caseImage4.jpeg'
import caseImage5 from '../../../assets/caseImage5.jpeg'
import caseImage6 from '../../../assets/caseImage6.jpeg'
import caseImage7 from '../../../assets/caseImage7.jpeg'
import caseImage8 from '../../../assets/caseImage8.jpeg'
import caseImage9 from '../../../assets/caseImage9.jpeg'
import ProfileCard from '../../ContentTemplate/ProfileCard'

const ProjectProfile = () =>{
    
    return(
        <div>
             <div
                className='locationCoverProject'
                >
                <div className='text-4xl text-white font-semibold py-[15px]'>PROJECT PROFILES</div>
            </div>
            <div
                className='locationInfo'
            >
                  {/* Section for title and description */}
            <div className="projects-section">
                <h2 className="sectiontitle">INSPIRING AUDIOVISUAL INSTALLATIONS</h2>
                <p className="sectionDescription">
                    We believe our work speaks for itself. View our projects to see how leaders in the corporate, and education markets have partnered with Aesthetix for audiovisual solutions that change the way they work, learn, and live.
                </p>
                <hr className="0" />
                <h3 className="projects-titles">PROJECTS</h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    <ProfileCard
                        imagepath={caseImage1}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage2}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage3}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage4}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage5}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage6}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage7}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage8}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
                    <ProfileCard
                        imagepath={caseImage9}
                        heading='Immersive Experience Center'
                        description="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
                    />
            </div>
            </div>
            <hr className="divider" />
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
            <Footers />
        </div>
    )
}

export default ProjectProfile;