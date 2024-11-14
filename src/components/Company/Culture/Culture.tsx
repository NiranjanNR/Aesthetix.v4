import './Culture.css'
import card1 from '../../../assets/card1.jpg'
import card2 from '../../../assets/card2.webp'
import card3 from '../../../assets/card3.webp'
import card4 from '../../../assets/card4.jpg'
import card5 from '../../../assets/card5.webp'
import m1 from '../../../assets/mission1.webp'
import m2 from '../../../assets/mission2.webp'
import m3 from '../../../assets/mission5.webp'
import m4 from '../../../assets/mission4.webp'
import m5 from '../../../assets/mission5.webp'
import m6 from '../../../assets/mission6.webp'
import ceo from '../../../assets/dp.jfif'
import career from '../../../assets/career.webp'
import Footers from '../../Footer/Footers'

import c1 from '../../../assets/card1.jpeg'
import c2 from '../../../assets/card2.jpeg'
import c3 from '../../../assets/card3.jpeg'
import c4 from '../../../assets/card4.jpeg'
import c5 from '../../../assets/card5.jpeg'
import c7 from '../../../assets/card7.jpeg'
import c8 from '../../../assets/card8.jpeg'
import c9 from '../../../assets/card9.webp'
import { useNavigate } from 'react-router-dom';

