import './Support.css';

const Support = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            {/* Contact Section */}
            <div className='w-full lg:w-100vw flex justify-center items-center flex-col'>
                <div className='contactFirst text-center flex flex-col'>
                    {/* <div className='contactText'>
                        <div className='text-xl sm:text-2xl font-semibold py-2'>CONTACT</div>
                    </div> */}

                    <div className='contactForm mt-10 sm:mt-[400px] p-4 sm:p-10 bg-white shadow-md rounded-lg w-full lg:w-[80%]'>
                                                <h5>We are thrilled that you are interested in joining our team.  We appreciate the time and effort taken to apply for a position with us.  

                            At Aesthetix we are dedicated to maintaining a team of experienced professionals and promoting a positive company culture that reflects our values.  

                            We are looking forward to learning more about you and your qualifications.</h5>


                        <form className="max-w-md mx-auto" style={{padding: '20px'}}>   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative" >
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Jobs, Positions.." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" style={{backgroundColor: '#4E0346'}}>Search</button>
                            </div>
                        </form>

                    </div>
                </div>

                {/* Contact Form */}
               
            </div>
        </div>
    );
}

export default Support;
