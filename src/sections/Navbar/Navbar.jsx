import { useState } from "react"
import {NavbarLink, NavbarButton} from "../../components"
import {logo} from "../../assets"
import "./Navbar.css"

const Navbar = () => {
  const [mobileMenuButtonStyle, setMobileMenuButtonStyle] = useState('')
  const [mobileMenuStyle, setMobileMenuStyle] = useState('hidden')

  const handleClick = () => {
      mobileMenuButtonStyle === '' ? 
          setMobileMenuButtonStyle('open') : setMobileMenuButtonStyle('')
      mobileMenuStyle === 'hidden' ? 
          setMobileMenuStyle('flex') : setMobileMenuStyle('hidden')
  }

  return (
    // navbar
    <nav className="mb-[50px]">
      {/* container */}
      <div className="container p-6 mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <img className="w-[70px] h-[20px] sm:w-[85px] sm:h-[25px]" src={logo} alt="logo" />
        </div>
        {/* links */}
        <div className="hidden gap-[25px] md:flex xl:gap-[35px]">
          <NavbarLink content={"Women"} />
          <NavbarLink content={"Men"} />
          <NavbarLink content={"Kids"} />
          <NavbarLink content={"Collection"} />
          <NavbarLink content={"Trends"} />
        </div>
        {/* buttons */}
        <div className="hidden gap-[10px] md:flex">
          <NavbarButton content={"Login"} />
          <NavbarButton content={"Sign up"} />
        </div>
        {/* mobile menu button */}
        <button 
            className={`${mobileMenuButtonStyle} mobile-menu-button md:hidden`}
            onClick={handleClick}
            >
            <span className="line-one"></span>
            <span className="line-two"></span>
            <span className="line-three"></span>
        </button>
      </div>
      {/* mobile menu container */}
      <div className="md:hidden">
        {/* mobile menu */}
        <div className={`${mobileMenuStyle} bg-white shadow-xl py-6 flex-col gap-6 items-center absolute left-6 right-6`}> 
          <NavbarLink content={"Women"} />
          <NavbarLink content={"Men"} />
          <NavbarLink content={"Kids"} />
          <NavbarLink content={"Collection"} />
          <NavbarLink content={"Trends"} />
          {/* buttons */}
          <div className="flex gap-[10px]">
            <NavbarButton content={"Login"} />
            <NavbarButton content={"Sign up"} />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar