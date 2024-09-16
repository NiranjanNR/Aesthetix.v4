import './Support.css';

const Support = () =>{
    return(
        <div>
            <div className='flex content-center items-center flex-col'>
                <div className='contactFirst'>
                    <div className='contactText'>
                        <div className='text-1xl font-semibold py-[5px]'>CONTACT</div>
                        <div className='text-4xl font-bold py-[5px]'>SUMBIT A SERVICE TICKET</div>
                        <div className='text-1xl font-semibold'>avsupport@aesthetix.com</div>
                        <div className='text-2xl font-bold'>542.438.110</div>
                    </div>
                </div>
                <div className='contactForm' style={{ marginTop: '-70px', padding: '50px' }}>
                <form >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name</label>
                            <input type='text' name='firstName' className='contactBox'/>
                        </div>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name</label>
                            <input type='text' name='lastName' className='contactBox'  />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                            <input type='email' name='email' className='contactBox'  />
                        </div>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone Number</label>
                            <input type='tel' name='phone' className='contactBox'  />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Company Name</label>
                            <input type='text' name='companyName' className='contactBox'  />
                        </div>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title</label>
                            <input type='text' name='title' className='contactBox'  />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Street Address 1</label>
                            <input type='text' name='streetAddress1' className='contactBox'  />
                        </div>
                        <div style={{ flex: '1 1 45%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Street Address 2</label>
                            <input type='text' name='streetAddress2' className='contactBox'  />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <div style={{ flex: '1 1 30%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City</label>
                            <input type='text' name='city' className='contactBox'  />
                        </div>
                        <div style={{ flex: '1 1 30%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>State</label>
                            <input type='text' name='state' className='contactBox'  />
                        </div>
                        <div style={{ flex: '1 1 30%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Zip Code</label>
                            <input type='text' name='zipCode' className='contactBox'  />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        <div style={{ flex: '1 1 100%' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description</label>
                            <textarea name='description' rows='4' style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <button type='submit' style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer' }}>Submit</button>
                    </div>
                </form>

                </div>

            </div>
           
            
        </div>
    )
}

export default Support;
