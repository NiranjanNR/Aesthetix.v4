import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import every from '../../assets/every.mp4';
import First from '../../assets/FIRST.mp4';
import Second from '../../assets/SECOND.mp4';

const About = () => {
  return (
    <div className='flex justify-center equal-padding flex-col'>
      <motion.div
        className='Abtus'
      >
        <motion.div
          className='AbtusText'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className='heading'>
            About Us
          </div>
          <div className='AboutText'>
            Aesthetix is America’s leading audiovisual solutions integrator. With over 50 years of experience, we are the complete technology provider for the nation’s top enterprise brands for design, installation, and service of professional sound systems, AV systems, video conferencing systems, networks, and security surveillance systems.
          </div>
          <button type="submit" className="learn-btn">Learn More</button>
        </motion.div>

        <motion.div
          className='AbtusImage'
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
        <div className="overlayImage">
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

      <motion.div className='VideoDesc'>
        <motion.div
          className='Card1'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className='mainVideo'>
            <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/UytHN0NmSmw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className='mainText'>
            <div className='videoHeading'>
              ISE 2024 | Integrated systems Europe
            </div>
            <div className='videoText'>
              Reflecting on an incredible week at ISE 2024! Our team had a great time participating in one of the most dynamic and innovative events in the industry.
            </div>
            <button type="submit" className="learn-btn">Learn More</button>
          </div>
        </motion.div>

        <motion.div
          className='Card1'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className='mainVideo'>
            <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/rVz1XkXo0eE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className='mainText'>
            <div className='videoHeading'>
              Enhancing connectivity and collaboration
            </div>
            <div className='videoText'>
              Boardrooms with AI Auto Tracking Camera, Meeting Rooms/ Huddle Spaces,Town Hall with Fine Pixel Pitch Curved LED, Training Hall with HyFlex Facility, Smart Desk Management for Workspace
            </div>
            <button type="submit" className="learn-btn">Learn More</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
