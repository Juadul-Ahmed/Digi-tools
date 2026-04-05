import React from 'react';

const Starter = () => {
  return (
    <div className='bg-[#F9FAFC}'>
    <div className='text-center mt-8'>
      <h2 className='font-bold text-5xl mb-4'>Get Started in 3 Steps</h2>
      <p> Start using premium digital tools in minutes, not hours. </p>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mt-8'>
    
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      className='bg-purple-100  rounded-full p-4'
      src="/public/user.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold">
      Create Account
    </h2>
    <p className=''>Sign up for free in seconds. No credit card required to get started.</p>
    
  </div>
      </div>
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      className='bg-purple-100  rounded-full p-4'
      src="/package.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold">
      Choose Products
    </h2>
    <p className=''>Browse our catalog and select the tools <br />that fit your needs.</p>
    
  </div>
      </div>
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      className='bg-purple-100  rounded-full  p-4 object-'
      src="/rocket.png"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-2xl font-bold">
      Start Creating
    </h2>
    <p className=''>Download and start using your premium <br /> tools immediately.</p>
    
  </div>
      </div>
      
      

    </div>
    </div>
  );
};

export default Starter;