import {v4 as uuidv4} from "uuid"
import {NewCollectionCard} from "../components"
import {newCollectionImageOne, newCollectionImageTwo, newCollectionImageThree} from "../assets"

const NewCollection = () => {
  const cardData = [
    {
      id: uuidv4(),
      image: newCollectionImageOne,
      content: "Sweater"
    },
    {
      id: uuidv4(),
      image: newCollectionImageTwo,
      content: "Jeans"
    },
    {
      id: uuidv4(),
      image: newCollectionImageThree,
      content: "Baskets"
    }
  ]

  return (
    // new collection
    <section id="new-collection" className="mb-[100px]">
      {/* container */}
      <div className="container px-6 mx-auto flex flex-col items-center">
        {/* heading */}
        <h2 className="font-libre font-bold text-[35px] text-center sm:text-[40px] lg:text-[45px] xl:text-[50px]">New Collection</h2>
        {/* description */}
        <p className="w-[300px] font-poppins font-normal text-[16px] text-center mt-[20px] mb-[40px] sm:w-auto lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {/* cards */}
        <div className="flex flex-col justify-between sm:gap-2 md:flex-row lg:gap-5 xl:w-[100%] xl:gap-0">
          {cardData.map((item) => (
            <NewCollectionCard
              key={item.id}
              image={item.image}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default NewCollection