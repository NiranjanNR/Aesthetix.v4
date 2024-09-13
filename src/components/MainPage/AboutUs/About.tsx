import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import every from '../../../assets/every.mp4';
import First from '../../../assets/FIRST.mp4';
import Second from '../../../assets/SECOND.mp4';

const About = () => {
  return (
    <div className='flex-row justify-center px-5 '>
      <motion.div className='flex py-12'>
        <motion.div
          className='max-w-xl mr-10'
          initial={{ opacity: 0, x: -100 }}  
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className='text-3xl font-sans mb-4'>
            About Us
          </h2>
          <p className='text-lg font-sans mb-5'>
            Aesthetix is America’s leading audiovisual solutions integrator. With over 50 years of experience, we are the complete technology provider for the nation’s top enterprise brands for design, installation, and service of professional sound systems, AV systems, video conferencing systems, networks, and security surveillance systems.
          </p>
          <button className="bg-red-700 text-white py-2 px-5 border-3 border-red-700 cursor-pointer w-36 h-12 hover:bg-white hover:text-red-700 transition duration-200">
            Learn More
          </button>
        </motion.div>

        <motion.div
          className='flex justify-end'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <iframe
            width="750"
            height="415"
            src="https://www.youtube.com/embed/Jp5VIOMmTuU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>

      <motion.div
        className='ConfImage'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="overlay">
          <div className='confText'>
            <div className='confHead'>
              Solutions for Modern Collaboration
            </div>
            <div className='confPara'>
              Today’s modern workplace runs on Microsoft Teams, Zoom, Cisco Webex, and Google Meet. Join online meetings from the conference room with one touch! Aesthetix is a trusted partner of leading software and hardware solutions for the meeting room.
            </div>
            <button type="submit" className="talk-btn">Talk To An Expert</button>
          </div>
        </div>
      </motion.div>

      <motion.div className='flex flex-wrap justify-between bg-gray-100 my-8'>
        <motion.div
          className='flex flex-col w-full md:w-[48%] p-5'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className='h-96 mb-4'>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UytHN0NmSmw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className='text-2xl font-sans mb-2'>
            ISE 2024 | Integrated systems Europe
          </h2>
          <p className='text-base font-sans mb-4'>
            Reflecting on an incredible week at ISE 2024! Our team had a great time participating in one of the most dynamic and innovative events in the industry.
          </p>
          <button className="bg-red-700 text-white py-2 px-5 border-3 border-red-700 cursor-pointer w-36 h-12 hover:bg-white hover:text-red-700 transition duration-200">
            Learn More
          </button>
        </motion.div>

        <motion.div
          className='flex flex-col w-full md:w-[48%] p-5'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className='h-96 mb-4'>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rVz1XkXo0eE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className='text-2xl font-sans mb-2'>
            Enhancing connectivity and collaboration
          </h2>
          <p className='text-base font-sans mb-4'>
            Boardrooms with AI Auto Tracking Camera, Meeting Rooms/ Huddle Spaces, Town Hall with Fine Pixel Pitch Curved LED, Training Hall with HyFlex Facility, Smart Desk Management for Workspace.
          </p>
          <button className="bg-red-700 text-white py-2 px-5 border-3 border-red-700 cursor-pointer w-36 h-12 hover:bg-white hover:text-red-700 transition duration-200">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
