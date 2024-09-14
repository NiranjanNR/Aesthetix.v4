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
import Footers from '../../MainPage/Footer/Footers'

const Culture = () => {
    return (
        <div>
            <div className='WeImage'>
                <div className='overLay'></div>
                <div className='text-[40px] text-white z-10 font font-bold'>OUR PEOPLE & CULTURE</div>
                <div className='text-1xl text-white z-10 pt-3'> AV Innovation improving the way we work, learn and live.</div>
            </div>
            <div className='About'>
                <div className='text-3xl text-black my-5 z-10'>Connecting people through innovation</div>
                <div className='text-1xl text-black z-10'>
                    The experienced professionals of the Avidex team represent the best in the audiovisual industry. With our year-over-year growth, Avidex continues to enhance our team by adding individuals who can provide excellent service while promoting a culture that reflects our company values. If you're seeking a rewarding career with a top-tier AV integrator, apply for an open position today.                </div>
            </div>
            <div className='cards'>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card1} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Mission & Values
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card2} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Life At Aesthetix
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card3} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Meet Our Team
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox' >
                    <div>
                        <img src={card4} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Inclusion & Diversity
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card5} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Careers At Aesthetix
                    </div>
                </div>
            </div>

            <div className='text-center flex contents-center flex-col p-[20px]'>
                <div className='text-3xl text-black font-medium'>Mission & Values</div>

                <div className='text-2xl text-black font-normal'>
                    At Aesthetix we believe in five core values: accountability, integrity, passion, teamwork, and innovation to achieve our mission and vision to provide audiovisual solutions and services that enhance communication and improve the way people work, learn, and live.
                </div>
            </div>

            <div className='missionContainers'>
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

                <div className='Missioncards' style={{ backgroundColor: '#f7b536' }}>
                    <img src={m4} className='h-[150px]' />
                    <div className='text-3xl text-white p-[10px]'>Passion</div>
                </div>

                <div className='Missioncards' style={{ backgroundColor: '#ed284f' }}>
                    <img src={m5} className='h-[150px]' />
                    <div className='text-3xl text-white p-[10px]'>Teamwork</div>
                </div>

                <div className='Missioncards' style={{ backgroundColor: '#b0d249' }}>
                    <img src={m6} className='h-[150px]' />
                    <div className='text-3xl text-white p-[10px]'>Innovation</div>
                </div>

            </div>

            <div className='text-center flex contents-center flex-col height-[max-content]'>
                <div className='text-3xl text-black font-medium'>Life At Aesthetix</div>

                <div className='text-2xl text-black font-normal'>
                    At Aesthetix employees take pride in working together, sharing common core values, and striving to improve the way people work, learn, and live.
                </div>

                <div className='AesthetixLifeCards'>
                    <img src={card1} />
                    <img src={card2} />
                    <img src={card3} />
                    <img src={card4} />
                    <img src={card5} />
                    <img src={card1} />
                    <img src={card2} />
                    <img src={card3} />
                </div>


            </div>

            <div className='OurLeaders p-10 h-[80vh]'>
                <div className='text-3xl text-black text-center font-bold  p-[20px]'>EXECUTIVE LEADERSHIP TEAM</div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
                    <div className='heroCard mx-auto'>
                        <img src={ceo} className='h-[250px] w-[100%]' />
                        <div className='font-bold px-[20px] py-[10px]'>Vishaal S Upot</div>
                        <div className='font-medium px-[20px] pb-[20px]'>CEO, <br /> Brics Tech</div>
                    </div>

                    <div className='heroCard mx-auto'>
                        <img src={ceo} className='h-[250px] w-[100%]' />
                        <div className='font-bold px-[20px] py-[10px]'>Vishaal S Upot</div>
                        <div className='font-medium px-[20px] pb-[20px]'>CEO, <br /> Brics Tech</div>
                    </div>

                    <div className='heroCard mx-auto'>
                        <img src={ceo} className='h-[250px] w-[100%]' />
                        <div className='font-bold px-[20px] py-[10px]'>Vishaal S Upot</div>
                        <div className='font-medium px-[20px] pb-[20px]'>CEO, <br /> Brics Tech</div>
                    </div>

                    <div className='heroCard mx-auto'>
                        <img src={ceo} className='h-[250px] w-[100%]' />
                        <div className='font-bold px-[20px] py-[10px]'>Vishaal S Upot</div>
                        <div className='font-medium px-[20px] pb-[20px]'>CEO, <br /> Brics Tech</div>
                    </div>
                </div>
            </div>

            <div className='h-[70vh]'>
                <div className='text-3xl font-bold flex justify-center align-middle py-[30px]'>DIVERSITY & INCLUSION</div>
                <div className='text-2xl font-medium flex justify-center align-middle py-[20px]'>Diversifying the way we work, learn, and live to connect people and organizations.</div>

                <div className='text-[20px] font-normal flex justify-center align-middle text-center leading-relaxed w-[1200px] m-auto'>
                    Avidex recognizes that an inclusive and diverse work environment respects the unique characteristics, skills, and experiences of all employees, partners, and customers. At Avidex our mission is to provide audiovisual solutions and services that enhance communication and improve the way people work, learn, and live. We recognize, respect, and appreciate our diverse and unique global workforce and its commitment to our mission and values. That translates into maintaining a culture where individual strengths, combined with teamwork, are recognized as the foundation of our mutual success. We value the different perspectives that each of us brings to the work environment, our company, and our customers.

                    Avidex strives to foster belonging and empowerment at work through our commitment to promote accountability, integrity, passion, teamwork, and innovation among people from diverse backgrounds. In this environment, these values guide the efforts of all of our team members, as well as Avidex’s policies and practices.

                    Avidex will continue to empower and understand how to lead diverse groups of employees to achieve success and live out our mission. It is also imperative that Avidex attracts and develops the best candidates in an increasingly more diverse talent pool to be the leader in collaborative solutions, connecting people and organizations today and in the future.
                </div>
            </div>

            <div className='h-[20vh] backdrop-brightness-95 flex justify-center align-middle items-center text-center font-bold text-4xl'>
                CAREERS AT AESTHETIX
            </div>

            <div className='flex flex-row w-[1300px] m-[auto] h-[70vh]'>
                <img src={career} style={{ height: '500px', padding: '40px' }} />

                <div>
                    <div className='text-3xl py-[20px] font-bold'>Join Our Team</div>
                    <div className='text-[20px] py-[20px] font-medium'>
                        When you join the Avidex team, you join a team of passionate, creative, top-notch AV industry professionals. You will enjoy a company culture where ideas are encouraged, creativity flourishes, hard work is valued, and results are rewarded. Furthermore, Avidex is fundamentally committed to the success and continued professional development of each of its employees. Avidex provides extensive and ongoing training such as manufacturer training and certification, as well as industry training such as AVIXA's CTS programs and Project Management Institute's PMP certification. We are an equal opportunity employer and attract and retain qualified candidates through experience-and-knowledge-based selection.
                    </div>
                </div>
            </div>

            <Footers />
        </div>
    )
}

export default Culture;