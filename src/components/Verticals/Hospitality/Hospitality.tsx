import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import VerticalsHosp from '../../../assets/Verticals-hosp.jpg'
import Footers from '../../Footer/Footers';

const Hospitality = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="AUDIOVISUAL TECHNOLOGY FOR HEALTHCARE" description="Aesthetix delivers innovative and collaborative solutions specifically designed for the healthcare industry to improve the patient, staff, and visitor experience." buttontext="GET STARTED NOW" imagepath={VerticalsHosp}/>
          
        <div >
          <div className='flex justify-center mb-8'>
                <div className='w-[80vw]'>
                <div className={`md:text-2xl md:font-bold text-xl font-semibold text-center mb-5 text-[#a142a5]`}>
                AV INTEGRATION for Better Healthcare Experiences
                </div>
                <div className={`md:text-1xl md:font-bold text-xl font-semibold text-center  text-[#5b255d]`}>
                Inside and Outside the Patient Room
                </div>
                <div className='text-lg mt-6 text-[#424141] text-center mb-8 '>
                The Avidex healthcare team specializes in meeting the unique needs and requirements of healthcare environments with audiovisual technology solutions that enhance the healthcare experience for patients, visitors, and staff. With decades of experience in the healthcare market and more than 2,500 hospital and healthcare clients nationwide, Avidex has a legacy of designing, integrating, supporting, and servicing complex audiovisual solutions inside and outside of the patient room. Avidex’s proprietary TigrPX interactive patient engagement solution (IPS) helps hospitals educate, engage, and entertain patients to improve patient outcomes, care quality, and hospital performance. 

                <br />
                <br />
                Our longevity in the healthcare industry has enabled us to develop longstanding, trusted relationships with solutions that help drive quality metrics for patient satisfaction and clinical performance amidst an ever-changing healthcare landscape. 

                </div>
            </div>
          </div>
        </div>

          
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="Network & Security Command Centers" description="Network and security command facilities (NOCs and SOCs) are highly technical and require a deep understanding of best practices for these specialized spaces. Avidex provides systems for secure content delivery, multi-screen displays, and all-day remote monitoring. When seconds matter, having reliable, advanced technology solutions are essential." imagepath="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg"/>
      </div>
      <div>
        <ContentTemplate direction='left' heading='Video Conferencing & Collaboration spaces' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Avidex to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Government/1200x900/Rally%20LS%20Large%20Conference%20Room%20Single%20Speaker%20BTY%203-1.jpg' />
      </div>
      <div>
        <HeaderDescription header='Room Occupancy and Scheduling' description="In today’s hybrid workplace, people come and go on different schedules. To keep everyone working productively and efficiently, room occupancy and scheduling capabilities are key components of your workplace design." />
      </div>
      <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
        <div className='bg-[#7a7a7a15]'>
          <VerticalBox header='Room Occupancy Detection' description='Monitor room occupancy density and accurately measure utilization metrics—without violating privacy. These discreet, non-camera sensors do not transmit personally identifiable information. They can handle multiple points of entry, group and bi-directional movement, unlimited nested spaces, and sprawling, multi-national portfolios of any space.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/Install_2017_SSW-MUMK_002A_v1.jpg'/>
        </div>
        <div className='bg-[#9864a21d] '>
          <VerticalBox header="Room Scheduling" description="Finding and scheduling an available meeting space can be frustrating and time-consuming for users. Secure and scalable room scheduling solutions allow team members to view room availability, technology capabilities, and make room reservations from your organization's existing calendaring service or scheduling panels." imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/room-scheduling-technology.jpg'/>
        </div>
      </div>
      <Footers />
    </div>
  )
}

export default Hospitality