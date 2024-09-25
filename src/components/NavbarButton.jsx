const NavbarButton = (props) => {
  const {content} = props

  return (
    // navbar button
    <div className="w-[80px] h-[40px] rounded-[10px] bg-white border border-darkYellow font-poppins font-normal text-[14px] flex justify-center items-center transition-all duration-1000 cursor-pointer hover:bg-darkYellow hover:shadow-lg active:scale-75 sm:text-[16px] sm:w-[95px] sm:h-[45px]">{content}</div>
  )
}
export default NavbarButton