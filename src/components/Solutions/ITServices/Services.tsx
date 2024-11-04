import './Services.css'
import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import PurpleGraphics from '../../../assets/PurpleGraphics.jpg'
import HoW from '../../../assets/HoW.jpg'
import Audit from '../../../assets/audi-govt.webp'
import collab from '../../../assets/collab-room.jpg'
import edu from '../../../assets/edu.jpg'

const Services = () =>{
    return(
        <div>
        {/* Landing */}
        <div className="background h-[70vh] w-[100vw] flex items-center ">
            <div className='h-[max-content] lg:w-[40vw] w-[50vw] bg-white/75 ml-20 lg:p-9 p-4'>
                <div className='md:text-4xl md:font-bold text-xl font-semibold text-[#5b255d]'>
                IT SERVICES
                </div>
                <div className='text-xl md:font-semibold mt-4 text-[#424141] '>
                Holistic Audio Integration for Schools, Businesses, and Healthcare Facilities
                </div> 
            </div>
        </div>

        <div className='py-20 backgroundColor'>
        <HeaderDescription className='text-[#5b255d]' header='CUSTOM SOUND SOLUTIONS TO FIT THE ROOM ' description='All rooms come with unique acoustic challenges depending on layout, function, and architecture. As such theres no true one-size-fits-all solution when it comes to audio integration. Our team relies on decades of experience when it comes to crafting your audio ecosystem.' />
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
                <img className='h-[50vh] w-[50vw] mt-5' src="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="COLLABORATION">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Without coherent audio, collaboration is impossible. The audio solutions found in our conference rooms ensure everyone has a seat at the table no matter where they're sitting. 
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src={PurpleGraphics} />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="MULTIFUNCTION/AUDITORIUM">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                A multifunction room creates value through versatility. Rooms equipped with comprehensive audio solutions allow for meeting the demands of any event, presentation, or function.  
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src={PurpleGraphics} />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="TRAINING FACILITIES">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Today's training rooms are meant to be highly collaborative learning and presentation environments for hybrid audiences. Diverse audio systems and simplified controls ensure presenters can confidently share content for the optimal training and education experience.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src={PurpleGraphics} />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="OUTDOOR SPACES">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                <div className='text-center'>
                Our outdoor audio solutions are powerful enough to overcome natural ambiance, invasive noise sources, and fewer reflective surfaces while remaining unobtrusive in the presentation area.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src={PurpleGraphics} />
               </div>
            </div>
      </Tabs.Item>
    </Tabs>
  </div>
        </div>

    <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
      <div className='bg-[#7a7a7a15]'>
        <VerticalBox header='SOUND MASKING' description='Hospitals and corporate offices can benefit from the acoustic privacy of sound masking for their visitors and staff. A sound masking solution installed by Aesthetix features multizone capabilities, program scheduling, direct or indirect positioning, and can be integrated within a paging system' imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/Install_2017_SSW-MUMK_002A_v1.jpg'/>
      </div>
      <div className='bg-[#9864a21d] '>
        <VerticalBox header="CLASSROOM AUDIO" description="The classroom presents its own unique challenges when it comes to audio clarity and intelligibility. Classroom audio solutions are specifically designed to create educational equity for both in-person and remote students while reducing strain on educators" imagepath='https://www.avidex.com/hubfs/Website%20Optimized/Corporate/Room%20Occupancy%20%20and%20Scheduling/1200x630/room-scheduling-technology.jpg'/>
      </div>
    </div>
        
    <div className='bg-[#9864a21d] my-20'>
            <ContentTemplate direction='left' heading="PAGING & MASS NOTIFICATION SYSTEMS" description="We offer sophisticated campus-wide paging solutions that easily integrate with existing systems. A reliable paging system maximizes your teams' ability to ensure critical communication throughout your entire campus or directly with a specific location. Flexible and easy-to-use solutions such as 2-way intercoms, quality sound, safety integrations, and school bell functionality for education deployments are key to a successful campus communication solution.
            " imagepath="https://www.avidex.com/hs-fs/hubfs/Website%20Optimized/Corporate/1200x900/Gov-NOC-SOC-DisplaySolutions-1.jpg?width=1000&height=750&name=Gov-NOC-SOC-DisplaySolutions-1.jpg"/>
    </div>
    
    <div>
    <div className='locationInfo py-[50px]'>

    <div >
        <div className='text-2xl text-center font-bold text-[#B947BD]'>SOLUTIONS BY MARKET</div>
        <div className='text-[#5b255d] text-[18px] font-bold '>Explore Our Audiovisual Solutions by Market</div>
    </div>   
    
    <div className='itcards'>
    <div className='LocationCard'>
            <img src={collab} className='LocationCardImage'/>
            <div className='LocationCardText'>
                <div className='text-[18px] font-bold py-5'>Cooporate/Enterprise</div>
            </div>
        </div>

        <div className='LocationCard'>
            <img src={edu} className='LocationCardImage'/>
            <div className='LocationCardText'>
                <div className='text-[18px] font-bold py-5'>K12-Higher Education</div>
            </div>
        </div>

        <div className='LocationCard'>
            <img src={Audit} className='LocationCardImage'/>
            <div className='LocationCardText'>
                <div className='text-[18px] font-bold py-5'>Government/Public Sector</div>
            </div>
        </div> 

        <div className='LocationCard'>
            
            <img src={HoW} className='LocationCardImage'/>
            <div className='LocationCardText'>
                <div className='text-[18px] font-bold py-5'>House of Worship</div>
            </div>
        </div> 
    </div>
        
    </div>

    </div>

  </div>
    )}

export default Services;


