
const Button = ({content}) => {
  return <div>
    <div className="bg-black cursor-pointer  lg:px-5 lg:py-3 md:px-3 md:py-2 px-2 py-2  text-white rounded-full font-medium md:font-semibold lg:font-bold lg:text-base md:text-sm text-xs hover:bg-[#333333] hover:scale-110 transition-all duration-500">{content}</div>
  </div>;
};

export default Button;
