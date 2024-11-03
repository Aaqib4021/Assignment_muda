import Button from "../components/Button";
import tpimg from "../Images/Hero.png"


const HeroContainer = () => {
  return <div className="mt-[74px] flex justify-between items-center gap-2 ">
    <div className="xl:w-[683px] lg:w-[670px] md:w-[600px] sm:w-[400px] ">
        <h1 className="xl:text-[69px] lg:text-[50px] sm:text-[40px] text-[20px] font-bold text-[#282828] sm:leading-[94px]">Service Details</h1>
        <p className="my-2 xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[11px] text-[8px] font-semibold text-[#656D78] sm:leading-[30px]">At <span className="text-[#1E1E1E]">More Daliya & Associates,</span> we offer expert corporate and financial advisory services, ensuring your business stays compliant while driving growth. With a focus on corporate governance and capital markets, we help businesses thrive with confidence.</p>
        <div className="sm:max-w-[191px] max-w-[110px]">
        <Button content="Get Started ➡️"/>
        </div>
    </div>
    <div>
        <div className="xl:w-[467px] lg:w-[350px] md:w-[250px] sm:w-[200px] w-[130px]">
            <img src={tpimg}/>
        </div>
    </div>
  </div>;
};


export default HeroContainer;
