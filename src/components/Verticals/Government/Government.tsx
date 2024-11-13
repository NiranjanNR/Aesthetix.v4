import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import VerticalsGovt from '../../../assets/Verticals-govt.jpg';
import Footers from '../../Footer/Footers';
import Blogs from '../../ContentTemplate/Blogs';

const Government = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="GOVERNMENT SECTOR" description="Empowering innovation and productivity with collaborative audiovisual technology." buttontext="GET STARTED NOW" imagepath={VerticalsGovt}/>
      <div>
        <HeaderDescription className='text-[#5b255d]' header='RELIABLE AV INTEGRATION FOR THE PUBLIC SECTOR' description='There is no one-size-fits-all when it comes to filling audiovisual needs. We have helped organizations of all kinds find the best-fit AV solutions for their unique workplace environments.' />
      </div>
          <div className='flex justify-center mb-10 '>
              <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl bg-white">
      <Tabs aria-label="Full width tabs" variant="fullWidth" className='text-lg' >
            <Tabs.Item active title="Council Chambers/Auditoriums">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Today's council chambers and auditoriums are high-capacity, hybrid presentation environments requiring a seamless integration and experience for both in-person and remote participants, with streaming capabilities for viewers. These rooms can be advanced with lecture capture, large format presentation displays, and extensive audio coverage, yet with simplified control systems.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/15434151/pexels-photo-15434151/free-photo-of-the-interior-of-a-large-building-with-a-dome.jpeg?auto=compress&cs=tinysrgb&w=800" />
                 </div>
              </div>
        </Tabs.Item>
        <Tabs.Item active title="Hallways/Common Areas">
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
            <Tabs.Item active title="Administration/Conference Rooms">
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
            <Tabs.Item active title="Multifunction Space">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Dynamic spaces need technology to match. The audiovisual solutions in these areas are designed to meet the demands of the day, with multiple presentation capabilities, audio coverage zones, and easy-to-use system control.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/7750126/pexels-photo-7750126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Control rooms">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Dynamic spaces need technology to match. The audiovisual solutions in these areas are designed to meet the demands of the day, with multiple presentation capabilities, audio coverage zones, and easy-to-use system control.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/7750126/pexels-photo-7750126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
      </Tabs>
    </div>
          </div>
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="MISSION-CRITICAL COMMAND CENTERS" description="Network and security command facilities (NOCs and SOCs) are highly technical and require a deep understanding of best practices for these specialized spaces. Aesthetix provides systems for secure content delivery, multi-screen displays, and all-day remote monitoring. When seconds matter, having reliable, advanced technology solutions are essential." imagepath="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800"/>
      </div>
      <div>
        <ContentTemplate direction='left' heading='DIGITAL SIGNANGE & WAYFINDING' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Aesthetix to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&w=800' />
      </div>
      <div>
        <Blogs page="Government"/>
      </div>
      <Footers />
    </div>
  )
}

export default Government