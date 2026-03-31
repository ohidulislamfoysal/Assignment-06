import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="relative min-h-[600px] flex items-center overflow-hidden py-12 lg:py-0">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm font-medium px-5 py-2 rounded-full w-fit">
              <img className="animate-pulse" src="assets/active.png" alt="active" />
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                New: AI-Powered Tools Available
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Supercharge Your
              <br className="hidden lg:block" />
              Digital Workflow
            </h1>

            <p className="text-lg text-zinc-700 max-w-md">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button className="btn border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white px-8">
                Explore Products
              </button>
              <button className="btn border border-purple-800 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full bg-clip-text text-transparent flex items-center gap-2 px-8 font-semibold">
                <img src="assets/Play.png" alt="play" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                className="relative h-auto max-h-[480px] w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                src={BannerImage}
                alt="AI Models Banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-white">
          <div className="text-center px-10 py-6">
            <h1 className="text-5xl md:text-6xl font-bold">50K+</h1>
            <p className="text-xl">Active Users</p>
          </div>

          <div className="text-center px-10 py-6 border-y md:border-y-0 md:border-x border-white/30">
            <h1 className="text-5xl md:text-6xl font-bold">200+</h1>
            <p className="text-xl">Premium Tools</p>
          </div>

          <div className="text-center px-10 py-6">
            <h1 className="text-5xl md:text-6xl font-bold">4.9</h1>
            <p className="text-xl">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;