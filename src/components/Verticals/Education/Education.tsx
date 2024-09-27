import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import VerticalEdu from '../../../assets/Vertical-edu.jpg'
import VideoTemplate from '../../ContentTemplate/VideoTemplate';
import Footers from '../../Footer/Footers';

const Education = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="AUDIOVISUAL SOLUTIONS FOR EDUCATION" description="At every level of learning, Avidex provides audiovisual and technology integration services to help our education clients reach their instructional goals." buttontext="GET STARTED NOW" imagepath={VerticalEdu}/>
      <div>
        <HeaderDescription className='text-[#5b255d]' header='TECHNOLOGY FOR ENHANCED LEARNING OUTCOMES' description='Embracing and integrating technology into the classroom and campus creates a more engaging campus environment and helps make learning fun. Technology enhances the learning experience, helps to keep our campuses safe, and encourages collaboration to support the way today’s students want to learn. From immersive and hybrid learning classrooms to digital signage and security solutions, Avidex provides audiovisual technology integration services to help you create an engaging and effective educational experience.' />
      </div>
          <div className='flex justify-center mb-10 '>
              <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl bg-white">
      <Tabs aria-label="Full width tabs" variant="fullWidth" className='text-lg' >
            <Tabs.Item active title="Classrooms">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Behold the classrooms where everyone of your children get their personalities and shape tomorrows world.
                  </div>
                  <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800" />
                 </div>
              </div>
        </Tabs.Item>
        <Tabs.Item active title="Common Areas">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Inform and delight your visitors and staff throughout your campus with digital signage, wayfinding, and video wall solutions. 
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/3042432/pexels-photo-3042432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Administration">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Our collaboration solutions serve conference rooms of all sizes with HD displays.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Sports Venues">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Sports venues to embrace the vast richness of your childrens freedom.
                  </div>
                  <div className='flex justify-center mt-4'>
                    <img className='h-[50vh] mt-5' src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                 </div>
              </div>
            </Tabs.Item>
      </Tabs>
    </div>
          </div>
          <div className='bg-[#9864a21d]'>
              <ContentTemplate direction='right' heading="VIRTUAL & HYBRID LEARNING SOLUTIONS" description="Create engaging learning experiences with interactive hybrid classroom and online learning solutions to support today's varied learning environments. Integrating easy-to-use and reliable classroom tools such as interactive displays, cameras, and audio solutions brings a consistent to in-person and virtual students alike. " imagepath="https://images.pexels.com/photos/5676733/pexels-photo-5676733.jpeg?auto=compress&cs=tinysrgb&w=800"/>
      </div>
      <div>
        <ContentTemplate direction='left' heading='Classroom Audio Solutions' description='Classroom audio solutions ensure that every student receives proper volume and clarity of instruction from anywhere in the classroom. Creating a consistent, quality audio experience throughout the classroom maximizes the intelligibility of subject matter, with proven results in raising test scores, improving on-task behavior, and reduced educator vocal strain.' imagepath='https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=800' />
      </div>
      <VideoTemplate header='Using AV Solutions to Elevate the Hospitality Experience ' smallheader='Veryable / Operators Club of Dallas' description='The Operators Club contacted Avidex with a vision for a unique restaurant and event space that catered to the entertainment demands of the hard-working Dallas community, one where patrons could watch their favorite sports teams from every seat and celebrate the wins in life. Within two days of the initial inquiry, Avidex experts were on site with suggestions on how to best make this vision a reality. ' videolink='https://www.youtube.com/watch?v=UCBmcIuHAXY' />
      <div>
        <ContentTemplate direction='left' heading='Video Conferencing for Classes' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Avidex to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://images.pexels.com/photos/5088022/pexels-photo-5088022.jpeg?auto=compress&cs=tinysrgb&w=800' />
      </div>
      <div>
        <HeaderDescription header='INTERACTIVE CLASSROOM DISPLAYS' description="Inspire brilliance and enhance the learning experience with captivating visuals, user-friendly collaboration, and simplified management with today's dynamic digital classroom display technology." />
      </div>
      <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
        <div className='bg-[#7a7a7a15]'>
          <VerticalBox header='INTERACTIVE FLAT PANEL DISPLAYS' description='Interactive Flat Panel Displays deliver a user-friendly and highly engaging collaborative classroom experience. Interactive touchscreen displays combine ultra-high-definition picture quality, intuitive writing experiences, and flexible collaboration tools to help schools promote active learning. With some models offering built-in cameras and microphones, interactive displays are an essential element to keep teachers connected to their students in-person, remotely, or in hybrid learning environments. Let our team of education technology experts help you reinvent student engagement and classroom communication.' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/Install_2017_SSW-MUMK_002A_v1.jpg'/>
        </div>
        <div className='bg-[#9864a21d] '>
          <VerticalBox header="LASER PROJECTORS" description="Laser projectors give educators the power to deliver a big, bright, immersive learning experience. Available in ultra-wide formats, up to 120, these specifically designed projectors for education deliver captivating images and interactivity without compromising whiteboard space. With simple wireless connectivity and seamless content sharing, today's lampless projector technology delivers high color brightness, uncompromising image quality, and road-tested reliability. Virtually maintenance-free and flexible enough to adapt to whatever future learning trends come next, they’ll remain a seamless part of your tech stack for years to come." imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/room-scheduling-technology.jpg'/>
        </div>
      </div>
      <Footers />
    </div>
  )
}

export default Education