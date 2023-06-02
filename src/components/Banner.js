import React from 'react';
import Image from '../assets/reed-2.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto flex gap-40">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'><motion.h1
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>SUHREED</motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span><TypeAnimation sequence={[
              'Copy Writer',
              2000,
              'Content Writer',
              2000,
              
            ]} speed={50} className='text-accent' wrapper='span' repeat={Infinity}></TypeAnimation>
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>I write engaging copies of B2C industries that touches customers painpoint. Ambition to help B2C industries to grow more through precise & compelling copies. So that the readers take action and can trust the brand.
            </motion.p>
          <motion.div
          variants={fadeIn('up',0.6)}
          initial="hidden"
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}}  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            
          </motion.div>
          <motion.div
          variants={fadeIn('up',0.7)}
          initial="hidden"
          whileInView={'show'} 
          viewport={{once:false,amount:0.7}}  className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-5'>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </motion.div>
        </div>
      </div>
      <div
     
     
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '><img src={Image} alt="" /></div>
    </div>
  </section>;
};

export default Banner;
