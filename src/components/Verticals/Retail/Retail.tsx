import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import Blogs from '../../ContentTemplate/Blogs';
import Footers from '../../Footer/Footers';

const Retail = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="RETAIL SOLUTIONS" description="Empowering innovation and productivity with collaborative audiovisual technology." buttontext="GET STARTED NOW" imagepath="https://images.unsplash.com/photo-1631856956334-35db20cb7748?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div>
        <HeaderDescription header='Solutions for Every Space' description='There is no one-size-fits-all when it comes to filling audiovisual needs. We have helped organizations of all kinds find the best-fit AV solutions for their unique workplace environments.' />
      </div>
          <div className='flex justify-center mb-10 '>
              <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl bg-white">
      <Tabs aria-label="Full width tabs" variant="fullWidth" className='text-lg' >
            <Tabs.Item active title="Video walls">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Auditoriums are high-capacity, hybrid presentation environments requiring a seamless integration and experience for both in-person and remote participants, with streaming capabilities for viewers. These rooms can be advanced with lecture capture, large format presentation displays, and extensive audio coverage, yet with simplified control systems.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=800" />
                 </div>
              </div>
        </Tabs.Item>
        <Tabs.Item active title="Digital signage’s ">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Inform and delight your visitors and staff throughout your campus with digital signage, wayfinding, and video wall solutions. 
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/5483055/pexels-photo-5483055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Footfall reader">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Our collaboration solutions serve conference rooms of all sizes with HD displays, in-ceiling microphones, PTZ cameras, and more.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
      </Tabs>
        </div>
        
          </div>
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="Video Surveillance Systems" description="Video surveillance systems are essential for security and loss prevention in retail environments. These systems include high-definition cameras, recording equipment, and monitoring software. They help retailers deter theft, monitor customer behavior, and ensure the safety of both employees and customers. Modern surveillance systems often feature remote access capabilities, allowing store managers to view live feeds from their devices." imagepath="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg"/>
      </div>
      <Blogs page='Retail'/>
      <div>
        <ContentTemplate direction='left' heading='Interactive Kiosks' description='Interactive kiosks are touchscreen displays that allow customers to access product information, browse catalogs, or place orders. They enhance customer engagement and provide a self-service option, making it easier for shoppers to find what they need without relying solely on staff.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Government/1200x900/Rally%20LS%20Large%20Conference%20Room%20Single%20Speaker%20BTY%203-1.jpg' />
      </div>
      <Footers />
    </div>
  )
}

export default Retail