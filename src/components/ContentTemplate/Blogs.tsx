import './Content.css'
import govt4 from '../../assets/govt4.png'
import govt5 from '../../assets/govt5.png'
import govt6 from '../../assets/govt6.png'

const Blogs = (props: {
  page: string | undefined
}) => {
  return (
      <div className="bg-[#3f1846f0] md:h-[100%] flex justify-center items-center gap-20 mb-10">
          <div>
              <div className='text-3xl flex justify-center m-10 text-white font-semibold'>
                  Recent {props.page} Projects
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className="card shadow">
                  <img  src={govt4} style={{height: '280px', width:'100%'}}/>
                  <div className='m-4'>
                  Our latest project showcases the incredible potential of advanced technology to elevate and transform modern spaces. </div>
                </div>
                <div className="card shadow">
                  <img  src={govt5} style={{height: '280px', width:'100%'}}/>
                  <div className='m-4'>
                  Aesthetix Technologies proudly contributed to the Dubai Airport project by integrating advanced audio-visual solutions</div>
                </div>
                <div className="card shadow">
                  <img src={govt6} style={{height: '280px', width:'100%'}}/>
                  <div className='m-4'>
                  We're all about transforming ordinary offices into smart, connected environments. We recently partnered with a leading government client  </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Blogs
