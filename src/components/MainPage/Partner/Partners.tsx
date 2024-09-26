import React from 'react';
import p1 from '../../../assets/p1.png';
import p2 from '../../../assets/p2.jpg';
import p3 from '../../../assets/p3.png';
import p4 from '../../../assets/p4.png';
import p5 from '../../../assets/p5.png';
import p6 from '../../../assets/p6.png';
import p7 from '../../../assets/p7.png';
import p8 from '../../../assets/p8.png';
import first from '../../../assets/first.jpg';
import second from '../../../assets/second.jpg';
import third from '../../../assets/third.jpg';
import fourth from '../../../assets/fourth.jpg';
import fifth from '../../../assets/fifth.jpg';
import sixth from '../../../assets/sixth.jpg';
import seventh from '../../../assets/seventh.jpg';
import eight from '../../../assets/eight.jpg';
import nine from '../../../assets/nine.jpg';
import ten from '../../../assets/ten.png';
import eleven from '../../../assets/eleven.jpg';
import twelve from '../../../assets/twelve.jpg';
import thirteen from '../../../assets/thirteen.jpg';
import fourteen from '../../../assets/fourteen.jpg';
import fifteen from '../../../assets/fifteen.jpg';
import sixteen from '../../../assets/sixteen.jpg';
import seventeen from '../../../assets/seventeen.jpg';
import eighteen from '../../../assets/eighteen.jpg';
import globe from '../../../assets/maps1.png';

const Partners = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-semibold my-8">Trusted by</h1>

            <div className="w-full overflow-hidden">
                <div className="flex justify-center items-center space-x-4 animate-scrollLeft">
                    {[p1, p2, p3, p4, p5, p6, p7, p8].map((img, index) => (
                        <img key={index} src={img} className="h-16 mx-4" alt="Partner" />
                    ))}
                </div>
            </div>

            <h1 className="text-3xl font-semibold my-8">Our Recent Works</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{img: first, title: 'Western Midstream', description: 'Houston, TX...'},
                {img: second, title: 'Indeed', description: 'Multiple Global Locations...'},
                {img: third, title: 'Apple Park', description: 'Apple’s corporate headquarters...'},
                {img: fourth, title: 'PGA Headquarters', description: 'Dallas, TX...'},
                {img: fifth, title: 'William P. Hobby Airport', description: 'Houston, TX...'},
                {img: sixth, title: 'Crossroads Christian Church', description: 'Grand Prairie, TX...'}].map((work, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={work.img} className="w-full h-auto object-cover" alt={work.title} />
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{work.title}</h2>
                            <p className="text-gray-600 mt-2">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="text-3xl font-semibold my-8">Latest Solutions</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{img: ten, title: 'Intelligent Meetings...', description: 'In our latest webinar...'},
                {img: eleven, title: 'Experience Extraordinary...', description: 'At Aesthetix...'},
                {img: twelve, title: 'Innovation in Medical...', description: 'Imagine practicing a complex surgical...'}].map((solution, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={solution.img} className="w-full h-auto object-cover" alt={solution.title} />
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{solution.title}</h2>
                            <p className="text-gray-600 mt-2">{solution.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="text-3xl font-semibold my-8">Partnerships</h1>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[p1, p2, p3, p4, p7, p8, p2, p3, p7, p5, p6, p8].map((partner, index) => (
                    <img key={index} src={partner} className="w-32 h-20 object-cover mx-auto" alt="Partner" />
                ))}
            </div>

            <h1 className="text-3xl font-semibold my-8">Contact Us</h1>

            <div className="w-full flex flex-col md:flex-row justify-between">
                <form className="w-full md:w-3/5 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">Name*</label>
                            <input type="text" className="p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">Organization*</label>
                            <input type="text" className="p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">Email*</label>
                            <input type="email" className="p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">Phone*</label>
                            <input type="tel" className="p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">City</label>
                            <input type="text" className="p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2">State</label>
                            <input type="text" className="p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="flex flex-col mb-4 col-span-2">
                            <label className="mb-2">How may we help you?*</label>
                            <textarea className="p-2 border border-gray-300 rounded" rows="4" required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Submit</button>
                </form>

                <div className="w-full md:w-2/5 flex justify-center items-center p-4">
                    <img src={globe} className="w-full h-96 object-cover" alt="Map with locations" />
                </div>
            </div>
        </div>
    );
};

export default Partners;
