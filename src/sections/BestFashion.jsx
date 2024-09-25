import { StatisticsItem } from "../components"
import { bestFashionImage } from "../assets"

const BestFashion = () => {
  const statisticsData = [
    {
      id: 1,
      number: `${2010}`,
      text: "Founded"
    },
    {
      id: 2,
      number: `${5000}+`,
      text: "Product Sold"
    },
    {
      id: 3,
      number: `${4500}+`,
      text: "Best Reviews"
    }
  ]
  return (
    // best fashion
    <section id="best-fashion" className="mb-[100px]">
      {/* container */}
      <div className="container px-6 mx-auto flex flex-col-reverse items-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
        {/* image */}
        <div>
          <img 
            className="w-[300px] sm:w-[450px] xl:w-[500px]"
            src={bestFashionImage} 
            alt="Person doing shopping" 
          />
        </div>
        {/* content */}
        <div className="flex flex-col items-center gap-6 lg:items-start">
          {/* heading */}
          <h2 className="w-[250px] font-libre font-bold text-[35px] text-center sm:w-auto sm:text-[40px] lg:w-[280px] lg:text-[45px] lg:text-start xl:w-[300px] xl:text-[50px]">Best Fashion Since 2010</h2>
          {/* description */}
          <p className="w-[300px] font-poppins font-normal text-[16px] text-center sm:w-auto lg:w-[320px] lg:text-[18px] lg:text-start xl:w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. 
          </p>
          {/* stats */}
          <div className="w-[300px] rounded-[10px] bg-lightBeige p-2 flex justify-between sm:w-[450px] xl:w-[500px]">
            {statisticsData.map((item, index) => (
              <StatisticsItem
                key={item.id}
                number={item.number}
                text={item.text}
                line={index === 1 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default BestFashion