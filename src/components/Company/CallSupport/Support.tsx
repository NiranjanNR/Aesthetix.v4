import './Support.css';

const Support = () => {

    return (
        <div className='flex justify-center items-center flex-col'>
            {/* Contact Section */}
            <div className='w-full lg:w-100vw flex justify-center items-center flex-col'>
                <div className='contactFirst text-center flex flex-col'>
                    <div className='contactText'>
                        <div className='text-4xl font-bold py-2'>CONTACT US</div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='contactForm mt-6 sm:mt-[-70px] p-4 sm:p-10 bg-white shadow-md rounded-lg w-full lg:w-[80%] mb-8'>
                    <form className="space-y-6">
                        {/* First and Last Name */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block font-semibold mb-1'>First Name</label>
                                <input type='text' name='firstName' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                            <div>
                                <label className='block font-semibold mb-1'>Last Name</label>
                                <input type='text' name='lastName' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                        </div>

                        {/* Email and Phone Number */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block font-semibold mb-1'>Email</label>
                                <input type='email' name='email' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                            <div>
                                <label className='block font-semibold mb-1'>Phone Number</label>
                                <input type='tel' name='phone' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                        </div>

                        {/* Company Name and Title */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block font-semibold mb-1'>Company Name</label>
                                <input type='text' name='companyName' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                            <div>
                                <label className='block font-semibold mb-1'>Title</label>
                                <input type='text' name='title' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                        </div>

                        {/* Street Address 1 and 2 */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='block font-semibold mb-1'>Street Address 1</label>
                                <input type='text' name='streetAddress1' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                            <div>
                                <label className='block font-semibold mb-1'>Street Address 2</label>
                                <input type='text' name='streetAddress2' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                        </div>

                        {/* City, State, and Zip Code */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                            <div>
                                <label className='block font-semibold mb-1'>City</label>
                                <input type='text' name='city' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                            <div>
                                <label className='block font-semibold mb-1'>State</label>
                                <input type='text' name='state' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                            <div>
                                <label className='block font-semibold mb-1'>Zip Code</label>
                                <input type='text' name='zipCode' className='contactBox w-full p-2 border rounded-md' />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className='block font-semibold mb-1'>Description</label>
                            <textarea name='description' className='w-full p-3 border rounded-md' />
                        </div>

                        {/* Submit Button */}
                        <div className='mt-6'>
                            <button type='submit' className='bg-[#6d2950] hover:bg-[#4a1835] text-white px-6 py-2 rounded-md font-bold'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Support;
