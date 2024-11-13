import './Casestudy.css';
import Footers from '../../Footer/Footers';
import DubaiAirports from '../../../assets/DubaiAirports.jpeg';
import GemsEdu from '../../../assets/GemsEdu.jpeg'
import smartDubai from '../../../assets/smartDubai.jpeg'
import { useNavigate } from 'react-router-dom';



const Casestudy = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Location Cover Section */}
      <div className='locationCover'>
        {/* <div className='overLays'> */}
          <div className='text-4xl text-white font-bold py-[15px]'>CASE STUDIES</div>
        {/* </div> */}
      </div>

      {/* Project Information Section */}
      <div className='locationInfo'>
        <div className="projects-section">
          <h2 className="section-title">THE AESTHETIX IMPACT: CASE STUDIES AND SUCCESSES</h2>
          <p className="section-description">
            We believe our work speaks for itself. View our projects to see how leaders in the corporate, government, education markets have partnered with Aesthetix for audiovisual solutions that change the way they work, learn, and live.
          </p>
        </div>

        <div className="project-gallery">
                <div className="LocationCard" onClick={() => navigate('/case-studies/youth-hub')} style={{cursor: 'pointer'}}>
                    <img src={DubaiAirports} className="LocationCardImage"/>
                    <div className="overlay">The Youth Hub</div>
                </div>

                <div className="LocationCard" onClick={() => navigate('/case-studies/gems-edu')} style={{cursor: 'pointer'}}>
                    <img src={GemsEdu} className="LocationCardImage"/>
                    <div className="overlay">Gems Education</div>
                </div>

                <div className="LocationCard" onClick={() => navigate('/case-studies/smart-dubai')} style={{cursor: 'pointer'}}>
                    <img src={smartDubai} className="LocationCardImage"/>
                    <div className="overlay">Smart Dubai</div>
                </div>
            </div>



        {/* Hospital Info Section */}
        <div className="hospital-info-container">
          {/* SVG Waves */}
          {/* <div className="waves top-waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgb(243, 232, 253)" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>

        

          <div className="waves bottom-waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="rgb(243, 232, 253)" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div> */}


            {/* challenge */}

            {/* <div className="challenge-section">
                <h2 className="challenge-title">THE CHALLENGE</h2>
                <p className="challenge-text">
                    Throughout the United States, medication non-adherence is one of the greatest factors contributing to poor health outcomes and avoidable health care costs (estimated $100 billion - $500 billion annually). The majority of American adults, most of which have a chronic condition, more than 131 million use prescription drugs, and depend on multiple medications to manage their health. Unfortunately, many do not achieve the full therapeutic benefit of their medications due to non-adherence. Hospitals are especially concerned with this issue. A major study in medication adherence among adults showed that less than half of the subjects were able to list their medications correctly, many of their medications were purposeful (or the side effects) at discharge. These limitations in health literacy compromise a patient's ability to adhere to their medication regimen and manage their conditions at home.

                    Among the most promising strategies for increasing medication adherence is improved communication between patients and health care providers. Recent research by the Script Your Future campaign revealed that 41% of study participants who reported increased patient-provider communication also reported improved medication adherence; conversely, among those who reported decreased patient-provider communication, 24% said their medication adherence had worsened.

                    Though patient education is widely recognized as a shared responsibility among hospital clinicians, nurses play a key role as they comprise more than 70% of the healthcare workforce. Nurses generally have access to and spend the most time with patients in the hospital setting, where education is often delivered verbally at the bedside. This workflow proves challenging for nurses, as reflected in a recent study on nurses' attitudes and behaviors on patient medication education. More than 90% of nurses from the study reported that they believe it is important for patients to be educated about their medications prior to discharge from the hospital. However, on average they spent 5 to 9 minutes on medication teaching.
                </p>
                </div> */}
          {/* Support Section */}

          {/* <div style={{width: "100vw", margin: '0px'}}>
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
            </div> */}

          {/* PSNI Alliance Section */}
          {/* <ContentTemplate 
            direction='left' 
            heading='PSNI ALLIANCE' 
            description='Aesthetix is proud to serve our global clients throughout North America, South America, Europe, Asia, and the Middle East. Aesthetix is a member of PSNI Global Alliance, a certified network of global technology providers and AV integrators delivering consistent service and support worldwide. We offer a combined talent pool of thousands of premier integrators committed to forward-thinking education, resources, collaboration, and support.'
            imagepath={WorldImg}
            style={{ width: '100%', height: 'auto' }}
          /> */}
        </div>

        
      </div>

      <Footers />
    </div>
  );
}

export default Casestudy;
