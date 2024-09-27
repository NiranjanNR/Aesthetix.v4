import './Content.css'
const Blogs = () => {
  return (
      <div className="bg-[#3f1846f0] md:h-[65vh] flex justify-center items-center gap-20 mb-10">
          <div>
              <div className='text-3xl flex justify-center mb-10 text-white font-semibold'>
              News, Blogs and Events
          </div>
          <div className='md:flex items-center justify-center mb-5 gap-14'>
            <div className="card shadow">
              <img className=' m-[0.2px]' src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800" />
                      <div className='m-4'>
                          As campus security teams update their preparedness plans and crisis response, many are turning to...
                </div>
            </div>
            <div className="card shadow">
              <img className=' m-[0.2px]' src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=800" />
                      <div className='m-4'>
                          Just because something can be DIY’ed doesn’t mean it should be, and that can be especially true...
                </div>
                  </div>
                  <div className="card shadow">
              <img className=' m-[0.2px]' src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800" />
                      <div className='m-4'>
                          In an exclusive, in-depth interview, Aesthetix spoke with Commercial Integrator on Aesthetix's recent...
                </div>
            </div>
            
            </div>
          </div>
    </div>
  )
}

export default Blogs