import { Tabs } from 'flowbite-react';
import project6 from '../../../assets/project6.jpg';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import VerticalsGovt from '../../../assets/Verticals-govt.jpg';
import ContactTemplate from '../../ContentTemplate/ContactTemplate';
import Footers from '../../Footer/Footers';

const Government = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="GOVERNMENT AV SOLUTIONS" description="Empowering innovation and productivity with collaborative audiovisual technology." buttontext="GET STARTED NOW" imagepath={VerticalsGovt}/>
      <div>
        <HeaderDescription className='text-[#5b255d]' header='RELIABLE AV INTEGRATION FOR THE PUBLIC SECTOR' description='There is no one-size-fits-all when it comes to filling audiovisual needs. We have helped organizations of all kinds find the best-fit AV solutions for their unique workplace environments.' />
      </div>
          <div className='flex justify-center mb-10 '>
              <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
            <Tabs.Item active title="Conference Rooms">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center'>
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg" />
                 </div>
              </div>
        </Tabs.Item>
        <Tabs.Item active title="Reception/Lobby">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center'>
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src={project6} />
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Auditorium/Training centers">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center'>
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src={project6} />
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Open Workspaces">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center'>
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src={project6} />
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Multifunctional Space">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center'>
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src={project6} />
                 </div>
              </div>
        </Tabs.Item>
      </Tabs>
    </div>
          </div>
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="MISSION-CRITICAL COMMAND CENTERS" description="Network and security command facilities (NOCs and SOCs) are highly technical and require a deep understanding of best practices for these specialized spaces. Avidex provides systems for secure content delivery, multi-screen displays, and all-day remote monitoring. When seconds matter, having reliable, advanced technology solutions are essential." imagepath="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg"/>
      </div>
      <div>
        <ContentTemplate direction='left' heading='DIGITAL SIGNANGE & WAYFINDING' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Avidex to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Government/1200x900/Rally%20LS%20Large%20Conference%20Room%20Single%20Speaker%20BTY%203-1.jpg' />
      </div>
      <div>
        <HeaderDescription className='text-[#5b255d]' header='MASTER PURCHASING CONTRACTS' description="
        Avidex holds contracts with multiple state and local agencies as a provider of audiovisual and unified communications technologies, including Washington State DES and CMAS in California.

Let us guide you through the contract process and bring our audiovisual design and integration expertise to your next project.
        " />
      </div>
      <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
        <div className='bg-[#7a7a7a15]'>
          <VerticalBox header='ROOM OCCUPANCY DETECTION' description='Monitor room occupancy density and accurately measure utilization metrics—without violating privacy. These discreet, non-camera sensors do not transmit personally identifiable information. They can handle multiple points of entry, group and bi-directional movement, unlimited nested spaces, and sprawling, multi-national portfolios of any space.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/Install_2017_SSW-MUMK_002A_v1.jpg'/>
        </div>
        <div className='bg-[#9864a21d] '>
          <VerticalBox header="ROOM SCHEDULING" description="Finding and scheduling an available meeting space can be frustrating and time-consuming for users. Secure and scalable room scheduling solutions allow team members to view room availability, technology capabilities, and make room reservations from your organization's existing calendaring service or scheduling panels." imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/room-scheduling-technology.jpg'/>
        </div>
      </div>
      <ContactTemplate />
      <Footers />
    </div>
  )
}

export default Government