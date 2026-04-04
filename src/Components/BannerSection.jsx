import React from "react";

const BannerSection = () => {
  return (
    <div className="hero  min-h-screen container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="banner.png"
          className="max-w-sm rounded-lg shadow-2xl ml-15"
        />
        
        <div>
        
        
          <p className="mb-6 w-100 bg-purple-100 text-purple-800 text-xl font-bold rounded-full p-2">
                   New: AI-Powered Tools Available
          </p>
          

          <p className="mb-4 text-5xl font-bold [text-#101727]">
            Supercharge Your <br/> Digital Workflow
          </p>
          <p className="mb-6">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>
          
          <button  className="btn btn-primary mr-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold">Get Started</button>
          <a  className="btn btn-primary rounded-full font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"><img src="/Play.png" alt="" /> Get Started</a>
          
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
