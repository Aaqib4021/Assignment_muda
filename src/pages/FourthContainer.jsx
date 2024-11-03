import Card from "../components/Card";
import t2cimg1 from "../Images/t2cimage1.png"
import t2cimg2 from "../Images/t2cimage2.png"
import t2cimg3 from "../Images/t2cimage3.png"
import t2cimg4 from "../Images/t2cimage4.png"
const FourthContainer = () => {
    return <div className="sm:pt-[91px] pt-[40px] bg-[#F5F4FE] lg:px-[64px] md:px-[46px] sm:px-[30px] px-4 py-[14px]">


        <h1 className="mb-[60px] xl:text-[64px] lg:text-[42px] md:text-[32px] sm:text-[25px] text-[18px] font-bold text-[#212121] max-w-[884px] md:leading-[88px]">Investment Banking & Capital Advisory Services</h1>


        <div className="flex justify-evenly flex-wrap gap-[10px]">

        <Card src={t2cimg1} bullet1="Assisting businesses in securing capital from public and private markets." bullet2="   - Includes IPOs, debt issuance, and private equity." bullet3="" bullet4="" imagecontext="Fundraising" height="497px"/>

        <Card src={t2cimg2} bullet1="Strategic guidance during mergers and acquisitions." bullet2="   - Services include target identification, valuation, and negotiation." bullet3="" bullet4="" imagecontext="M&A Advisory" height="497px"/>

        <Card src={t2cimg3} bullet1="Support through mergers, demergers, buybacks, and financial restructuring." bullet2="Guidance on investment strategies for optimal business growth." bullet3="" bullet4="" imagecontext="Corporate Finance" height="497px"/>


        <Card src={t2cimg4} bullet1=" Support through mergers, demergers, buybacks, and financial restructuring.Market trend analysis and competitor insights." bullet2="Market trend analysis and competitor insights." bullet3="Market trend analysis and competitor insights." bullet4="Advising on joint ventures, exit strategies, and long-term growth planning." imagecontext="Restructuring & Strategic Advisory" height="497px"/>



        </div>
    </div>;
};

export default FourthContainer;
