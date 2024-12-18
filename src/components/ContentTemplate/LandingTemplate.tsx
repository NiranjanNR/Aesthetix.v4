import { useNavigate } from "react-router-dom"

const LandingTemplate = (props: { header: string | undefined, description: string | undefined, imagepath: string | undefined, buttontext: string | undefined }) => {
  const navigate = useNavigate();
  return (
          <div style={{ backgroundImage: `url(${props.imagepath})` }} className="bg-cover h-[70vh] w-[100vw] flex items-center mb-10">
              <div className='h-[max-content] lg:w-[48vw] w-[70vw]  bg-white/75 ml-20 lg:p-9 p-4'>
                  <div className='md:text-[26px] md:font-bold text-xl font-semibold text-[#5b255d]'>
                        {props.header}
                  </div>
                  <div className='text-lg md:font-bold mt-6 text-[#5b5a5a] mb-8'>
                        {props.description}
        </div>
        {props.buttontext === '' ? <></> : 
              <button onClick={()=>{navigate("/support")}} className='bg-[#6d2950] text-white md:px-[30px] md:py-[10px] px-4 py-2 rounded'>{props.buttontext}</button> }
              </div>
          </div>
  )
}

export default LandingTemplate