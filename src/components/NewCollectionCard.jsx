const NewCollectionCard = (props) => {
    const {image, content} = props

    return (
        // card
        <div 
            style={{backgroundImage: `url(${image})`}}
            className="group/new-collection-card w-[250px] h-[300px] bg-contain bg-no-repeat relative overflow-hidden sm:w-[300px] sm:h-[350px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[350px] xl:w-[350px] xl:h-[400px]"
        >
            {/* content */}
            <div className="w-[215px] h-[37px] rounded-[10px] bg-white font-poppins font-normal text-[16px] flex justify-center items-center absolute top-[100%] left-[50%] translate-x-[-50%] transition-all duration-1000 cursor-pointer group-hover/new-collection-card:top-[80%] sm:w-[265px] sm:h-[47px] md:w-[215px] md:h-[37px] lg:w-[265px] lg:h-[47px] xl:w-[315px] xl:h-[57px] xl:rounded-[20px]">
                {content}
            </div>
        </div>
    )
}
export default NewCollectionCard