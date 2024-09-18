const ContactTemplate = (
    props:{
        backgroundColor ?: string | undefined,
    }
) => {
  return (
    <div style={{height: '40vh',width: '100vw', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column',   backgroundColor: props.backgroundColor    }}>
    <div style={{position: 'relative', top: '0', width: '60px', height: '3px', backgroundColor: 'rgb(120, 68, 172)', borderRadius: '4px', margin: '10px'}}></div>

        <div className='text-2xl text-center font-bold py-[10px] text-[#7844AC]'>
            HOW CAN WE HELP ?
        </div>
        <div className='text-[#444] font-semibold text-[18px] text-center py-[10px]'>
            Connect with one of our audiovisual experts and start creating an unforgettable AV experience today!
        </div>
        <input type='button' className='bg-[#7844AC] font-sans text-white font-semibold text-[15px] text-center p-4 rounded-md my-2' value="GET IN TOUCH" /> 
    </div>
     
  )
}

export default ContactTemplate
