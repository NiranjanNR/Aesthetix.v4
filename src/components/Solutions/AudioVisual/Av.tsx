import './Av.css'
import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import Footers from '../../Footer/Footers';

const Av = () =>{
    return(
        <div>
        {/* Landing */}
        <div className="background h-[70vh] w-[100vw] flex items-center ">
            <div className='h-[max-content] lg:w-[40vw] w-[50vw] bg-white/75 ml-20 lg:p-9 p-4'>
                <div className='md:text-4xl md:font-bold text-xl font-semibold text-[#5b255d]'>
                AV SOLUTIONS
                </div>
                <div className='text-xl md:font-semibold mt-4 text-[#424141] '>
                Holistic Audio Integration for Schools, Businesses, and Healthcare Facilities
                </div> 
            </div>
        </div>

        <div className='py-20 backgroundColor'>
        <HeaderDescription className='text-[#5b255d]' header='AV solutions to fit the room' description="Aesthetix Technologies delivers innovative audio-visual solutions that enhance environments and elevate user experiences across sectors like retail, education, and hospitality. We provide a range of services, including digital signage, interactive displays, and immersive audio systems, all tailored to meet our clients' unique needs. Trust us to transform your vision into reality with seamless integration and professional expertise." />
        </div>

        <div className='flex justify-center mb-10 flex-col items-center my-auto '>
        <div className='md:text-3xl md:font-bold text-xl font-semibold text-center mb-5 py-10 text-[#5b255d]'>SOLUTIONS FOR EVERY SPACE</div>
            <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl">
                
    <Tabs aria-label="Full width tabs" variant="fullWidth">
          <Tabs.Item active title="CLASSROOMS">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Classroom audio solutions meet today's challenges of hyflex teaching for both educators and students. Voice reinforcement solutions overcome vocal strain to deliver a clear and constant audio experience throughout the classroom to help keep students focused and on task.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="COLLABORATION">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Without coherent audio, collaboration is impossible. The audio solutions found in our conference rooms ensure everyone has a seat at the table no matter where they're sitting. 
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="MULTIFUNCTION/AUDITORIUM">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                A multifunction room creates value through versatility. Rooms equipped with comprehensive audio solutions allow for meeting the demands of any event, presentation, or function.  
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="TRAINING FACILITIES">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Today's training rooms are meant to be highly collaborative learning and presentation environments for hybrid audiences. Diverse audio systems and simplified controls ensure presenters can confidently share content for the optimal training and education experience.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/6764614/pexels-photo-6764614.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="OUTDOOR SPACES">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Our outdoor audio solutions are powerful enough to overcome natural ambiance, invasive noise sources, and fewer reflective surfaces while remaining unobtrusive in the presentation area.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/5368712/pexels-photo-5368712.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
    </Tabs>
  </div>
        </div>

    <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
      <div className='bg-[#7a7a7a15]'>
        <VerticalBox header='SOUND MASKING' description='Hospitals and corporate offices can benefit from the acoustic privacy of sound masking for their visitors and staff. A sound masking solution installed by Avidex features multizone capabilities, program scheduling, direct or indirect positioning, and can be integrated within a paging system' imagepath='https://images.pexels.com/photos/159206/mixing-table-mixing-music-musician-159206.jpeg?auto=compress&cs=tinysrgb&w=800'/>
      </div>
      <div className='bg-[#9864a21d] '>
        <VerticalBox header="CLASSROOM AUDIO" description="The classroom presents its own unique challenges when it comes to audio clarity and intelligibility. Classroom audio solutions are specifically designed to create educational equity for both in-person and remote students while reducing strain on educators" imagepath='https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800'/>
      </div>
    </div>
        
    <div className='bg-[#9864a21d] my-20'>
            <ContentTemplate direction='left' heading="PAGING & MASS NOTIFICATION SYSTEMS" description="We offer sophisticated campus-wide paging solutions that easily integrate with existing systems. A reliable paging system maximizes your teams' ability to ensure critical communication throughout your entire campus or directly with a specific location. Flexible and easy-to-use solutions such as 2-way intercoms, quality sound, safety integrations, and school bell functionality for education deployments are key to a successful campus communication solution.
            " imagepath="https://images.pexels.com/photos/4604662/pexels-photo-4604662.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    </div>
    
    <div>
    <div className='locationInfo py-[50px]'>

        <Footers />
    </div>

    </div>

  </div>
    )}

export default Av;


