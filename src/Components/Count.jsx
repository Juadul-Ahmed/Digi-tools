import React from 'react';

const Count = () => {
  return (
    <div className='flex justify-center items-center gap-15 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-15'>
      <div className='space-y-3'>
        <h1 className='text-5xl font-bold'>50K+</h1>
        <p className=''>Active Users</p>
      </div>
      <div className='h-16 w-[1px] bg-white/30'></div>
      <div className='space-y-3'>
        <h1 className='text-5xl font-bold'>200+</h1>
        <p className=''>Premium Tools</p>
      </div>
      <div className='h-16 w-[1px] bg-white/30'></div>
      <div className='space-y-3'>
        <h1 className=' text-5xl font-bold'>4.9</h1>
        <p className=''>Rating</p>
      </div>
    </div>
  );
};

export default Count;