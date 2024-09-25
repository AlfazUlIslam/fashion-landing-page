const SectionButton = (props) => {
    const {content} = props

    return (
        <button className="w-[160px] h-[50px] bg-lightBlack rounded-[10px] font-poppins font-semibold text-[14px] text-white transition-all duration-1000 hover:bg-black hover:shadow-lg active:scale-75 lg:w-[170px] lg:h-[60px] lg:text-[16px]">
            {content}
        </button>
    )
}
export default SectionButton