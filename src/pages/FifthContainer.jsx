import containerimage from "../Images/conimage.png"
const FifthContainer = () => {
  return <div>
    <div className="relative">
    <img src={containerimage} className="w-full" alt="Background Image" />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-[90px] md:text-[60px] sm:text-[42px] text-[23px] font-bold lg:max-w-[937px] md:max-w-[600px] sm:max-w-[400px] max-w-[250px] text-white md:leading-[90px]">
            See what we can do for your firm
        </h1>
        <button className="lg:max-w-[260px] md:max-w-[240px] sm:max-w-[230px] max-w-[200px] bg-white text-black px-5 py-3 rounded-full font-bold lg:text-lg md:text-base sm:text-sm text-xs lg:mt-8 lg:leading-6 md:leading-3 sm:leading-[8px] hover:bg-[#e2d0d0] hover:scale-110 transition-all duration-500">
            Schedule an Expert Call
        </button>
    </div>
</div>
  </div>;
};

export default FifthContainer;
