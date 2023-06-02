import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView]=useInView({
    threshold:0.5,
  });
  return <div className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div>
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]'><img src="../assets/reed-3.png" alt="" /></div>
        <div>text</div>
      </div>
    </div>

  </div>;
};

export default About;
