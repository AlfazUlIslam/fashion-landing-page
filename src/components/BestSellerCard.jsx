import { IconContext } from "react-icons"
import { IoIosStar } from "react-icons/io"

const BestSellerCard = (props) => {
    const {image, rating, title, regularPrice, discountedPrice} = props

    const starIDs = [
        { id: "3d9"},
        { id: "2ee"},
        { id: "8i9"},
        { id: "0ph"},
        { id: "3e4"},
    ]

    return (
        // best seller card
        <div className="rounded-t-[52px] bg-white">
            {/* image */}
            <div>
                <img className="w-[250px] sm:w-auto lg:w-[250px] xl:w-auto" src={image} />
            </div>
            {/* rating */}
            <div className="pl-6 mt-[10px] mb-[8px] flex gap-[8px] md:mt-[14px] md:mb-[12px]">
                {starIDs.map((elem, index) => (
                    <IconContext.Provider 
                        value={{className: `${(index + 1) > rating ? 'text-lightGray' : 'text-darkerYellow'}  text-[14px] md:text-[20px] lg:text-[14px] xl:text-[22px]`}}
                        key={elem.id}
                    >
                        <IoIosStar />
                    </IconContext.Provider>
                ))}
            </div>
            {/* title */}
            <div className="font-poppins font-semibold text-[18px] pl-6 md:text-[20px] lg:text-[18px] xl:text-[24px]">
                {title}
            </div>
            {/* prices */}
            <div className="pl-6 pb-4 flex gap-[30px]">
                {/* regular price */}
                <span className="font-poppins font-regular text-[14px] text-lightGray md:text-[16px] lg:text-[14px] xl:text-[18px]">
                    {regularPrice}
                </span>
                {/* discounted price */}
                <span className="font-poppins font-regular text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px]">
                    {discountedPrice}
                </span>
            </div>
        </div>
    )
}
export default BestSellerCard