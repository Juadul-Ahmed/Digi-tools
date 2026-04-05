import React from 'react';

const SubBanner = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
      <div className='mt-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 text-center  p-10 md:p-15'>
      <div>
        <h2 className='font-bold text-4xl mb-2'>Ready to Transform Your Workflow?</h2>
        <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
      </div> 
    </div>
    <div className='flex justify-center items-center gap-8'>
        <button className='btn rounded-full text-purple-500'>Explore Products</button>
        <button className='btn rounded-full  text-purple-500'>View Pricing</button>
      </div>

      <p className='p-4 text-center mt-2'>14-day free trial • No credit card required • Cancel anytime</p>

    </div>
  );
};

export default SubBanner;