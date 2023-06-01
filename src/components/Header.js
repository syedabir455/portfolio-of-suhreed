import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a className='text-4xl font-bold' href="#">Suh<span className='text-accent'>Reed</span></a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
    </header>;
};

export default Header;
