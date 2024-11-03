
const MenuItem = ({content}) => {
  return <div >
    <div className="menu-item cursor-pointer lg:text-lg md:text-[16px] sm:text-sm text-xs  font-medium text-[#595C61] animate-underline hover:scale-110 hover:font-bold transition-all duration-500 leading-[42px]">{content}</div>
  </div>;
};

export default MenuItem;
