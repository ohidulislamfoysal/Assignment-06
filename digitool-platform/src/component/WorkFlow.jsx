import React from 'react';

const WorkFlow = () => {
  return (
    <section className="">
      <div className="max-w-full mx-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  py-16 px-6 text-center text-white shadow-2xl ">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors">
            Explore Products
          </button>
          <button className="border-2 border-white/30  text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default WorkFlow;