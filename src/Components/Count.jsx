import React from 'react';

const Count = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 md:p-15'>
      <div className='space-y-2 md:space-y-3'>
        <h1 className='text-4xl md:text-5xl font-bold'>50K+</h1>
        <p className='opacity-90'>Active Users</p>
      </div>
      <div className='hidden md:block h-16 w-[1px] bg-white/30'></div>
      <div className='md:hidden w-20 h-[1px] bg-white/20'></div>
      <div className='space-y-2 md:space-y-3'>
        <h1 className='text-4xl md:text-5xl font-bold'>200+</h1>
        <p className='opacity-90'>Premium Tools</p>
      </div>
      <div className='hidden md:block h-16 w-[1px] bg-white/30'></div>
      <div className='md:hidden w-20 h-[1px] bg-white/20'></div>
      <div className='space-y-2 md:space-y-3'>
        <h1 className='text-4xl md:text-5xl font-bold'>4.9</h1>
        <p className='opacity-90'>Rating</p>
      </div>
    </div>
  );
};

export default Count;