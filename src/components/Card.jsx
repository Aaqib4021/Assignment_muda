/* eslint-disable react/prop-types */

const Card = ({src,bullet1,bullet2,bullet3,bullet4,imagecontext,height}) => {
  return <div>
    <div className="w-[300px] cursor-pointer mb-[40px] border border-[#DDDDDD] bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500"  style={{ height: height }}>
        <h1 className="absolute z-1 text-white font-[800] w-[170px] text-[24px] ml-4 mt-3">{imagecontext}</h1>
        <div>
            <img src={src}/>
        </div>

        <div className="mt-[24px] mx-auto w-[267px] text-base font-bold text-[#4A4A4A]">
            <ul className="list-disc px-[15px] space-y-[15px]">
                <li className="leading-[24px]">{bullet1}</li>
                <li className="leading-[24px]">{bullet2}</li>
                {bullet3 && <li className="leading-[24px]">{bullet3}</li>}
                {bullet4 && <li className="leading-[24px]">{bullet4}</li>}
            </ul>
        </div>
    </div>
  </div>;
};

export default Card;
