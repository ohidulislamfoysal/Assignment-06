import React from 'react';

const Steps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative border border-gray-100 rounded-3xl p-12 shadow-sm flex flex-col items-center text-center">
            <span className="absolute flex items-center justify-center h-10 w-10 top-6 right-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-2 py-1 rounded-full">
              01
            </span>
            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <img src="/assets/user.png" alt="User" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Create Account</h3>
            <p className="text-gray-500 leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          <div className="relative border border-gray-100 rounded-3xl p-12 shadow-sm flex flex-col items-center text-center">
            <span className="absolute  flex items-center justify-center h-10 w-10 top-6 right-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-2 py-1 rounded-full">
              02
            </span>
            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <img src="/assets/package.png" alt="Package" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Choose Products</h3>
            <p className="text-gray-500 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative border border-gray-100 rounded-3xl p-12 shadow-sm flex flex-col items-center text-center">
            <span className="absolute h-10 w-10 top-6 right-6 flex items-center justify-center  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold px-2 py-1 rounded-full">
              03
            </span>
            <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <img src="/assets/rocket.png" alt="Rocket" className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Start Creating</h3>
            <p className="text-gray-500 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;