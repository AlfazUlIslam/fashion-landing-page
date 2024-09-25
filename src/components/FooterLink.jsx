const FooterLink = (props) => {
    const {content} = props

    return (
        <a className="font-normal text-[14px] text-darkGray transition-all duration-1000 hover:text-darkYellow" href="#">
            {content}
        </a>
    )
}
export default FooterLink