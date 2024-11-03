import Button from "../components/Button";
import MenuItem from "../components/MenuItem";
import logo from "../Images/LOGO.png"
import { FaInstagram,FaYoutube ,FaLinkedinIn,FaTwitter   } from "react-icons/fa";
const LastContainer = () => {
  return <div className="sm:pt-[51px]  lg:px-[64px] md:px-[46px] sm:px-[30px] px-4 py-[14px] mb-20 ">
    <div className="flex justify-evenly gap-4 flex-wrap ">
        <div className="lg:w-[300px] md:w-[250px] sm:w-[190px] w-[150px] flex flex-col gap-8 ">

            <div className="lg:w-[222px] md:w-[180px] sm:w-[140px] w-[90px]">
                <img src={logo}/>
            </div>
            <div className="lg:w-[294px]  sm:text-lg text-base font-medium">712, Lokmat Bhawan,A WING, Ramdaspeth, Nagpur, Maharashtra 440010</div>
            <div className="flex items-center md:gap-6 sm:gap-4 gap-3">
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
            <FaTwitter />
            </div>
        </div>


        <div className="lg:w-[300px] md:w-[250px] sm:w-[190px] ">
            <h2 className="text-[20px] font-semibold">Services</h2>
            <div className="mt-4 flex flex-col gap-[16px]">
                <MenuItem content="Companies Act"/>
                <MenuItem content="Securities Law"/>
                <MenuItem content="Financial Services"/>
                <MenuItem content="Investment Banking"/>
                <MenuItem content="Risk Management"/>
                <MenuItem content="Audit"/>
            </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] sm:w-[190px] ">
            <h2 className="text-[20px] font-semibold">Resources</h2>
            <div className="mt-4 flex flex-col gap-[16px]">
                <MenuItem content="About Us"/>
                <MenuItem content="Blogs"/>
                <MenuItem content="Contact Us"/>
            </div>
        </div>
        <div className="lg:w-[300px] md:w-[250px] sm:w-[190px]  ">
            <h2 className="text-[20px] font-semibold">Contact information</h2>
            <div className="mt-4 flex flex-col gap-[16px]">
                <MenuItem content="+91 299366311"/>
                <MenuItem content="+91 299366311"/>
                <MenuItem content="infor@moredaliya.com"/>
                <Button content="Get in touch with us"/>
            </div>
        </div>
    </div>
  </div>;
};

export default LastContainer;
