import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import VerticalEdu from '../../../assets/Vertical-edu.jpg'
import VideoTemplate from '../../ContentTemplate/VideoTemplate';
import Footers from '../../Footer/Footers';
import { Carousel } from "flowbite-react";

const Education = () => {
  return (
      <div>
          {/* Landing */}
          <LandingTemplate header="AUDIOVISUAL SOLUTIONS FOR EDUCATION" description="At every level of learning, Aesthetix provides audiovisual and technology integration services to help our education clients reach their instructional goals." buttontext="GET STARTED NOW" imagepath={VerticalEdu}/>
      <div>
        <HeaderDescription className='text-[#5b255d]' header='TECHNOLOGY FOR ENHANCED LEARNING OUTCOMES' description='Embracing and integrating technology into the classroom and campus creates a more engaging campus environment and helps make learning fun. Technology enhances the learning experience, helps to keep our campuses safe, and encourages collaboration to support the way today’s students want to learn. From immersive and hybrid learning classrooms to digital signage and security solutions, Aesthetix provides audiovisual technology integration services to help you create an engaging and effective educational experience.' />
      </div>
          <div className='flex justify-center mb-10 '>
              <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl bg-white">
      <Tabs aria-label="Full width tabs" variant="fullWidth" className='text-lg' >
            <Tabs.Item active title="Education k12">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    Aesthetix Technologies enhances learning environments with innovative audio-visual solutions that empower educators and inspire students.
                    <div className="h-56 sm:h-64 xl:h-[60vh] 2xl:h-96 mt-5">
                      <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/15467758/pexels-photo-15467758/free-photo-of-close-up-of-woman-scanning-a-qr-code-from-a-tv-screen-with-her-smartphone.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Digital Signage</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/8199135/pexels-photo-8199135.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Interactive smart classrooms</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/14501973/pexels-photo-14501973.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Auditoriums</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/7972710/pexels-photo-7972710.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Education Technology</p>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                 </div>
              </div>
        </Tabs.Item>
        <Tabs.Item active title="Education technology">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    We integrate cutting-edge technology to create dynamic learning environments that engage students and enhance educational outcomes.
                    <div className="h-56 sm:h-64 xl:h-[60vh] 2xl:h-96 mt-5">
                      <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Steam & robotics & AI</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/7868892/pexels-photo-7868892.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Interactive learning technologies</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/7241309/pexels-photo-7241309.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Virtual & Augmented reality</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>School technology facilities</p>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Higher Education">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-3'>
                    We deliver advanced audio-visual and collaboration solutions that empower higher education institutions to foster innovation and enhance the learning experience.
                    <div className="h-56 sm:h-64 xl:h-[60vh] 2xl:h-96 mt-5">
                      <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/7562417/pexels-photo-7562417.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Immersive space</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/8192246/pexels-photo-8192246.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Hybrid classroom</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/18471527/pexels-photo-18471527/free-photo-of-a-laboratory-with-desks-and-chairs-in-it.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Usability Labs</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/13834522/pexels-photo-13834522.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Multipurpose Halls</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Auditoriums</p>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                 </div>
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Universities">
              <div className='flex justify-center'>
                <div className='w-[50vw]'>
                  <div className='text-center mt-2'>
                    Aesthetix Technologies provides state-of-the-art audio-visual and integrated technology solutions to enhance collaboration, engagement, and learning outcomes in university environments.
                    <div className="h-56 sm:h-64 xl:h-[60vh] 2xl:h-96 mt-5">
                      <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/27254169/pexels-photo-27254169/free-photo-of-boy-learning-at-table.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Immersive Learning environments</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/8197513/pexels-photo-8197513.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Smart lecture halls</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/7773724/pexels-photo-7773724.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Digital signage and interactive kiosks</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/9489089/pexels-photo-9489089.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Collaboration spaces and huddle rooms</p>
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center bg-gray-300/50 dark:bg-gray-700 dark:text-white">
                          <div>
                            <img className='h-[40vh] rounded-lg' src="https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=800" />
                            <p className='mt-10 font-semibold'>Auditoriums</p>
                          </div>
                        </div>
                      </Carousel>
                    </div>
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
      <VideoTemplate header='Using AV Solutions to Elevate the Hospitality Experience ' smallheader='Veryable / Operators Club of Dallas' description='The Operators Club contacted Aesthetix with a vision for a unique restaurant and event space that catered to the entertainment demands of the hard-working Dallas community, one where patrons could watch their favorite sports teams from every seat and celebrate the wins in life. Within two days of the initial inquiry, Aesthetix experts were on site with suggestions on how to best make this vision a reality. ' videolink='https://www.youtube.com/watch?v=UCBmcIuHAXY' />
      <div>
        <ContentTemplate direction='left' heading='Video Conferencing for Classes' description='From powerful executive boardrooms to auditoriums and efficient huddle spaces, you can trust Aesthetix to create reliable audiovisual and unified communications environments. Effective meeting and collaboration spaces increase productivity and drive innovation for both in-office and hybrid work cultures.' imagepath='https://images.pexels.com/photos/5088022/pexels-photo-5088022.jpeg?auto=compress&cs=tinysrgb&w=800' />
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