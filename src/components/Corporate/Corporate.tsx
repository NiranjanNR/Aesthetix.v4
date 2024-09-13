import { Tabs } from 'flowbite-react';
import './Corporate.css';
const Corporate = () => {
  return (
      <div>
          {/* Landing */}
          <div className="background h-[70vh] w-[100vw] flex items-center mb-10">
              <div className='h-[30vh] lg:w-[48vw] w-[70vw] min-h-[31vh] bg-white/75 ml-20 lg:p-9 p-4'>
                  <div className='md:text-3xl md:font-bold text-xl font-semibold'>
                        CORPORATE AV SOLUTIONS
                  </div>
                  <div className='text-xl md:font-semibold mt-6 text-[#424141] mb-8'>
                        Empowering innovation and productivity with collaborative audiovisual technology.
                  </div>
                  <button className='bg-[#6d2950] text-white md:px-[30px] md:py-[10px] px-4 py-2'>GET STARTED NOW</button>
              </div>
          </div>
          <div className='flex justify-center mb-8'>
              <div className='w-[60vw]'>
              <div className='md:text-3xl md:font-bold text-xl font-semibold text-center mb-5'>
                        Solutions for Every Space
              </div>
              <div className='text-lg mt-6 text-[#424141] text-center mb-8'>
                        There's no one-size-fits-all when it comes to filling audiovisual needs. We've helped organizations of all kinds find the best-fit AV solutions for their unique workplace environments. 
                  </div>
          </div>
          </div>

          <div className='flex justify-center mb-10'>
              <div className="overflow-x-auto w-[80vw]">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Profile">
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Dashboard">
          This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings">
          This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts">
          This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
            </div>
          
    </div>
  )
}

export default Corporate