
const LandingTemplate = (props: { header: string | undefined, description: string | undefined, imagepath: string | undefined, buttontext: string | undefined }) => {
  return (
          <div style={{ backgroundImage: `url(${props.imagepath})` }} className="bg-cover h-[70vh] w-[100vw] flex items-center mb-10">
              <div className='h-[30vh] lg:w-[48vw] w-[70vw] min-h-[31vh] bg-white/75 ml-20 lg:p-9 p-4'>
                  <div className='md:text-3xl md:font-bold text-xl font-semibold'>
                        {props.header}
                  </div>
                  <div className='text-xl md:font-semibold mt-6 text-[#424141] mb-8'>
                        {props.description}
                  </div>
              <button className='bg-[#6d2950] text-white md:px-[30px] md:py-[10px] px-4 py-2'>{props.buttontext}</button>
              </div>
          </div>
  )
}

export default LandingTemplate