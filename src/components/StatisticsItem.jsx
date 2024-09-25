const StatisticsItem = (props) => {
    const {number, text, line} = props

    return (
        // statictics item
        <div className={`${line ? "border-x-[1px]" : "border-x-0"} border-black p-2 sm:p-4`}>
            {/* number */}
            <h3 className="font-podkova font-bold text-[25px] sm:text-[40px] xl:text-[50px]">{number}</h3>
            {/* text */}
            <span className="font-poppins font-medium text-[12px] sm:text-[16px] xl:text-[20px]">{text}</span>
        </div>
    )
}
export default StatisticsItem