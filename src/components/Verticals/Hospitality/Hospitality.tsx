import { Footer, Tabs } from 'flowbite-react';
import project6 from '../../../assets/project6.jpg';
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
          <LandingTemplate header="AV SOLUTIONS FOR HOSPITALITY & ENTERTAINMENT" description="Audiovisual integration for businesses that rely on memorable experiences." buttontext="GET STARTED NOW" imagepath={VerticalsHosp}/>
          
        <div >
          <div className='flex justify-center mb-8'>
                <div className='w-[60vw]'>
                <div className={`md:text-2xl md:font-bold text-xl font-semibold text-center mb-5 text-[#a142a5]`}>
                    AUDIOVISUAL INTEGRATION 
                </div>
                <div className={`md:text-1xl md:font-bold text-xl font-semibold text-center  text-[#5b255d]`}>
                For Those Whose Success Relies on Making an Impact
                </div>
                <div className='text-lg mt-6 text-[#424141] text-center mb-8 '>
                    Communicate your brand and bring your space to life with creative AV and communication technologies engineered, installed, and fully supported by Avidex.  Highlight your commitment to service, add subtle ambiance, set the mood, amaze your guests, or communicate important information with the latest audiovisual solutions for the hospitality and entertainment industries. Avidex helps our hospitality and entertainment clients exceed their guest’s expectations with audiovisual and communication technologies.
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