import { Tabs } from 'flowbite-react';
import project6 from '../../../assets/project6.jpg';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';

const Education = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="CORPORATE AV SOLUTIONS" description="Empowering innovation and productivity with collaborative audiovisual technology." buttontext="GET STARTED NOW" imagepath="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div>
        <HeaderDescription header='Solutions for Every Space' description='There is no one-size-fits-all when it comes to filling audiovisual needs. We have helped organizations of all kinds find the best-fit AV solutions for their unique workplace environments.' />
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
    </div>
  )
}

export default Education