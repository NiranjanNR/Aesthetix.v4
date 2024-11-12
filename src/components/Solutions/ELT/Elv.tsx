import './Elv.css'
import { Tabs } from 'flowbite-react';
import ContentTemplate from '../../ContentTemplate/ContentTemplate';
import HeaderDescription from '../../ContentTemplate/HeaderDescription';
import VerticalBox from '../../ContentTemplate/VerticalBox';
import LandingTemplate from '../../ContentTemplate/LandingTemplate';
import Footers from '../../Footer/Footers';

const Elv = () =>{
    return(
        <div>
        {/* Landing */}

        <LandingTemplate header="ELV" description="Holistic Audio Integration for Schools, Businesses, and Healthcare Facilities" buttontext="" imagepath="https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        <div className='py-20 backgroundColor mt-[-40px]'>
        <HeaderDescription className='text-[#5b255d]' header='ELV' description='These systems are essential in modern buildings and infrastructure, as they enhance safety, energy efficiency, and operational effectiveness. ELV systems encompass a range of applications that support various functions, including communication, security, and automation.' />
        </div>

        <div className='flex justify-center mb-10 flex-col items-center my-auto '>
        <div className='md:text-3xl md:font-bold text-xl font-semibold text-center mb-5 py-10 text-[#5b255d]'>SOLUTIONS FOR EVERY SPACE</div>
            <div className="overflow-x-auto w-[80vw] border-2 p-5 rounded-xl">
                
    <Tabs aria-label="Full width tabs" variant="fullWidth">
          <Tabs.Item active title="Telecommunication Systems">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Telecommunication systems involve structured cabling that facilitates voice and data communication. This includes network cabling solutions that support internet connectivity and enable seamless communication across devices within a building.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
      </Tabs.Item>
      <Tabs.Item active title="Security Systems">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Security systems enhance safety through components like CCTV surveillance, which monitors and records activities, and access control systems that restrict entry to authorized personnel. Intrusion detection systems further alert users to unauthorized access, providing a comprehensive security solution.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/786123/pexels-photo-786123.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Fire Alarm Systems">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Fire alarm systems are designed to detect smoke or fire and alert occupants and emergency services. These systems are crucial for ensuring safety and compliance with regulations, facilitating quick evacuation during emergencies.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/103592/pexels-photo-103592.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Audio-Visual Systems">
            <div className='flex justify-center'>
              <div className='w-[50vw]'>
                    <div className='text-center'>
                      Audio-visual systems improve communication through tools like public address systems and integrated conference room solutions. These technologies enhance presentations and collaborative efforts, making them vital in corporate and public environments.
                </div>
                <img className='h-[50vh] w-[50vw] mt-5' src="https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg?auto=compress&cs=tinysrgb&w=800" />
               </div>
            </div>
          </Tabs.Item>
    </Tabs>
  </div>
        </div>

    <div className='grid grid-cols-2 gap-x-28 mx-[100px]'>
      <div className='bg-[#7a7a7a15]'>
        <VerticalBox header='Building Management Systems (BMS)' description="Building Management Systems (BMS) are comprehensive solutions that monitor and control a building's mechanical and electrical equipment. These systems optimize the performance of heating, ventilation, air conditioning (HVAC), lighting, and security systems by providing centralized control and automation. By integrating various ELV systems, a BMS enhances energy efficiency, reduces operational costs, and improves occupant comfort. Additionally, BMS solutions often provide data analytics that can inform maintenance schedules and operational strategies." imagepath='https://images.pexels.com/photos/12932587/pexels-photo-12932587.png?auto=compress&cs=tinysrgb&w=800'/>
      </div>
      <div className='bg-[#9864a21d] '>
        <VerticalBox header="Lighting Control Systems" description="Lighting control systems allow for the efficient management of lighting fixtures in both residential and commercial spaces. These systems enable automated control over lighting levels, schedules, and energy consumption, promoting energy efficiency and user comfort. Advanced lighting control can include features like motion sensors, daylight harvesting, and dimming capabilities, allowing occupants to customize their environments according to their needs. By enhancing the user experience and reducing energy waste, lighting control systems play a significant role in sustainable building design." imagepath='https://images.pexels.com/photos/8102690/pexels-photo-8102690.jpeg?auto=compress&cs=tinysrgb&w=800'/>
      </div>
    </div>
        
    <div className='bg-[#9864a21d] my-20'>
            <ContentTemplate direction='left' heading="Data Networking" description="Data networking encompasses the infrastructure that connects devices and systems within a building, supporting internet connectivity and communication. This includes routers, switches, and wireless access points that ensure reliable and efficient data transmission. A robust data networking framework is essential for supporting various applications, from basic internet access to complex building management systems, enhancing overall productivity and operational effectiveness." imagepath="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    </div>
    
    <div>
    <div className='locationInfo py-[50px]'>

    
        <Footers />
    </div>

    </div>

  </div>
    )}

export default Elv;


