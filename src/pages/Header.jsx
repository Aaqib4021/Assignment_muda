import Button from "../components/Button";
import MenuItem from "../components/MenuItem";
import logo from "../Images/LOGO.png"
const Header = () => {
  return <div className="flex justify-between items-center ">
    <div>
        <div className="lg:w-[222px] md:w-[180px] sm:w-[140px] w-[90px]">
            <img src={logo}/>
        </div>
    </div>
    <div className="flex lg:gap-12 md:gap-8 sm:gap-7 gap-3">
        <MenuItem content="Home"/>
        <MenuItem content="Services"/>
        <MenuItem content="About"/>
        <MenuItem content="Blogs"/>
    </div>
    <div>
        <Button content="Login"/>
    </div>
  </div>;
};

export default Header;