const Culture = () =>{
    const navigate = useNavigate();
    return(
        <div className='font'>
            <div className='WeImage relative'>
                <div className='overLay overLay1'></div>
                <div className='text-[28px] sm:text-[40px] text-white z-10 font font-bold'>OUR PEOPLE & CULTURE</div>
                <div className='text-sm sm:text-1xl text-white z-10 pt-3'> AV Innovation improving the way we work, learn and live.</div>
            </div>
            <div className='About px-4 sm:px-8'>
                <div className='text-xl sm:text-3xl primaryH font-bold my-5 z-10 text-center'>CONNECTING PEOPLE THROUGH INNOVATION</div>
                <div className='text-[18px] sm:text-[18px] primaryP  z-10 text-center mx-auto sm:mx-[10rem]'>
                The experienced professionals of the Aesthetix team represent the best in the audiovisual industry. With our year-over-year growth, Aesthetix continues to enhance our team by adding individuals who can provide excellent service while promoting a culture that reflects our company values. If you're seeking a rewarding career with a top-tier AV integrator, apply for an open position today.                
                </div>
            </div>
            <div className='cards'>

                <div className='flex flex-col w-[225px] cardBox'>
                    <div>
                        <img src={card1} />
                    </div>
                    <div className='h-[100px] flex items-center text-[18px] p-[20px] primaryH font-bold justify-center'>
                        Mission & Values
                    </div>
                </div>

                <div className='flex flex-col w-[225px] cardBox'>
                    <div>
                        <img src={card2} />
                    </div>
                    <div className='h-[100px] flex items-center text-[18px] p-[20px] primaryH font-bold justify-center'>
                        Life At Aesthetix
                    </div>
                </div>

                <div className='flex flex-col w-[225px] cardBox'>
                    <div>
                        <img src={card3} />
                    </div>
                    <div className='h-[100px] flex items-center text-[18px] p-[20px] primaryH font-bold justify-center'>
                        Meet Our Team
                    </div>
                </div>

                <div className='flex flex-col w-[225px] cardBox' >
                    <div>
                        <img src={card4} />
                    </div>
                    <div className='h-[100px] flex items-center text-[18px] p-[20px] primaryH font-bold justify-center'>
                        Inclusion & Diversity
                    </div>
                </div>

                <div className='flex flex-col w-[225px] cardBox'>
                    <div>
                        <img src={card5} />
                    </div>
                    <div className='h-[100px] flex items-center text-[18px] p-[20px] primaryH font-bold justify-center'>
                        Careers At Aesthetix
                    </div>
                </div>
            </div>

            <div className='text-center flex contents-center flex-col p-[20px]'>
                <div className='text-[25px] primaryH font-bold py-[1.25rem]'>MISSION & VALUES</div>

                <div className='text-[16px] sm:text-[18px] primaryP z-10 text-center mx-auto sm:mx-[10rem]'>
                At Aesthetix we believe in five core values: accountability, integrity, passion, teamwork, and innovation to achieve our mission and vision to provide audiovisual solutions and services that enhance communication and improve the way people work, learn, and live.
                </div>
            </div>

            <div className='missionContainers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
            <div className='Missioncards' style={{ backgroundColor: '#0ba6df' }}>
                        <img src={m1} className='h-[150px]' />
                        <div className='text-3xl text-white p-[10px]'>Mission & Vision</div>
                    </div>

                    <div className='Missioncards' style={{ backgroundColor: '#ec008c' }}>
                        <img src={m2} className='h-[150px]' />
                        <div className='text-3xl text-white p-[10px]'>Accountability</div>
                    </div>

                    <div className='Missioncards' style={{ backgroundColor: '#894a90' }}>
                        <img src={m3} className='h-[150px]' />
                        <div className='text-3xl text-white p-[10px]'>Integrity</div>
                    </div>

                    <div className='Missioncards' style={{ backgroundColor: '#ed284f' }}>
                        <img src={m5} className='h-[150px]' />
                        <div className='text-3xl text-white p-[10px]'>Teamwork</div>
                    </div>

                    <div className='Missioncards' style={{ backgroundColor: '#b0d249' }}>
                        <img src={m6} className='h-[150px]' />
                        <div className='text-3xl text-white p-[10px]'>Innovation</div>
                    </div>

                    <div className='Missioncards' style={{ backgroundColor: '#f7b536' }}>
                        <img src={m4} className='h-[150px]' />
                        <div className='text-3xl text-white p-[10px]'>Client Support</div>
                    </div>
            </div>


            <div className='text-center flex contents-center flex-col height-[max-content] py-[5rem] overflow-hidden'>
                <div className='text-[25px] font-bold primaryH'>LIFE AT AESTHETIX</div>

                <div className='text-[18px] font-normal primaryP px-[10rem] py-[1rem]'>
                At Aesthetix employees take pride in working together, sharing common core values, and striving to improve the way people work, learn, and live.
                </div>

                <div className='AesthetixLifeCards py-[5rem]'>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c1} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c2} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c3} style={{ width: '100%', height: '200%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c4} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c5} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c8} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c7} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>

                    <div style={{width: '30vw', height: '30vh'}}>
                    <img src={c9} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                </div>

            </div>

        <div className='OurLeaders p-16 h-[80vh]'>
            <div className='text-3xl primaryH text-center font-bold py-[50px]'>EXECUTIVE LEADERSHIP TEAM</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center align-center'>
            
            <div className='heroCard mx-auto'>
                <img src={ceo} className='h-[250px] w-[100%]'/>
                <div className='heroName'>Raphael Iyipe</div>
                <div className='heroDes'>General Manager - Operations and Key Accounts (UAE/KSA)</div>
            </div>

            <div className='heroCard mx-auto'>
                <img src={ceo} className='h-[250px] w-[100%]'/>
                <div className='heroName'>Prasad Ramachandran</div>
                <div className='heroDes'>General Manager  – Sales</div>
            </div>

            <div className='heroCard mx-auto'>
                <img src={ceo} className='h-[250px] w-[100%]'/>
                <div className='heroName'>Arun Balram</div>
                <div className='heroDes'>Business Unit Head ( UAE | KSA )</div>
            </div>
            

            </div>
        </div>

        <div className='min-h-[max-content] h-[80vh] diverseImage' >
            <div className='text-3xl font-bold flex justify-center align-middle py-[30px] primaryH'>DIVERSITY & INCLUSION</div>
            <div className='text-1xl font-bold flex justify-center align-middle py-[20px]' style={{color: 'rgb(25 0 71)'}}>Diversifying the way we work, learn, and live to connect people and organizations.</div>

            <div className='text-[18px] m-[auto] font-normal flex justify-center align-middle text-center leading-relaxed w-[1200px]'>
            Aesthetix recognizes that an inclusive and diverse work environment respects the unique characteristics, skills, and experiences of all employees, partners, and customers. At Aesthetix our mission is to provide audiovisual solutions and services that enhance communication and improve the way people work, learn, and live. We recognize, respect, and appreciate our diverse and unique global workforce and its commitment to our mission and values. That translates into maintaining a culture where individual strengths, combined with teamwork, are recognized as the foundation of our mutual success. We value the different perspectives that each of us brings to the work environment, our company, and our customers. 
            <br />
            <br />
            Aesthetix strives to foster belonging and empowerment at work through our commitment to promote accountability, integrity, passion, teamwork, and innovation among people from diverse backgrounds. In this environment, these values guide the efforts of all of our team members, as well as Aesthetix’s policies and practices.
            <br />
            <br />
            Aesthetix will continue to empower and understand how to lead diverse groups of employees to achieve success and live out our mission. It is also imperative that Aesthetix attracts and develops the best candidates in an increasingly more diverse talent pool to be the leader in collaborative solutions, connecting people and organizations today and in the future.
            <br />
            <br />
            </div>
        </div>

        <div className='h-[max-content] min-h-[20vh] backdrop-brightness-95 flex justify-center align-middle items-center text-center font-bold text-3xl primaryH'>
           CAREERS AT AESTHETIX
        </div>

        <div className='flex flex-row w-[1300px] m-[auto] h-[70vh] justify-between p-[30px]'>
            <img src={career} style={{height: '450px', padding:'20px'}}/>

            <div>
                <div className='text-2xl py-[20px] font-bold primaryH'>JOIN OUR TEAM</div>
                <div className='text-[16px] py-[20px] font-medium primaryP text-justify'>
                When you join the Aesthetix team, you join a team of passionate, creative, top-notch AV industry professionals. You will enjoy a company culture where ideas are encouraged, creativity flourishes, hard work is valued, and results are rewarded. Furthermore, Aesthetix is fundamentally committed to the success and continued professional development of each of its employees. Aesthetix provides extensive and ongoing training such as manufacturer training and certification, as well as industry training. We are an equal opportunity employer and attract and retain qualified candidates through experience-and-knowledge-based selection.                </div>
                <button className='bg-[#75016b] text-white md:px-[30px] md:py-[10px] px-4 py-2 rounded' onClick={() => navigate('/careers')} >Find Your Opportunity</button>
            </div>
        </div>

        <Footers />
        </div>
    )
}

export default Culture;