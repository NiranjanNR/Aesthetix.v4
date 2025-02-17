import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import VerticalsHosp from '../../../assets/Verticals-hosp.jpg'
import VideoTemplate from '../../ContentTemplate/VideoTemplate';
import Footers from '../../Footer/Footers';

const Hospitality = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="HOSPITALITY AND ENTERTAINMENT SECTOR" description="Aesthetix delivers innovative and collaborative solutions specifically designed for the healthcare industry to improve the patient, staff, and visitor experience." buttontext="GET STARTED NOW" imagepath={VerticalsHosp}/>
        <div >
          <div className='flex justify-center mb-8'>
                <div className='w-[80vw]'>
                <div className={`md:text-2xl md:font-bold text-xl font-semibold text-center mb-5 text-[#a142a5]`}>
                AV Integration for Better Hospitality and Entertainment
                </div>
                <div className='text-lg mt-6 text-[#424141] text-center mb-8 '>
                At Aesthetix Technologies, we specialize in delivering cutting-edge audio-visual and integrated solutions tailored for the hospitality and entertainment sectors. Our expertise encompasses designing immersive experiences for hotels, resorts, restaurants, and entertainment venues, enhancing guest engagement and satisfaction. We provide innovative technologies that streamline operations, elevate ambiance, and create memorable experiences, ensuring that every space reflects the unique vision of our clients. Partner with us to transform your hospitality and entertainment offerings into extraordinary experiences.             
                {/* <br />
                <br />
                Our longevity in the healthcare industry has enabled us to develop longstanding, trusted relationships with solutions that help drive quality metrics for patient satisfaction and clinical performance amidst an ever-changing healthcare landscape.  */}

                </div>
            </div>
          </div>
        </div>

          
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="TigrPx: Interactive Patient Engagements" description="Aesthetix’s TigrPX Interactive Patient Engagement System (IPS) transforms how patients are engaged, educated, entertained, and cared for to improve the patient and staff hospital experience. Developed from decades of evidence-based research and a deep understanding of the patient experience, TigrPX delivers patient-centered engagement tools, staff-patient communication, automated staff workflows with EMR/hospital system integrations, and optimizes the patient care environment with virtual care platform partners." imagepath="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=800"/>
      </div>
      <div>
        <ContentTemplate direction='left' heading='DIGITAL SIGNAGE & VIDEO WALLS' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Aesthetix to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Government/1200x900/Rally%20LS%20Large%20Conference%20Room%20Single%20Speaker%20BTY%203-1.jpg' />
      </div>
      <VideoTemplate header='Using AV Solutions to Elevate the Hospitality Experience ' smallheader='Veryable / Operators Club of Dallas' description='The Operators Club contacted Aesthetix with a vision for a unique restaurant and event space that catered to the entertainment demands of the hard-working Dallas community, one where patrons could watch their favorite sports teams from every seat and celebrate the wins in life. Within two days of the initial inquiry, Aesthetix experts were on site with suggestions on how to best make this vision a reality. ' videolink='https://www.youtube.com/watch?v=Ygn3UxHosME' />
      <div>
        <ContentTemplate direction='left' heading='Meeting & Conference Spaces' description='Healthcare facilities need meeting and conference spaces just like businesses, to connect staff and drive productivity.  From large board rooms to clinical team huddle spaces, our meeting spaces are designed to quickly and easily enable collaboration for in-person and hybrid meetings.' imagepath='https://www.avidex.com/hs-fs/hubfs/HealthcareBoardRoom_2016-005A_v3-WithNurseimage.png?width=2400&height=1800&name=HealthcareBoardRoom_2016-005A_v3-WithNurseimage.png' />
      </div>
      <Footers />
    </div>
  )
}

export default Hospitality