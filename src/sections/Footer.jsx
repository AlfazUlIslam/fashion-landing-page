import {FooterLink} from "../components"
import { logo, facebook, instagram, linkedIn } from "../assets"

const Footer = () => {
  return (
    <footer id="footer" className="py-[55px]">
        {/* container */}
        <div className="container mx-auto flex flex-col gap-[65px]">
            {/* links & contact + */}
            <div className="flex flex-col items-center gap-[20px] md:px-[20px] md:flex-row md:justify-between md:gap-[0px] lg:items-start xl:px-0">
                {/* links */}
                <div className="flex flex-col gap-6 sm:flex-row lg:w-1/2 lg:justify-between lg:gap-0">
                    {/* menu portion */}
                    <div className="flex flex-col items-center gap-[6px] md:items-start">
                        <h5 className="font-bold text-[16px] text-lightBlack mb-[11px]">MENU</h5>
                        <FooterLink content={"Women"} />
                        <FooterLink content={"Men"} />
                        <FooterLink content={"Kids"} />
                        <FooterLink content={"Collection"} />
                        <FooterLink content={"Trends"} />
                    </div>
                    {/* shop portion */}
                    <div className="flex flex-col items-center gap-[6px] md:items-start">
                        <h5 className="font-bold text-[16px] text-lightBlack mb-[11px]">SHOP</h5>
                        <FooterLink content={"Category 1"} />
                        <FooterLink content={"Category 2"} />
                        <FooterLink content={"Category 3"} />
                        <FooterLink content={"Category 4"} />
                        <FooterLink content={"Category 5"} />
                    </div>
                    {/* help portion */}
                    <div className="flex flex-col items-center gap-[6px] md:items-start">
                        <h5 className="font-bold text-[16px] text-lightBlack mb-[11px]">HELP</h5>
                        <FooterLink content={"Privacy Policy"} />
                        <FooterLink content={"Terms & Condition"} />
                        <FooterLink content={"Special E-shop"} />
                        <FooterLink content={"Shipping"} />
                        <FooterLink content={"Secure Payments"} />
                    </div>
                </div>
                
                {/* contact details & address */}
                <div className="mt-[10px] flex flex-col items-center md:mt-0 md:items-start md:self-start">
                    <h5 className="font-bold text-[16px] text-lightBlack">{"(052) 611-5711"}</h5>
                    <h5 className="font-bold text-[16px] text-lightBlack">company@domain.com</h5>
                    <span className="font-normal text-[14px] text-darkGray mt-[15px]">575 Crescent Ave. Quakertown, PA 18951</span>
                </div>
                {/* footer logo */}
                <div className="md:self-start">
                    <img className="w-[80px]" src={logo} alt="" />
                </div>
            </div>
            {/* social icons & copyright */}
            <div className="flex flex-col gap-[20px] md:px-[20px] md:flex-row md:justify-between md:gap-0 xl:px-0">
                {/* social icons */}
                <div className="flex justify-center gap-[25px]">
                    <a href="#">
                        <img src={facebook} />
                    </a>
                    <a href="#">
                        <img src={linkedIn} />
                    </a>
                    <a href="#">
                        <img src={instagram} />
                    </a>
                </div>
                {/* copyright text */}
                <div className="w-[258px] font-normal text-[14px] text-darkGray text-center mx-auto md:w-auto md:mx-0">
                    2020 Fashion Apparels Online Shop Figma Template
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer