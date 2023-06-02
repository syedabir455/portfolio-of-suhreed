import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a className='text-4xl font-bold' href="#"><span className='text-accent'>Reed</span></a>
        <button className='btn btn-sm'>What I can help you with</button>
      </div>
    </div>
    </header>;
};

export default Header;
