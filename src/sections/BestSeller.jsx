import {v4 as uuidv4} from "uuid"
import { SectionButton, BestSellerCard } from "../components"
import { bestSellerImageOne, bestSellerImageTwo } from "../assets"

const BestSeller = () => {
  const cardData = [
    {
      id: uuidv4(),
      image: bestSellerImageOne,
      rating: 4,
      title: "Sweater Shirt",
      regularPrice: `$${45.99}`,
      discountedPrice: `$${35.99}`
    },
    {
      id: uuidv4(),
      image: bestSellerImageTwo,
      rating: 3,
      title: "Pants Fashion",
      regularPrice: `$${55}`,
      discountedPrice: `$${44.99}`
    }
  ]

  return (
    // best seller
    <section id="best-seller" className="bg-darkBeige">
      {/* container */}
      <div className="container px-6 py-10 mx-auto flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between">
        {/* content */}
        <div className="flex flex-col items-center lg:items-start">
          {/* heading */}
          <h2 className="w-[250px] font-libre font-bold text-[35px] text-white text-center sm:w-auto sm:text-[40px] lg:w-[300px] lg:text-[45px] lg:text-start xl:w-[300px] xl:text-[50px]">
            Best Seller Product
          </h2>
          {/* description */}
          <p className="w-[300px] font-poppins font-normal text-[14px] text-white leading-[25px] text-center mb-[20px] sm:w-auto lg:w-[350px] lg:text-[16px] lg:text-start xl:w-[450px] xl:text-[18px] xl:leading-[28px] xl:mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.
          </p>
          {/* button */}
          <div>
            <SectionButton content={"SEE MORE"} />
          </div>
        </div>
        {/* cards */}
        <div className="flex flex-col gap-6 items-center sm:flex-row">
          {cardData.map((item) => (
            <BestSellerCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              rating={item.rating}
              regularPrice={item.regularPrice}
              discountedPrice={item.discountedPrice}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default BestSeller