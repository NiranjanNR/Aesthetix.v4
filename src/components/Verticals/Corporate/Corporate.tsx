import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import Footers from '../../Footer/Footers';

const Corporate = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="CORPORATE AV SOLUTIONS" description="Empowering innovation and productivity with collaborative audiovisual technology." buttontext="GET STARTED NOW" imagepath="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div>
        <HeaderDescription header='Audiovisual Integration for Business Transformation' description="Accelerate your business by building spaces for innovation, strategy, and collaboration. We strive to provide everyone who walks through your door with a seamless, unforgettable audiovisual experience. By building scalable, standardized, and serviceable solutions, Aesthetix can help your business be more competitive, improve your operations, and deliver amazing results to your staff and customers. Working closely with corporate clients, from medium-sized businesses to Fortune 500 companies, Aesthetix understands the challenges and solutions needed to deliver amazing results for our corporate clients in today’s hybrid work environment." />
      </div>
          <div className='flex justify-center mb-10 '>
              <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl bg-white">
      <Tabs aria-label="Full width tabs" variant="fullWidth" className='text-lg' >
            <Tabs.Item active title="Conference Rooms">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Whether it's an executive boardroom, a medium-sized conference room, or a huddle space, these UC spaces are centered around ease of use, connecting hybrid participants, and promoting collaboration.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                 </div>
              </div>
        </Tabs.Item>
        <Tabs.Item active title="Reception/Lobby">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Nail your first impression with a reception and lobby area rich in picture-perfect messaging on crisp digital displays. Impress visitors with an amazing video wall and protect your employees with a temperature scanning kiosk and other security measures.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://plus.unsplash.com/premium_photo-1676320103087-4aec0a09088f?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Auditorium/Training centers">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Today's auditoriums and training centers are high-capacity collaborative learning and presentation environments for hybrid audiences. While the presentation and audio systems are advanced, user-friendly control is essential. We can help!
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.unsplash.com/photo-1559223694-98ed5e272fef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Open Workspaces">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Nail your first impression with a reception and lobby area rich in picture-perfect messaging on crisp digital displays. Impress visitors with an amazing video wall and protect your employees with a temperature scanning kiosk and other security measures.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://plus.unsplash.com/premium_photo-1682434215596-19f988ca440a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3BlbiUyMHdvcmtzcGFjZXxlbnwwfHwwfHx8MA%3D%3D" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Multifunctional Space">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    The solutions found in multifunction spaces share the space's versatility and are designed to be flexible in form and function. 
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/600x400/Adobe_Multifunction-Space.jpg?width=1280&name=Adobe_Multifunction-Space.jpg" />
                  </div>
                 </div>
              </div>
        </Tabs.Item>
      </Tabs>
    </div>
          </div>
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="Network & Security Command Centers" description="Network and security command facilities (NOCs and SOCs) are highly technical and require a deep understanding of best practices for these specialized spaces. Aesthetix provides systems for secure content delivery, multi-screen displays, and all-day remote monitoring. When seconds matter, having reliable, advanced technology solutions are essential." imagepath="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg"/>
      </div>
      <div>
        <ContentTemplate direction='left' heading='Video Conferencing & Collaboration spaces' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Aesthetix to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Government/1200x900/Rally%20LS%20Large%20Conference%20Room%20Single%20Speaker%20BTY%203-1.jpg' />
      </div>
      <div>
        <HeaderDescription header='Room Occupancy and Scheduling' description="In today’s hybrid workplace, people come and go on different schedules. To keep everyone working productively and efficiently, room occupancy and scheduling capabilities are key components of your workplace design." />
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-x-28 mx-[100px]'>
        <div className='bg-[#7a7a7a15] flex justify-center'>
          <VerticalBox header='Room Occupancy Detection' description='Monitor room occupancy density and accurately measure utilization metrics—without violating privacy. These discreet, non-camera sensors do not transmit personally identifiable information. They can handle multiple points of entry, group and bi-directional movement, unlimited nested spaces, and sprawling, multi-national portfolios of any space.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/Install_2017_SSW-MUMK_002A_v1.jpg'/>
        </div>
        <div className='bg-[#9864a21d] flex justify-center'>
          <VerticalBox header="Room Scheduling" description="Finding and scheduling an available meeting space can be frustrating and time-consuming for users. Secure and scalable room scheduling solutions allow team members to view room availability, technology capabilities, and make room reservations from your organization's existing calendaring service or scheduling panels." imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/room-scheduling-technology.jpg'/>
        </div>
      </div>
      <Footers />
    </div>
  )
}

export default Corporate