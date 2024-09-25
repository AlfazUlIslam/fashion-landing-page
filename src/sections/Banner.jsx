import {SectionButton} from "../components"
import {bannerImage} from "../assets"

const Banner = () => {
  return (
    // banner
    <section id="banner" className="mb-[100px]">
        {/* container */}
        <div className="container px-6 mx-auto flex flex-col-reverse items-center gap-6 md:flex-row lg:gap-0 lg:justify-between">
            {/* banner content */}
            <div className="flex flex-col items-center lg:items-start">
                {/* heading */}
                <h1 className="w-[250px] font-poppins font-semibold text-[35px] text-black text-center sm:w-auto sm:text-[40px] md:w-[300px] md:text-left lg:text-[45px] xl:w-[400px] xl:text-[50px]">
                    Find The Best Fashion Style For You
                </h1>
                {/* description */}
                <p className="w-[300px] font-poppins font-normal text-[14px] text-black text-center mt-1 mb-5 sm:w-auto md:w-[300px] md:text-left lg:w-[400px] lg:text-[16px] lg:mt-4 lg:mb-8 xl:mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. 
                </p>
                {/* button */}
                <div className="md:self-start">
                    <SectionButton content={"SHOP NOW"} />
                </div>
            </div>
            {/* banner image */}
            <div>
                <img className="w-[300px] sm:w-[450px] xl:w-[500px]" src={bannerImage} />
            </div>
        </div>
    </section>
  )
}
export default Banner