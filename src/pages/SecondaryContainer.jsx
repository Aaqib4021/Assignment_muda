
import Card from "../components/Card";
import img1 from "../Images/cimage1.png";
import img2 from "../Images/cimage2.png";
import img3 from "../Images/cimage3.png";
import img4 from "../Images/cimage4.png";
import img5 from "../Images/cimage5.png";
import img6 from "../Images/cimage6.png";
import img7 from "../Images/cimage7.png";
import img8 from "../Images/cimage8.png";


const SecondaryContainer = () => {
  return <div className="md:mt-[60px] mt-[20px] sm:pt-[91px] pt-[20px] bg-[#EDFBF4] lg:px-[64px] md:px-[46px] sm:px-[30px] px-4 py-[14px]">
    <h1 className="lg:mb-[60px] md:mb-[30px] sm:mb-[20px] xl:text-[64px] lg:text-[42px] md:text-[32px] sm:text-[25px] text-[18px] font-bold text-[#212121] leading-[88px]">Company Secretary Services</h1>

    <div className="flex flex-wrap justify-evenly gap-[10px]">

    <Card src={img1} bullet1=" Compliance with Companies Act & regulations" bullet2="Maintaining statutory registers & records" bullet3="Board & Meeting Facilitation" bullet4="" imagecontext="Corporate Governance & Compliance" height="387px"/>


    <Card src={img2} height="387px" bullet1="Mergers & Acquisitions (M&A) compliance" bullet2="Buybacks, demergers, and spin-offs" bullet3="Corporate reorganization & liquidation" bullet4="" imagecontext="Corporate Restructuring"/>


    <Card src={img3} height="387px" bullet1="Incorporation of Private, Public, Section 8 companies, and LLPs" bullet2="Drafting MOA & AOA" bullet3="License procurement & director registration" bullet4="" imagecontext="Company Formation & Registration"/>


    <Card src={img4} height="387px" bullet1="Compliance audits & secretarial checks" bullet2="M&A due diligence" bullet3="Filing and compliance" bullet4="" imagecontext="Secretarial Audit & Due Diligence"/>

    <Card src={img5} height="387px" bullet1=" Share transfers, allotments & certificates" bullet2="Managing dividends & shareholder disputes" bullet3="" bullet4="" imagecontext="Shareholder Services"/>

    <Card src={img6} height="387px" bullet1="SEBI, FEMA, RBI reporting" bullet2="Industrial licenses & government liaison" bullet3="" bullet4="" imagecontext="Regulatory Compliance & Liaison"/>

    <Card src={img7} height="387px" bullet1="Drafting contracts & legal documents" bullet2="Legal opinions on company law" bullet3="Director duties & compliance advisory" bullet4="" imagecontext="Corporate Legal Advisory"/>

    <Card src={img8} height="387px" bullet1="Tax planning & CSR compliance" bullet2="ESOP management" bullet3="Public issues & private placements" bullet4="" imagecontext="Corporate Finance & Taxation"/>

    </div>
  </div>;
};

export default SecondaryContainer;
