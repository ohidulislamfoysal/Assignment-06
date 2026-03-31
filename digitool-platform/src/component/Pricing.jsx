import React from 'react';

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold mb-1">Starter</h3>
            <p className="text-gray-500 mb-6 text-sm">Perfect for getting started</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>
            <ul className="space-y-2 mb-10 flex-grow text-gray-600">
              <li>✓ Access to 10 free tools</li>
              <li>✓ Basic templates</li>
              <li>✓ Community support</li>
              <li>✓ 1 project per month</li>
            </ul>
            <button className="btn w-full py-3 bg-[#7C3AED] text-white font-semibold rounded-full text-sm transition-colors hover:bg-[#6D28D9]">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-7 text-white flex flex-col scale-105 shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-1">Pro</h3>
            <p className="text-white/80 mb-6 text-sm">Best for professionals</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-white/80 text-sm">/Month</span>
            </div>
            <ul className="space-y-2 mb-10 flex-grow">
              <li>✓ Access to all premium tools</li>
              <li>✓ Unlimited templates</li>
              <li>✓ Priority support</li>
              <li>✓ Unlimited projects</li>
              <li>✓ Cloud sync</li>
              <li>✓ Advanced analytics</li>
            </ul>
            <button className="btn w-full py-3 bg-white text-[#7C3AED] font-semibold rounded-full text-sm transition-colors hover:bg-gray-200">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold mb-1">Enterprise</h3>
            <p className="text-gray-500 mb-6 text-sm">For teams and businesses</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>
            <ul className="space-y-2 mb-10 flex-grow text-gray-600">
              <li>✓ Everything in Pro</li>
              <li>✓ Team collaboration</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Custom branding</li>
            </ul>
            <button className="btn w-full py-3 bg-[#7C3AED] text-white font-semibold rounded-full text-sm transition-colors hover:bg-[#6D28D9]">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;