const HeaderDescription = (props: { header: string | undefined, description: string | undefined }) => {
  return (
      <div>
          <div className='flex justify-center mb-8'>
              <div className='w-[60vw]'>
                  <div className='md:text-3xl md:font-bold text-xl font-semibold text-center mb-5'>
                      {props.header}
              </div>
                  <div className='text-lg mt-6 text-[#424141] text-center mb-8'>
                      {props.description}
                  </div>
          </div>
          </div>
    </div>
  )
}

export default HeaderDescription