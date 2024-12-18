import './Services.css'
import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import Footers from '../../Footer/Footers';
import cyber from '../../../assets/cyber.jpeg';
import monitor from '../../../assets/monitor.jpeg';

const Services = () =>{
    return(
        <div>
        {/* Landing */}
        <LandingTemplate header="IT SERVICES" description="Holistic Audio Integration for Schools, Businesses, and Healthcare Facilities" buttontext="" imagepath="https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        <div className='py-20 backgroundColor mt-[-40px]'>
        <HeaderDescription className='text-[#5b255d]' header='CUSTOM SOUND SOLUTIONS TO FIT THE ROOM ' description='All rooms come with unique acoustic challenges depending on layout, function, and architecture. As such theres no true one-size-fits-all solution when it comes to audio integration. Our team relies on decades of experience when it comes to crafting your audio ecosystem.' />
        </div>

        <div className='flex justify-center mb-10 flex-col items-center my-auto '>
        <div className='md:text-3xl md:font-bold text-xl font-semibold text-center mb-5 py-10 text-[#5b255d]'>SOLUTIONS FOR EVERY SPACE</div>
            <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl">
                
    <Tabs aria-label="Full width tabs" variant="fullWidth">
          <Tabs.Item active title="CONNECTIVITY">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Establishes the foundation for AV solutions with robust cabling, managed Wi-Fi, and IoT integrations, enabling seamless connectivity and remote access.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/27910975/pexels-photo-27910975/free-photo-of-schoolboys-walking-down-the-corridor-watched-by-a-group-of-schoolgirls-hiding-behind-the-classroom-door.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title=" CLOUD SERVICES">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Offers cloud-based content management, storage, and streaming solutions, ensuring scalable access and flexibility for AV projects.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/8221580/pexels-photo-8221580.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="UC">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Enhances collaboration through video conferencing, interactive displays, and unified communications platforms, connecting teams in real-time.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="DIGITAL SIGNAGE">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Supports dynamic digital signage and interactive kiosks, with remote content management systems for scheduling and monitoring.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/579471/pexels-photo-579471.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="AV CONTROL SYSTEMS">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Delivers centralized control over AV equipment, enabling automation, room booking, and custom interfaces for streamlined operation.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="CYBERSECURITY">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Secures AV networks and data with encryption, firewalls, and compliance protocols, protecting against cyber threats.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="MONITORING">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Provides continuous monitoring and proactive maintenance, optimizing AV system performance through real-time analytics.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="IT SUPPORT">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Ensures reliable operation through dedicated help desk services, managed support, and regular software and hardware updates.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/3949100/pexels-photo-3949100.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      
    </Tabs>
  </div>
        </div>

    <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
      <div className='bg-[#7a7a7a15]'>
                            <VerticalBox header='Cybersecurity & Data Protection' description='Secures AV networks and data with encryption, firewalls, and compliance protocols, protecting against cyber threats.' imagepath={cyber} />
      </div>
      <div className='bg-[#9864a21d] '>
        <VerticalBox header="Monitoring & Remote Management" description="Provides continuous monitoring and proactive maintenance, optimizing AV system performance through real-time analytics." imagepath={monitor}/>
      </div>
    </div>
        
    <div className='bg-[#9864a21d] my-20'>
            <ContentTemplate direction='left' heading="Software Integration & Development " description="Software integration and development in the AV industry streamline operations by connecting various audiovisual components, enabling users to control multiple devices through a single interface. This includes automation for adjusting settings based on occupancy, enhancing user experience and energy efficiency. By incorporating data analytics, organizations gain insights into usage patterns for optimized resource allocation, while integration with third-party applications and content management systems ensures seamless updates and remote management of digital signage. Overall, these tailored solutions foster innovative and efficient AV environments that meet the dynamic needs of users and businesses alike." imagepath="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    </div>
    
    <div>
    <div className='locationInfo py-[50px]'>

    
        <Footers />
    </div>

    </div>

  </div>
    )}

export default Services;


