import './Location.css'
import Dubai from '../../../assets/dubai.jpg'

const Location = () =>{
    return(
        <div>
            <div className='locationCover'>
                <div className='overLays'>
                    <div className='text-4xl text-white font-bold py-[15px]'>OUR LOCATIONS</div>
                    <div className='text-1xl text-white font-medium text-center' >Avidex delivers innovative AV solutions that enable organizations and enterprises to collaborate, create, and share ideas through state-of-the-art audiovisual and unified communication technologies. Avidex specializes in creating an unparalleled client experience in the use of collaborative audiovisual solutions as a global pro-AV integrator providing design, build, and service excellence.</div>
                </div>
            </div>

            <div className='locationInfo'>

                <div className='LocationCard'>
                    <img src={Dubai} className='LocationCardImage'/>
                    <div className='LocationCardText'>
                        <div className='text-1xl font-bold py-[5px]'>DUBAI,<br/> UNITED ARAB EMIRATES</div>
                        <div className='text-[16px] font-medium py-[5px]'>123 26th St<br/> Al Quoz Industrial Area 4</div>
                        <div className='text-[14px] font-bold py-[5px]'> 04 320 9096</div>
                    </div>
                </div>

                <div className='LocationCard'>
                    <img src={Dubai} className='LocationCardImage'/>
                    <div className='LocationCardText'>
                        <div className='text-1xl font-bold py-[5px]'>DUBAI,<br/> UNITED ARAB EMIRATES</div>
                        <div className='text-[16px] font-medium py-[5px]'>123 26th St<br/> Al Quoz Industrial Area 4</div>
                        <div className='text-[14px] font-bold py-[5px]'> 04 320 9096</div>
                    </div>
                </div>

                <div className='LocationCard'>
                    <img src={Dubai} className='LocationCardImage'/>
                    <div className='LocationCardText'>
                        <div className='text-1xl font-bold py-[5px]'>DUBAI,<br/> UNITED ARAB EMIRATES</div>
                        <div className='text-[16px] font-medium py-[5px]'>123 26th St<br/> Al Quoz Industrial Area 4</div>
                        <div className='text-[14px] font-bold py-[5px]'> 04 320 9096</div>
                    </div>
                </div>
            </div>

            <div>
            <svg viewBox="0 0 500 200" style={{bottom: '-15px', position: 'relative'}}>
                <path d="M 0 170 C 120 200 350 100 500 180 L 500 200 L 0 200 Z" fill="rgb(57, 27, 112)"></path>
            </svg>
            <div className='supportDesign'>

            </div>
            <svg viewBox="0 0 500 200" style={{top: '-15px', position: 'relative'}}>
                <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
            </svg>
            </div>
        </div>
    )
}

export default Location;