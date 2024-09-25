const NavbarLink = (props) => {
  const {content} = props

  return (
    // navbar link
    <a className="font-poppins font-normal text-[14px] text-black transition-all duration-1000 hover:text-darkYellow sm:text-[16px]" href="#">
      {content}
    </a>
  )
}
export default NavbarLink