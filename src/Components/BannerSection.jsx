import React from "react";

const BannerSection = () => {
  return (
    <div className="hero min-h-screen container mx-auto px-4 lg:px-0">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
        <img
          src="banner.png"
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-2xl"
        />
        
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
        
        
          <p className="mb-6 inline-block bg-purple-100 text-purple-800 text-sm md:text-base font-bold rounded-full px-4 py-2 border border-purple-200">
                   New: AI-Powered Tools Available
          </p>
          

          <p className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101727] leading-tight">
            Supercharge Your <br className="hidden md:block"/> Digital Workflow
          </p>
          <p className="mb-8 text-gray-600 max-w-xl text-lg">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          
         <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-md md:btn-lg border-none rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 shadow-lg hover:opacity-90">
              Get Started
            </button>
            
            <a className="btn btn-md md:btn-lg btn-ghost rounded-full font-bold flex items-center gap-2 group">
               <img src="/Play.png" alt="Play" className="w-6 h-6" /> 
               <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                 Watch Demo
               </span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
