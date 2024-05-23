import dogAndCat from "../../assets/images/dog-and-cat-banner.png"

export const Footer = () => {
  return (
    <div className="bg-black flex justify-center items-center py-2">
      <img src={dogAndCat} alt="PetFinder Logo" className="w-8 rounded-full md:w-16 md:-mt-4 " />
      <p className="text-white text-base md:text-2xl md:-mt-4">PetFinder</p>
    </div>
  )
}
